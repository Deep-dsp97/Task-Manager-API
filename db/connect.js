const mongoose = require('mongoose');

// Second obj argument will remove deprecation warnings
// mongoose.connect(connetionString,{
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
// })
// .then(() => console.log('CONNECTED TO DB'))
// .catch((err) => console.log(err));

// Connecting using above structure has one issue and that is
// Server starts running first and then connecting a Database

// BEST PRACTICE is to not start server until Database is connected.
// need to refactor a bit as below

const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
    })
}

module.exports = connectDB