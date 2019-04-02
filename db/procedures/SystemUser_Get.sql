USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`SystemUser_Get`;

CREATE PROCEDURE SystemUser_Get (
    IN `eml` VARCHAR(40)
    , IN `pass` VARCHAR(40)
)
BEGIN
    SELECT      *
    FROM        `SystemUser`
    WHERE       `Email` = `eml` AND `Password` = `pass`;
END
 
-- /* usage */
CALL    usaaprojectdb.SystemUser_Get('employee@gmail.com', 'password');
