const mongoose = require("mongoose");

// Schema
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    }
})

const User = new mongoose.model("user", userSchema);

module.exports = User;