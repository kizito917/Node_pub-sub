import express from "express";
import redis from "redis";
var subscriber = redis.createClient();

exports.createSubscriber = (req: express.Request, res: express.Response) => {
    var topic = req.params.topic
    var listener = req.body.url
    subscriber.on("message", function (channel, message) {
        console.log("Message: " + message + " on channel: " + channel + " has arrived!");
    });
    subscriber.subscribe(topic);
    res.send(`Subscription to ${topic} has been made. The listener: ${listener} is the listener`);
}