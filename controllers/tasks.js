const getAllTasks = (req, res) => {
    res.send('all items from files');
}

const createTask = (req, res) => {
    res.json(req.body);
    // console.log('hello');
}

const getTask = (req, res) => {
    res.json({id:req.params.id});
}

const updateTask = (req, res) => {
    res.send('update Task');
}

const deleteTask = (req, res) => {
    res.send('Delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask,
}