
const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      res.status(400).send({ message: 'Email already in use' });
    } else {
      res.status(400).send(error);
    }
  }
});

module.exports = router;
