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
    , `Title` VARCHAR(40)
    , `CreateDate` TIMESTAMP NOT NULL
    , `Anonymous` BIT NOT NULL
    , `Field1` VARCHAR(255)
    , `Field2` VARCHAR(255)
    , `Field3` VARCHAR(255)
    , `Field4` VARCHAR(255)
    , `PostTypeID` INT NOT NULL
    , `SystemUserID` INT NOT NULL
    , PRIMARY KEY (`FeedbackPostID`)
    , FOREIGN KEY (`PostTypeID`) REFERENCES PostType(`PostTypeID`)
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

DROP TABLE IF EXISTS `PostType`;
CREATE TABLE `PostType` (
    `PostTypeID` INT NOT NULL AUTO_INCREMENT
    , `Type` VARCHAR(40) NOT NULL
    , `Question1` VARCHAR(255)
    , `Question2` VARCHAR(255)
    , `Question3` VARCHAR(255)
    , `Question4` VARCHAR(255)
    , PRIMARY KEY (`PostTypeID`)
);

SET FOREIGN_KEY_CHECKS = 1;