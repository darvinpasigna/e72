const express = require("express");
const app = express();
//load the env thru the env
require('dotenv').config();

//load router
const postsRouter = require('./routes/posts.router');

// use the following to receive response data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const PORT = process.env.PORT || 3001;

//create default route
app.use("/api/v3/college", postsRouter);

app.listen(PORT, ()=>{
    console.log("Server running. . .");
});