const express = require ("express");
const morgan = require ("morgan");

const emailRoute = require("../routes/sendEmailRoute");

const app = express();

app.use(morgan("dev"));

const cors = require("cors");
const corsOptions={
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/contactus", emailRoute);

app.get("/", (req,res)=>{
    res.send("hello world!")
});


module.exports = app;