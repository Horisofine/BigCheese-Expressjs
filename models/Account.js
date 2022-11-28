const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({

    email: {type: String, minLength: 1 },
    password: {type: String, minLength: 1}

})

module.exports = mongoose.model("account", AccountSchema);