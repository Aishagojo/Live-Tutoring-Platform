
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/tutorconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
