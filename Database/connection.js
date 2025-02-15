const pg = require('pg')
const dotenv = require("dotenv");
dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.on('connect', ()=> {
    console.log("Connected to DB");
})

pool.on('error', (err) => {
    console.error('Error connecting to the database', err);
    process.exit(-1);
});

module.exports = pool;

// In the code snippet above, we have created a connection to the database using the pg library.
// I have also exported the pool object to be used in other files.
// The pool object is used to query the postgres database.