const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const Users = require("../models/users");
const Posts = require("../models/posts");

//Given a userID and a postID, update the savedPosts field in users.js and the savedBy field in posts.js
router.post("/savePostGivenUserAndPostIds", (req, res, next) => {
  Users.update(
    { userID: req.body.userID },
    {
      $set: {
        savedPosts: req.body.postID,
      },
    }
  )
    .then((data) => {
      res.json(data);
    })
    .catch(next);

  //   let tempObj = {};
  //   Users.find({ userID: req.body.userID })
  //     .then((data) => {
  //       res.json(data);
  //       console.log("first one, ", data[0]);
  //       tempObj = data[0];
  //       console.log("temp object ", tempObj);
  //       const newUser = new Users({
  //         _id: tempObj._id,
  //         posts: tempObj.posts,
  //         friends: tempObj.friends,
  //         savedPosts: req.body.postID,
  //         userID: tempObj.userID,
  //         username: tempObj.username,
  //         password: tempObj.password,
  //         firstname: tempObj.firstname,
  //         lastname: tempObj.lastname,
  //         _v: tempObj._v,
  //       });
  //   console.log(newUser);

  //   Users.updateOne({ userID: req.body.userID }, newUser)
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch(next);
  //     })
  //     .catch();

  // TempObj.updateOne({ userID: req.body.userID }, { savedPosts: req.body.postID })
});

//This is to get Users info from user schema
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

//This is to return all posts, given userID
router.post("/findPostsGivenUserID", (req, res, next) => {
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

router.post("/posts", (req, res, next) => {
  if (req.body) {
    Posts.create(req.body)
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
