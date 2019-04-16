USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetPublic`;

CREATE PROCEDURE FeedbackPost_GetPublic ()
BEGIN
    SELECT      `FeedbackPost`.`FeedbackPostID`
                , `FeedbackPost`.`Title`
                , `FeedbackPost`.`Field1`
                , `FeedbackPost`.`Field2`
                , `FeedbackPost`.`Field3`
                , `FeedbackPost`.`Field4`
                , `FeedbackPost`.`CreateDate`
                , `SystemUser`.`SystemUserID`
                , `SystemUser`.`Name`
                , `SystemUser`.`Email`
                , `SystemUser`.`Username`
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
    WHERE		NOT Anonymous & 1
    ORDER BY    `FeedbackPost`.`CreateDate` DESC;
END
 
-- /* usage: */
CALL usaaprojectdb.FeedbackPost_GetPublic();