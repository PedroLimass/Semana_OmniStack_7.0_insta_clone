const express = require("express");
const multer = require('multer');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const uploadsConfig = require('../src/config/upload');

const routes = new express.Router();
const upload = multer(uploadsConfig);

routes.post("/posts", upload.single('image') ,PostController.store);

routes.get("/posts", PostController.index);

routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
