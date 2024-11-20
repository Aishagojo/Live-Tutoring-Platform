
const express = require('express');
const Tutor = require('../models/Tutor');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const tutor = new Tutor(req.body);
    await tutor.save();
    res.status(201).send(tutor);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
