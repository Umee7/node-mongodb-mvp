const User = require("../models/user");

async function handleGetUsers(req, res) {
    const allUsers = await User.find();
    if(!allUsers) return res.status(404).json("Add an user to see results..");
    return res.json(allUsers);
}

async function handleCreateUsers(req, res) {
    const body = req.body;
    if(!body || !body.firstName || !body.email) {
        return res.status(400).json("all fields are required");
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
    })

    return res.status(201).json(result);
};

module.exports = {
    handleCreateUsers,
    handleGetUsers,
}