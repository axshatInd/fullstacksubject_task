const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
    console.log('📁 Uploads directory created');
}

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Function to connect to MongoDB (Atlas first, then local)
async function connectToMongoDB() {
    const atlasUri = process.env.MONGODB_URI;
    const localUri = 'mongodb://127.0.0.1:27017/student_team_db';

    // Try Atlas first if URI is set
    if (atlasUri) {
        try {
            await mongoose.connect(atlasUri);
            console.log('✅ Connected to MongoDB Atlas');
            return;
        } catch (err) {
            console.error('❌ Could not connect to MongoDB Atlas:', err.message);
            console.log('🔄 Falling back to local MongoDB...');
        }
    } else {
        console.log('⚠️  MONGODB_URI not set in .env file. Trying local MongoDB...');
    }

    // Try local MongoDB
    try {
        await mongoose.connect(localUri);
        console.log('✅ Connected to local MongoDB');
    } catch (err) {
        console.error('❌ Could not connect to local MongoDB:', err.message);
        process.exit(1);
    }
}

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({ storage: storage });

// Add member routes
const memberRoutes = require('./routes/members');
app.use('/api', memberRoutes);

// Start the server after DB connection is established
connectToMongoDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server running on port ${port}`);
    });
});
