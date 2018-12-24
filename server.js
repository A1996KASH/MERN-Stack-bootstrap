const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();

// body parser 

app.use(bodyParser.json());
const db = require('./config/keys').mongoURI;
// Connect to MongoDB

mongoose.connect(db).then(()=> console.log('mongoDb Connected'))
.catch(err => console.log(err));

// Use Routes

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server Started on Port ${port}`));

