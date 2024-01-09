const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  // Add other fields as needed
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;