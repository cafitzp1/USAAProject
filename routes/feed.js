const express = require('express');
const router = express.Router();

// GET 
router.get('/', function(req, res, next) {
  res.render('feed');
});

router.post('/new-post', (req, res) => {
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
          console.log('results: ' + results);

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
