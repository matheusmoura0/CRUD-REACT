const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 9193999,
    database: 'crud_app'
})

app.listen(3001, () => {
    console.log('App listening on port 3001!');
});