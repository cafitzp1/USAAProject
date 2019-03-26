const dbHelp = require('../lib/dbHelp');
const express = require('express');
const router = express.Router();

// GET login page
router.get('/', (req, res, next) => {
    res.render('login');
});

// POST authorization
router.post('/', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    console.log(email + " : " + password);

    //let sql = `CALL SystemUser_Get(?, ?)`;
    let sql = `
        SELECT      *
        FROM	    SystemUser
        WHERE       Email = '${email}' AND Password = '${password}';
    `;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    //conn.query(sql, [email, password], (error, results) => {
    conn.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.render('login');
        } else {
            console.log('results: ' + results);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                }
            });
            // route to home page if results
            if (results.length > 0) {
                console.log('success');
                res.render('home');
            } else {
                console.log('fail');
                res.render('login', {error: 'Invalid user credentials'});
            }
        }
    });
})

module.exports = router;
