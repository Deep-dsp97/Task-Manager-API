const mongoose = require('mongoose');

// Schema - Create structure which exists in collections
const TaskSchema = new mongoose.Schema({
    name:String, 
    completed: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);