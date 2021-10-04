import express from "express";
import redis from "redis";
var publisher = redis.createClient();


exports.createPublisher = (req: express.Request, res: express.Response) => {
    var topic = req.params.topic
    // var listenerId = req.params.listenerId
    var message = req.body.message
    publisher.publish(topic, message, function(){
        res.send(`publsiher has made a publish to topic: ${topic}. A subscriber will receive it if the subscribed topic matches it.`)
    });
}