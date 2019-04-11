const dbHelp = require('../lib/dbHelp');
const Util = require('../lib/util');
const express = require('express');
const UIDGenerator = require('uid-generator');

const router = express.Router();
const uidgen = new UIDGenerator(UIDGenerator.BASE62);
const util = new Util();

// GET login page
router.get('/', (req, res, next) => {
    res.render('login');
});

// POST authorization
router.post('/', (req, res) => {
    
    // pull data from request body
    let email = req.body.email;
    let password = req.body.password;

    // set sql variables
    let sql = `CALL SystemUser_Get(?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    // initialize connection and query
    conn.connect();
    conn.query(sql, [email, password], (error, results) => {
        if (error) {
            console.error(error);
            res.render('login', {
                error: 'Error contacting the database'
            });
        } else {
            console.log(results);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                }
            });

            // route to home page if query returns results
            if (results.length > 0) {
                console.log('success');

                // create a session
                // TODO: create a session

                res.render('home');
            } else {
                console.log('fail');
                res.render('login', {
                    error: 'Invalid user credentials'
                });
            }
        }
    });
});

const createSession = (systemUserID) => {

    // set data variables
    let token = uidgen.generateSync();
    let dateNow = new Date();
    let startTime = util.dateConverted(dateNow);
    let endTime = startTime.setDate(startTime.getDate() + 7);
    endTime = util.dateConverted(endTime);

    // set sql variables
    let sql = `CALL Session_Create(?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    // initialize connection and query
    conn.connect();
    conn.query(sql, [systemUserID, token, startTime, endTime], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('results: ' + results);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
};

module.exports = router;
