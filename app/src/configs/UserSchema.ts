import mongoose from "mongoose";

// Creating Structure of the collection
const schema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required!"]
    },
    email: {
        type: String,
        default: 0,
        require: [true, "Email is required!"]
    },
    password: {
        type: String,
        require: [true, "password is required!"]
    },
    amount: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('usuarios', schema);

export default User;