# Express Posts App 📝

A simple web application built with **Express.js** and **EJS** that allows users to create, view, edit, and delete posts. Each post includes a username and content. This project demonstrates basic **CRUD operations**, routing, and form handling in Express.

---

## 🚀 Features

- View all posts
- Create a new post
- View a single post
- Edit a post
- Delete a post

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript templating)
- **UUID** for unique post IDs
- **Method-Override** to support PATCH and DELETE HTTP methods

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/express-posts-app.git
   cd express-posts-app
2. Install dependencies:
   ```bash
   npm install

3. Run the app:
   ```bash
   node index.js

   or (if using nodemon)

   npx nodemon index.js

4. Open your browser and go to:
   ```bash
    http://localhost:3000/posts

📁 Project Structure
 ```bash
express-posts-app/
│
├── public/              # Static files (CSS, images, etc.)
├── views/               # EJS templates (index.ejs, new.ejs, show.ejs, edit.ejs)
├── .gitignore
├── index.js             # Main server file
└── package.json
