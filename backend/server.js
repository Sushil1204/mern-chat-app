const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get('/', () => {
    res.send("API is running");
})

app.listen(5000, console.log("Server Started"));
