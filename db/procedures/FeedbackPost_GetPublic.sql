USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetPublic`;

CREATE PROCEDURE FeedbackPost_GetPublic ()
BEGIN
    SELECT      `FeedbackPost`.`FeedbackPostID`
                , `FeedbackPost`.`Title`
                , `FeedbackPost`.`PostBody`
                , `FeedbackPost`.`CreateDate`
                , `SystemUser`.`SystemUserID`
                , `SystemUser`.`Name`
                , `SystemUser`.`Email`
                , `SystemUser`.`Username`
                , `SystemUser`.`Role`
                , `SystemUser`.`Location`
    FROM        `FeedbackPost`
    LEFT JOIN   `SystemUser` ON `FeedbackPost`.`SystemUserID` = `SystemUser`.`SystemUserID`
    WHERE		NOT Anonymous & 1;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetPublic();