````
# 🏫 School Directory

A full-stack mini-project built with **Next.js** and **MySQL**, allowing users to add schools with images and display them in a responsive directory.  
This project demonstrates form handling, file uploads, API routes, and deployment with **Vercel** + **Railway MySQL**.

---

## ✨ Features

- 📌 **Add School** page — form with validation for name, address, city, state, contact number, email, and image upload.  
- 🖼️ **Image Uploads** — school images stored in the `/public/schoolImages` folder.  
- 📋 **Show Schools** page — responsive grid layout displaying schools with details and images.  
- ✅ **Validation** — input validation for contact numbers and emails with `react-hook-form`.  
- ⚡ **Full-stack** — Next.js API Routes handle database operations and file uploads.  
- ☁️ **Deployment** — frontend hosted on Vercel, backend/database on Railway MySQL.  
- 📱 **Responsive** — optimized for both desktop and mobile.  

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js (App Router)](https://nextjs.org/), [React Hook Form](https://react-hook-form.com/), [Tailwind CSS](https://tailwindcss.com/)  
- **Backend:** Next.js API Routes, Node.js  
- **Database:** MySQL (Railway)  
- **Deployment:** Vercel (frontend) + Railway (database)  

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16 or higher  
- A MySQL database (local or hosted e.g. Railway)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/school-directory.git
   cd school-directory
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root with your DB credentials:

   ```bash
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open the app:

   * Add schools → [http://localhost:3000/addSchool](http://localhost:3000/addSchool)
   * View schools → [http://localhost:3000/showSchools](http://localhost:3000/showSchools)

---

## 📂 Project Structure

```
school-directory/
├── src/
│   ├── app/
│   │   ├── api/schools/route.ts    # API routes for adding/fetching schools
│   │   ├── addSchool/page.tsx      # Add School form page
│   │   ├── showSchools/page.tsx    # Show Schools page
│   │   └── layout.tsx              # Root layout
│   ├── lib/db.ts                   # MySQL connection pool utility
│   ├── styles/globals.css          # Global + Tailwind styles
│   └── components/                 # Reusable UI components
├── public/schoolImages/            # Uploaded school images
├── .env.local                      # Environment variables
├── next.config.js                  # Next.js config
├── tailwind.config.js              # Tailwind CSS config
├── package.json
└── tsconfig.json
```

---

## 🌐 Deployment

* **GitHub Repo:** [https://github.com/your-username/school-directory](https://github.com/your-username/school-directory)
* **Live Site (Vercel):** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

> ⚠️ Ensure environment variables (`DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`) are correctly set in Vercel for production.

---

## 📸 Screenshots (Optional)

*Add screenshots of the Add School and Show Schools pages here for better presentation.*

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

💡 *Feel free to fork this project, open issues, or submit pull requests for improvements!*

```
