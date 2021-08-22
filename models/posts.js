const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for users
const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },

  restaurantName: {
    type: String,
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

  // 0: restaurant, 1: recipe
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

//create model for posts
const Post = mongoose.model("post", PostSchema);

module.exports = Post;
