const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [{ name: String }]
});

module.exports = mongoose.model('Course', courseSchema);
