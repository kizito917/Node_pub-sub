import express from "express";
var router = express.Router();
var subscriberController = require("../controllers/subscriber.controller");

router.post("/subscribe/:topic", subscriberController.createSubscriber);


export default router;