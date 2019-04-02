USE usaaprojectdb;

SET FOREIGN_KEY_CHECKS = 0; 

DROP TABLE IF EXISTS `SystemUser`;
CREATE TABLE `SystemUser` (
    `SystemUserID` INT NOT NULL AUTO_INCREMENT
    , `Name` VARCHAR(40) NOT NULL
    , `Email` VARCHAR(40) NOT NULL
    , `Username` VARCHAR(40) NOT NULL
    , `Password` VARCHAR(40) NOT NULL
    , `Role` VARCHAR(40)
    , `Location` VARCHAR(40)
    , PRIMARY KEY (`SystemUserID`)
);

DROP TABLE IF EXISTS `FeedbackPost`;
CREATE TABLE `FeedbackPost` (
    `FeedbackPostID` INT NOT NULL AUTO_INCREMENT
    , `SystemUserID` INT NOT NULL
    , `PostBody` VARCHAR(255)
    , `Anonymous` BIT NOT NULL
    , `CreateDate` TIMESTAMP NOT NULL
    , PRIMARY KEY (`FeedbackPostID`)
    , FOREIGN KEY (`SystemUserID`) REFERENCES SystemUser(`SystemUserID`)
);

DROP TABLE IF EXISTS `Session`;
CREATE TABLE `Session` (
    `SessionID` INT NOT NULL AUTO_INCREMENT
    , `SystemUserID` INT NOT NULL
    , `Token` VARCHAR(255) NOT NULL
    , `StartTime` TIMESTAMP NOT NULL
    , `EndTime` TIMESTAMP
    , `Active` BIT NOT NULL
    , PRIMARY KEY (`SessionID`)
    , FOREIGN KEY (`SystemUserID`) REFERENCES SystemUser(`SystemUserID`)
);

SET FOREIGN_KEY_CHECKS = 1;