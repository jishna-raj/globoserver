const mongoose = require('mongoose')

const connectionString = process.env.DATABASE


mongoose.connect(connectionString).then(()=>{
    console.log('mongoDb coonnected successfully');
    
}).catch((error)=>{
    console.log(`couldnot connect because : ${error}`);
    
})