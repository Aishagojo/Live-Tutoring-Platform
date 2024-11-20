
const express = require('express');
const Session = require('../models/Session');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).send(session);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
