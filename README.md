
---

# 🏫 School Directory

A full-stack mini-project built with **Next.js** and **MySQL**, allowing users to add schools with images and display them in a responsive directory.
This project demonstrates form handling, file uploads, API routes, and deployment with **Vercel** + **Railway MySQL**.

---

## ✨ Features

* 📌 **Add School** page — form with validation for name, address, city, state, contact number, email, and image upload.
* 🖼️ **Image Uploads** — school images stored in the `/public/schoolImages` folder.
* 📋 **Show Schools** page — responsive grid layout displaying schools with details and images.
* ✅ **Validation** — input validation for contact numbers and emails with `react-hook-form`.
* ⚡ **Full-stack** — Next.js API Routes handle database operations and file uploads.
* ☁️ **Deployment** — frontend hosted on Vercel, backend/database on Railway MySQL.
* 📱 **Responsive** — optimized for both desktop and mobile.

---

## 🛠️ Tech Stack

* **Frontend:** [Next.js (App Router)](https://nextjs.org/), [React Hook Form](https://react-hook-form.com/), [Tailwind CSS](https://tailwindcss.com/)
* **Backend:** Next.js API Routes, Node.js
* **Database:** MySQL (Railway)
* **Deployment:** Vercel (frontend) + Railway (database)

---

## 🚀 Getting Started

### Prerequisites

* Node.js v16 or higher
* A MySQL database (local or hosted e.g. Railway)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/school-directory.git
   cd school-directory
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file and add your MySQL credentials:

   ```env
   DB_HOST=your-db-host
   DB_USER=your-db-username
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗒️ Notes

* Images are stored in `/public/schoolImages`. For production scalability, consider using cloud storage (AWS S3, Cloudinary, or Supabase).
* Make sure the MySQL schema matches form fields. Example schema:

  ```sql
  CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    email_id VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL
  );
  ```

---

## 🙏 Acknowledgments

This project was created as part of a **Web Development Assignment** showcasing full-stack development with **Next.js + MySQL**.

---
