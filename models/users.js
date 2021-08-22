const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for users
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "username field is required"],
  },

  password: {
    type: String,
    required: [true, "password field is required"],
  },
  firstname: {
    type: String,
    required: [true, "firstname field is required"],
  },

  lastname: {
    type: String,
    required: [true, "lastname field is required"],
  },

  posts: {
    type: Array,
  },

  friends: {
    type: Array,
  },

  savedPosts: {
    type: Array,
  },
});

//create model for users
const User = mongoose.model("user", UserSchema);

module.exports = User;
