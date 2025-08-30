const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/techbridge', { useNewUrlParser: true, useUnifiedTopology: true });

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [{ name: String }]
});

const Course = mongoose.model('Course', courseSchema);

app.get('/courses/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.json(course);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
