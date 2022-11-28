const mongoose = require("mongoose");
const Account = require("./Account").Schema;

// Creating a Schema for the supplier
const SupplierSchema = mongoose.Schema({

    name: String,
    emailAddress: String,
    phoneNumber: Number,
    account: Account

})

module.exports = mongoose.model("supplier", SupplierSchema);