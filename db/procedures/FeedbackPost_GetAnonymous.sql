USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetAnonymous`;

CREATE PROCEDURE FeedbackPost_GetAnonymous ()
BEGIN
    SELECT      *
    FROM		`FeedbackPost`
    WHERE		Anonymous & 1;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetAnonymous();