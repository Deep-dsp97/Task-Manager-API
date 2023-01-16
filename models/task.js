const mongoose = require('mongoose');

// Schema - Create structure which exists in collections
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    }, 
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);