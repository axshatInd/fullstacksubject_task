# Student Team Members Management

A full-stack web application for managing student team members, built with React.js (frontend), Node.js + Express (backend), and local MongoDB for data storage.

---

## 📋 Project Description

This application allows users to:
- Add new student team members with details and a profile image.
- View a list of all team members in a clean, card-based layout.
- View detailed information about each member.
- Delete team members from the database.

The project is designed for easy team management in academic or project-based settings.

---

## 🚀 Installation Steps

### 1. **Clone the Repository**
git clone https://github.com/yourusername/student-team-members-management.git
cd student-team-members-management

text

### 2. **Install Backend Dependencies**
cd backend
npm install

text

### 3. **Install Frontend Dependencies**
cd ../frontend
npm install

text

### 4. **Start Local MongoDB**
Ensure you have [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed and running locally on its default port (27017).

---

## 🌐 API Endpoints

All endpoints are prefixed with `/api`.

| Method | Endpoint                | Description                       |
|--------|-------------------------|-----------------------------------|
| POST   | `/api/members`          | Add a new member (with image)     |
| GET    | `/api/members`          | Get all team members              |
| GET    | `/api/members/:id`      | Get details of a specific member  |
| DELETE | `/api/members/:id`      | Delete a member by ID             |

---

## 🖥️ How to Run the App

### 1. **Start the Backend**
cd backend
node server.js

text
- The backend will run on [http://localhost:4000](http://localhost:4000) by default.

### 2. **Start the Frontend**
cd ../frontend
npm start

text
- The frontend will run on [http://localhost:3000](http://localhost:3000) by default.

### 3. **Using the App**
- Open your browser and go to [http://localhost:3000](http://localhost:3000).
- Use the navigation to add, view, and manage team members.

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Axios, CSS
- **Backend:** Node.js, Express.js, Multer (for image upload)
- **Database:** MongoDB (local)
- **Other:** Mongoose, CORS

---

## 📸 Example Screenshot

![App Screenshot](https://pplx-res.cloudinary.com/image/private/user_uploads/PrldoTXVbVOXeBy/Screenshot-2025-05-01-012857.jpg)

---

## 📄 License

MIT License

---

> **Note:**  
> This app is configured for local MongoDB only. No cloud database setup is required.