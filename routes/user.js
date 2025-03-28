const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {handleCreateUsers, handleGetUsers } = require("../controllers")

router.route("/")
.get( handleGetUsers)
.post( handleCreateUsers)

module.exports = router;