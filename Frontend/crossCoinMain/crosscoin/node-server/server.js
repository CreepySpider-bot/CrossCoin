const express = require("express");

const server = express();

server.get('/success', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Success Page</title>
        </head>
        <body>
            <h1>This is success</h1>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png" alt="" width="200px"/>
        </body>
    </html>`)
})

server.get('/cancel', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html>
        <head>
            <title>Cancel Page</title>
        </head>
        <body>
            <h1>Transaction has been aborted</h1>
        </body>
    </html>`)
})

server.listen(8080, ()=>{
    console.log("Server is running");
})

