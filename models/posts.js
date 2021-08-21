const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for users
const PostSchema = new Schema({
  postID: {
    type: String,
    required: [true, "postID field is required"],
  },

  userID: {
    type: String,
    required: [true, "userID field is required"],
  },

  description: {
    type: String,
    required: [true, "description field is required"],
  },
  picture: {
    type: String,
    required: [true, "picture field is required"],
  },

  savedBy: {
    type: Array,
  },

  streetOne: {
    type: String,
  },

  streetTwo: {
    type: String,
  },

  city: {
    type: String,
  },

  province: {
    type: String,
  },

  country: {
    type: String,
  },

  postalCode: {
    type: String,
  },

  isRecipe: {
    type: Boolean,
  },

  cookingTime: {
    type: Number,
  },

  servings: {
    type: Number,
  },

  ingredients: {
    type: String,
  },

  directions: {
    type: String,
  },
});

//create model for todo
const Post = mongoose.model("post", UserSchema);

module.exports = Post;
