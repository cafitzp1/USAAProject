USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetAnonymous`;

CREATE PROCEDURE FeedbackPost_GetAnonymous ()
BEGIN
    SELECT      `FeedbackPost`.`FeedbackPostID`
                , `FeedbackPost`.`Title`
                , `FeedbackPost`.`Field1`
                , `FeedbackPost`.`Field2`
                , `FeedbackPost`.`Field3`
                , `FeedbackPost`.`Field4`
                , `FeedbackPost`.`CreateDate`
                , `SystemUser`.`Role`
                , `SystemUser`.`Location`
                , `PostType`.`PostTypeID`
                , `PostType`.`Type`
                , `PostType`.`Question1`
                , `PostType`.`Question2`
                , `PostType`.`Question3`
                , `PostType`.`Question4`
    FROM        `FeedbackPost`
    LEFT JOIN   `SystemUser` ON `FeedbackPost`.`SystemUserID` = `SystemUser`.`SystemUserID`
    LEFT JOIN   `PostType` ON `FeedbackPost`.`PostTypeID` = `PostType`.`PostTypeID`
    WHERE		Anonymous & 1
    ORDER BY    `FeedbackPost`.`CreateDate` DESC;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetAnonymous();