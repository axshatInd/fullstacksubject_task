const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});
const upload = multer({ storage: storage });

// POST: Add new member
router.post('/members', upload.single('image'), async (req, res) => {
    try {
      const member = new Member({
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        year: req.body.year,
        degree: req.body.degree,
        role: req.body.role,
        email: req.body.email,
        contact: req.body.contact,
        aboutProject: req.body.aboutProject,
        hobbies: req.body.hobbies,
        certificate: req.body.certificate,
        internship: req.body.internship,
        aim: req.body.aim,
        image: req.file ? req.file.filename : ''
      });
      const savedMember = await member.save();
      res.status(201).json(savedMember);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  });
  
  

// GET: Fetch all members
router.get('/members', async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Fetch single member by ID
router.get('/members/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Member not found' });
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
