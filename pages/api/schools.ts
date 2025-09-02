import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import pool from '@/lib/db'; // adjust your import path accordingly

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // POST: Process add school with upload
    const uploadDir = path.join(process.cwd(), 'public', 'schoolImages');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  
    const form = formidable({
      uploadDir,
      keepExtensions: true,
    });
  
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: err.message });
  
      try {
        const { name, address, city, state, contact, email_id } = fields;
        const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
  
        if (!imageFile || typeof imageFile.filepath !== 'string') {
          return res.status(400).json({ error: 'Image upload failed' });
        }
  
        const fileName = path.basename(imageFile.filepath);
  
        const sql = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        await pool.query(sql, [name, address, city, state, contact, fileName, email_id]);
  
        res.status(200).json({ message: 'School added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add school' });
      }
    });
  } else if (req.method === 'GET') {
    // GET: Fetch list of schools
    try {
      const [rows] = await pool.query('SELECT id, name, address, city, image FROM schools');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch schools' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
