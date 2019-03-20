USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`SystemUser_Remove`;

CREATE PROCEDURE SystemUser_Remove(IN `username` VARCHAR(40))
BEGIN
    DELETE FROM `SystemUser`
    WHERE       `Username` = `username`;
END

/**
 * usage
 * CALL usaaprojectdb.SystemUser_Remove('testemployee');
 */