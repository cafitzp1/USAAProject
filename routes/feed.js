const dbHelp = require('../lib/dbHelp');
const express = require('express');
const router = express.Router();

// GET 
router.get('/', function (req, res, next) {

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
                    error: "Could not get posts from the database :("
                });
            }
        }
    });
});

router.post('/new-post', (req, res) => { // FIXME: this is not yet functional
    console.log('back end');

    let postTitle = req.body.postTitle;
    let postBody = req.body.postBody;
    let postAuthor = req.body.postAuthor;
    let datePosted = req.body.datePosted;

    console.log(postTitle + " : " + postAuthor);

    let sql = `CALL FeedbackPost_Create(?, ?, ?, ?, ?)`;
    let conn = dbHelp.dbConnection(3000);

    conn.connect();
    conn.query(sql, [1, postAuthor, postBody, postAuthor, datePosted], (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('results: ' + results[0]);

            // end connection
            conn.end((err) => {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
})

module.exports = router;
