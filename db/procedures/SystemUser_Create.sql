USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`SystemUser_Create`;

CREATE PROCEDURE SystemUser_Create (
    IN `name` VARCHAR(40)
    , IN `email` VARCHAR(40)
    , IN `username` VARCHAR(40)
    , IN `password` VARCHAR(40)
    , IN `role` VARCHAR(40)
)
BEGIN
    INSERT INTO `SystemUser` (`Name`, `Email`, `Username`, `Password`, `Role`)
    VALUES      (`name`, `email`, `username`, `password`, `role`);
    SELECT      LAST_INSERT_ID() as 'SystemUserID'
                , `name` as 'Name'
                , `email` as 'Email'
                , `username` as 'Username'
                , `role` as 'Role';
END

/**
 * usage:
 * CALL    usaaprojectdb.SystemUser_Create('Test Employee', 'employee@gmail.com', 'testemployee', 'password', 'Employee');
 */