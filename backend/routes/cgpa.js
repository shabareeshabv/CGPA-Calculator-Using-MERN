const express = require('express');
const router = express.Router();
const CGPA = require('../models/CGPA');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

router.post('/save', authMiddleware, async (req, res) => {
  const { name, usn, department, grades, cgpa } = req.body;
  try {
    const record = new CGPA({
      userId: req.user.userId,
      name,
      usn,
      department,
      grades,
      cgpa,
    });
    await record.save();
    res.status(201).json({ message: 'CGPA saved' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save CGPA', error: err.message });
  }
});

module.exports = router;
