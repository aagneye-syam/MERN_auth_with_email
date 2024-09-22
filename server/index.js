require('dotenv').config();
const express = reqiure('express');
const app = express();
const cors = require('cors');


//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listing in port ${PORT}`));