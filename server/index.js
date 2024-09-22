require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

//database connection
db();

//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listing in port ${port}`));