declare var require: any;

// require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// import express from "express"
// import mongoose from "mongoose"
// import express from 'express';
import handleSignup from "./functions/handleSignup";
import handleLogin from "./functions/hanldeLogin";
import handleSavePosts from "./functions/handleSavePosts";
// import handleGetImage from "./functions/handleGetImage";
import handleGetPost from "./functions/handleGetPost";
import handlefirendList from "./functions/handlefirendList";
import handleDeletePost from "./functions/handleDeletePost";
import handelSavestory from "./functions/handleSavestory";

import handleGetStories from "./functions/handleGetStories";

app.use(cors());
dotenv.config();

var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://syrian:syrian@cluster0.rz0tr.mongodb.net/social-media?retryWrites=true&w=majority",
  () => console.log("Database connected")
);

// app.get("/", (req, res) => {
//   res.render("<h1>Yes is Working</h1>");
// });

app.post("/signup", handleSignup);
app.post("/login", handleLogin);
app.post("/savePost", handleSavePosts);
app.post("/getOldPosts", handleGetPost);
app.post("/getFriendList", handlefirendList);
app.post("/deletePost", handleDeletePost);
app.post("/saveStory", handelSavestory);
app.post("/getSrtories", handleGetStories);

app.listen(8000, () =>
  console.log("server is up and running http://127.0.0.0.1:8000/")
);

console.log("server is working");
