const mongoose = require("mongoose");

module.exports = ()=>{
        const connnectionParams = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        }
        try{
                mongoose.connect(process.env.DB,connnectionParams);
                console.log('connected to db successfully');
        }catch(err){
                console.log(err)
        }
};