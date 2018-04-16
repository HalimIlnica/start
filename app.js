const path = require('path');
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'startdb'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected...');
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});
