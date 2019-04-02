USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetAll`;

CREATE PROCEDURE FeedbackPost_GetAll ()
BEGIN
    SELECT      `FeedbackPost`.`FeedbackPostID`
                , `FeedbackPost`.`Title`
                , `FeedbackPost`.`PostBody`
                , `FeedbackPost`.`Anonymous`
                , `FeedbackPost`.`CreateDate`
                , `SystemUser`.`SystemUserID`
                , `SystemUser`.`Name`
                , `SystemUser`.`Email`
                , `SystemUser`.`Username`
                , `SystemUser`.`Role`
                , `SystemUser`.`Location`
    FROM        `FeedbackPost`
    LEFT JOIN   `SystemUser` ON `FeedbackPost`.`SystemUserID` = `SystemUser`.`SystemUserID`;
END
 
-- usage:
-- CALL    usaaprojectdb.FeedbackPost_GetAll();