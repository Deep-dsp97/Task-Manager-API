const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const getTask = async (req, res) => {
    // res.json({id:req.params.id});
    try {   
        const task = await Task.findOne({_id:req.params.id});
        if(!task){
            return res.status(404).json({msg:`Requested id ${req.params.id} - Not found`});    
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


const deleteTask = async (req, res) => {
    try {   
        const task = await Task.deleteOne({_id:req.params.id});
        if(!task){
            return res.status(404).json({msg:`Requested id ${req.params.id} - Not found`});    
        }
        res.status(200).json({msg: `item with id ${req.params.id} successfully deleted`});
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const updateTask = async (req, res) => {
    try {
        // Will need id: which task we updating
        // Body: data to update
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true,
            runValidators: true
        });
        if(!task){
            return res.status(404).json({msg:`Requested id ${req.params.id} - Not found`});    
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask,
}