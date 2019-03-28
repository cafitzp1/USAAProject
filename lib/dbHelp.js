const mysql = require('mysql');
const path = require('path');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json'), 'utf8'));

const dbHelp = {
    dbConnection: (time = 10000) => {
        let connection = mysql.createConnection({
            user: config.database.user,
            password: config.database.password,
            host: config.database.host,
            database: config.database.database,
            connectTimeout: time
        });

        return connection;
    }
};

module.exports = dbHelp;