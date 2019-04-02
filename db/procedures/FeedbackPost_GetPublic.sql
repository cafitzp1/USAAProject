USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetPublic`;

CREATE PROCEDURE FeedbackPost_GetPublic ()
BEGIN
    SELECT      *
    FROM		`FeedbackPost`
    WHERE		NOT Anonymous & 1;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetPublic();