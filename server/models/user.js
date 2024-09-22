const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        firstName: {type: String , required: true},
        lastName: {type: String , required: true},
        email: {type: String , required: true},
        password: {type: String , required: true},
});

userSchema.method.generateAuthToken = function() {
        const token = jw.sign({_id:this._id}, process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
        return token;
};
