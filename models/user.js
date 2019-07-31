const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  ownerName: String,
  homePhone: String,
  uid: String,
  mobilePhone: String,
  email: String,
  address: String,
  vetName: String,
  vetPhone: String,
  vetEmail: String,
  vetAddress: String,
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
