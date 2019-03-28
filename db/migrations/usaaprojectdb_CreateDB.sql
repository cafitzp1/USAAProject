USE usaaprojectdb;

SET FOREIGN_KEY_CHECKS = 0; 

DROP TABLE IF EXISTS `SystemUser`;
CREATE TABLE `SystemUser` (
    `SystemUserID` INT NOT NULL AUTO_INCREMENT
    , `Name` VARCHAR(40) NOT NULL
    , `Email` VARCHAR(40)
    , `Username` VARCHAR(40) NOT NULL
    , `Password` VARCHAR(40) NOT NULL
    , `Role` VARCHAR(40) NOT NULL
    , PRIMARY KEY (`SystemUserID`)
);

SET FOREIGN_KEY_CHECKS = 1;