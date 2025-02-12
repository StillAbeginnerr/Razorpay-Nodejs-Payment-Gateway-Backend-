const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./database/connection');

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}