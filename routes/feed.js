const dbHelp = require('../lib/dbHelp');
const express = require('express');
const router = express.Router();

// default user Doug Parker, su id 3
const DEFAULT_USER = 3;

// GET 
router.get('/', (req, res, next) => {

    let sql = `CALL FeedbackPost_GetPublic()`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log(results[0]);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                }
            });
            // route to home page if results
            if (results.length > 0) {
                res.render('feed', {
                    data: results[0]
                });
            } else {
                res.render('feed', {
                    error: "Could not get posts from the database"
                });
            }
        }
    });
});

router.post('/new-post', (req, res) => {

    let postTitle = req.body.postTitle;
    let field1 = req.body.field1;
    let field2 = req.body.field2;
    let field3 = req.body.field3;
    let field4 = req.body.field4;
    let datePosted = new Date().toJSON().slice(0, 19).replace('T', ' ');
    let postID = req.body.optradio;

    let sql = `CALL FeedbackPost_Create(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, [DEFAULT_USER, postTitle, datePosted, false, field1, field2, field3, field4, postID], (error, results) => {
        if (error) {
            console.error(error);
            res.render('feed', {
                error: error
            });
        } else {
            console.log('results: ' + results[0]);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                    res.render('feed', {
                        error: err
                    });
                }
            });

            // refresh current page
            res.redirect('../feed');
        }
    });
});

router.post('/new-post-anonymous', (req, res) => {

    let postTitle = req.body.postTitle;
    let field1 = req.body.field1;
    let field2 = req.body.field2;
    let field3 = req.body.field3;
    let field4 = req.body.field4;
    let datePosted = new Date().toJSON().slice(0, 19).replace('T', ' ');
    let postID = req.body.optradio;

    let sql = `CALL FeedbackPost_Create(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, [DEFAULT_USER, postTitle, datePosted, true, field1, field2, field3, field4, postID], (error, results) => {
        if (error) {
            console.error(error);
            res.render('anonymous', {
                error: error
            });
        } else {
            console.log('results: ' + results[0]);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                    res.render('anonymous', {
                        error: err
                    });
                }
            });

            // redirect to anonymous page
            res.redirect('../anonymous');
        }
    });
});

module.exports = router;
