const dbHelp = require('../lib/dbHelp');
const express = require('express');
const router = express.Router();

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
    let postBody = req.body.postBody;
    let postAuthor = req.body.postAuthor;
    let datePosted = new Date().toJSON().slice(0, 19).replace('T', ' ');

    let sql = `CALL FeedbackPost_Create(?, ?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, [1, postTitle, postBody, false, datePosted], (error, results) => {
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
            res.redirect('.');
        }
    });
});

router.post('/new-post-anonymous', (req, res) => {

    let postTitle = req.body.postTitle;
    let postBody = req.body.postBody;
    let postAuthor = "Anonymous";
    let datePosted = new Date().toJSON().slice(0, 19).replace('T', ' ');

    let sql = `CALL FeedbackPost_Create(?, ?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, [1, postTitle, postBody, true, datePosted], (error, results) => {
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
