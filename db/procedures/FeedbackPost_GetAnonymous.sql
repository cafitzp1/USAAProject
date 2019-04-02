USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetAnonymous`;

CREATE PROCEDURE FeedbackPost_GetAnonymous ()
BEGIN
    SELECT      `FeedbackPost`.`FeedbackPostID`
                , `FeedbackPost`.`Title`
                , `FeedbackPost`.`PostBody`
                , `FeedbackPost`.`CreateDate`
                , `SystemUser`.`Role`
                , `SystemUser`.`Location`
    FROM        `FeedbackPost`
    LEFT JOIN   `SystemUser` ON `FeedbackPost`.`SystemUserID` = `SystemUser`.`SystemUserID`
    WHERE		Anonymous & 1;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetAnonymous();