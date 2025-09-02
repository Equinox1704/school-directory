import { NextResponse } from 'next/server';
import formidable, { Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';
import pool from '@/lib/db';
import { IncomingMessage } from 'http';

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser to handle multipart
  },
};

export async function POST(request: Request) {
  const uploadDir = path.join(process.cwd(), 'public', 'schoolImages');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    // Cast Next.js Request to IncomingMessage for formidable compatibility
    form.parse(request as unknown as IncomingMessage, async (err: Error | null, fields: Fields, files: Files) => {
      if (err) {
        return reject(NextResponse.json({ error: err.message }, { status: 500 }));
      }

      try {
        const { name, address, city, state, contact, email_id } = fields;
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;

        if (!imageFile || typeof imageFile.filepath !== 'string') {
          return reject(NextResponse.json({ error: 'Image upload failed' }, { status: 400 }));
        }

        // Store just the filename for referencing in DB and frontend path creation
        const fileName = path.basename(imageFile.filepath);

        const sql = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        await pool.query(sql, [name, address, city, state, contact, fileName, email_id]);

        resolve(NextResponse.json({ message: 'School added successfully' }));
      } catch (_error) {
        console.log(_error);
        reject(NextResponse.json({ error: 'Failed to add school' }, { status: 500 }));
      }
    });
  });
}

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT id, name, address, city, image FROM schools');
    return NextResponse.json(rows);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch schools' }, { status: 500 });
  }
}
