USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`SystemUser_GetAll`;

CREATE PROCEDURE SystemUser_GetAll ()
BEGIN
    SELECT      *
    FROM        `SystemUser`;
END

/** 
 * usage:
 * CALL    usaaprojectdb.SystemUser_GetAll();
 */