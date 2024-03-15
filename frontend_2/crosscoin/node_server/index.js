const express = require('express');
require('dotenv').config();

const server = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const connection= require('./db');

const loginRoute = require("./login");

const registerRoute = require("./register");

server.use(cors());
server.use(bodyParser.json());

//routes
server.use("/api/login", loginRoute);
server.use("/api/register", registerRoute);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

connection();
const transactionSchema = new mongoose.Schema({
    walletId: String,
    transactionAmount: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);





server.post('/transactionHistory', async (req, res) => {

    let transaction = new Transaction();
    transaction.walletId = req.body.walletId;
    transaction.transactionAmount = req.body.amount;
    const doc = await transaction.save();
    console.log(doc)
    res.json(doc);
})

server.get('/transactionHistory', async (req, res) => {
    const docs = await Transaction.find({});
    res.json(docs);
})



server.listen(8080, ()=>{
    console.log('server')
})