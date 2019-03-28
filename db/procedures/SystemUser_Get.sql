USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`SystemUser_Get`;

CREATE PROCEDURE SystemUser_Get (
    IN `email` VARCHAR(40)
    , IN `password` VARCHAR(40)
)
BEGIN
    SELECT      *
    FROM        `SystemUser`
    WHERE       `Email` = `email` AND `Password` = `password`;
END

/** 
 * usage:
 * CALL    usaaprojectdb.SystemUser_Get('employee@gmail.com', 'password');
 */