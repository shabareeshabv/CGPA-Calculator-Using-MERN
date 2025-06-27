const mongoose = require('mongoose');
const cgpaSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  usn: String,
  department: String,
  grades: [Number],
  cgpa: String,
});
module.exports = mongoose.model('CGPA', cgpaSchema);
