import express from "express";
import cors from "cors";
var dotenv = require("dotenv").config();
var port = process.env.PORT
var app = express();

//importing routes
import pubRoute from "./routes/publisher.routes"

var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use(pubRoute)

app.get("/", (req: any, res: any) => {
    res.send("Hello....This is a Pub/Sub application")
})

app.listen(port, () => {
    console.log(`Pub/sub (Publisher) server running on port ${port}`)
})