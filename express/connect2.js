const { Pool } = require('pg');

const Conexion = {
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: process.env.DB_SSL === 'true',
    },
};

const pool = new Pool(Conexion);

module.exports = {
    query: (text, params) => pool.query(text, params),
};
