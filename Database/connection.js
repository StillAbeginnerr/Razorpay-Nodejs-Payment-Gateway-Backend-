const { Pool } = require('pg').pool;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = pool;

// In the code snippet above, we have created a connection to the database using the pg library.
// I have also exported the pool object to be used in other files.
// The pool object is used to query the postgres database.