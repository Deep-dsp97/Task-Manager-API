const mongoose = require('mongoose');

const connetionString = 'mongodb+srv://task_manager:Spidey1997@taskmanagerapi.o5tjg9r.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority';

// Second obj argument will remove deprecation warnings
mongoose.connect(connetionString,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})
        .then(() => console.log('CONNECTED TO DB'))
        .catch((err) => console.log(err));