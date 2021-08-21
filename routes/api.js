const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const Users = require("../models/users");
const Posts = require("../models/posts");

router.post("/findUserByUserName", (req, res, next) => {
  //this is to get the UserID
  //   let query = Users.find({ username: req.body.username });
  //   console.log(query);
  Users.find({ username: req.body.username })
    .then((data) => {
      res.json(data);
      console.log(data[0]);
    })
    .catch(next);
});

router.post("/findPostsGivenUserID", (req, res, next) => {
  //this is to get the UserID
  //   let query = Users.find({ username: req.body.username });
  //   console.log(query);
  Posts.find({ userID: req.body.userID })
    .then((data) => {
      res.json(data);
      console.log(data[0]);
    })
    .catch(next);
});

router.post("/users", (req, res, next) => {
  if (req.body) {
    Users.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.get("/todos", (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/todos", (req, res, next) => {
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
