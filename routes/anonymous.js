const dbHelp = require('../lib/dbHelp');
const express = require('express');
const router = express.Router();

// GET 
router.get('/', function(req, res, next) {

  let sql = `CALL FeedbackPost_GetAnonymous()`;
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
              res.render('anonymous', {
                  data: results[0]
              });
          } else {
              res.render('anonymous', {
                  error: "Could not get posts from the database :("
              });
          }
      }
  });
});

module.exports = router;
