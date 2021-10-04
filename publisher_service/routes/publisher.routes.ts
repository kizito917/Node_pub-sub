import express from "express";
var router = express.Router();
var publisherController = require("../controllers/publisher.controller");

router.post("/publish/:topic", publisherController.createPublisher);


export default router;