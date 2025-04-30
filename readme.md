

# 🎓 Student Team Members Management

A full-stack web application to manage student team members — built with **React.js** (frontend), **Node.js + Express** (backend), and **MongoDB** (local).

---

## 📌 Features

- ➕ Add new student members with details and profile photo  
- 🧾 View all members in a clean, card-based UI  
- 🔍 View detailed info for each team member  
- ❌ Delete members from the database  
- 🧑‍🎓 Perfect for academic or project-based team management

---

## 🛠️ Tech Stack

| Layer     | Technologies Used                                |
|-----------|--------------------------------------------------|
| Frontend  | React.js, Axios, CSS                             |
| Backend   | Node.js, Express.js, Multer (image upload)       |
| Database  | MongoDB (local), Mongoose                        |
| Other     | CORS, RESTful API                                |

---

## 🚀 Getting Started

### 🔧 1. Clone the Repository
```bash
git clone https://github.com/axshatInd/fullstacksubject_task.git
cd fullstacksubject_task
```

---

### 📦 2. Install Backend Dependencies
```bash
cd backend
npm install
```

---

### 📦 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

---

### 🗃️ 4. Start Local MongoDB
Make sure [MongoDB Community Server](https://www.mongodb.com/try/download/community) is installed and running on port `27017`.

---

## 🌐 API Endpoints

All API routes are prefixed with `/api`:

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/api/members`      | Add a new member (with image)    |
| GET    | `/api/members`      | Get all members                  |
| GET    | `/api/members/:id`  | Get a specific member's details  |
| DELETE | `/api/members/:id`  | Delete a member by ID            |

---

## 🖥️ Running the Application

### ▶️ Start Backend Server
```bash
cd backend
node server.js
```
- Runs at: [http://localhost:4000](http://localhost:4000)

---

### ▶️ Start Frontend Server
```bash
cd ../frontend
npm start
```
- Opens in browser: [http://localhost:3000](http://localhost:3000)

---

## 📄 License

This project is licensed under the **MIT License**.

---

> ⚠️ **Note:**  
> This project uses **local MongoDB only**. No cloud database configuration is required.

---
