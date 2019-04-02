USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_GetAll`;

CREATE PROCEDURE FeedbackPost_GetAll ()
BEGIN
    SELECT      *
    FROM        `FeedbackPost`;
END
 
-- usage:
-- CALL    usaaprojectdb.FeedbackPost_GetAll();