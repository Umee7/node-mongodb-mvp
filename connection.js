const mongoose = require("mongoose");

connectMongoDb = async  (url) => {
    await mongoose.connect(url);
}

module.exports = {
    connectMongoDb,
}