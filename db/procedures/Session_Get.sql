USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`Session_Get`;

CREATE PROCEDURE Session_Get (
    IN `tid` VARCHAR(255)
)
BEGIN
    SELECT      `Session`.`SessionID`
                , `Session`.`SystemUserID`
                , `Session`.`StartTime`
                , `Session`.`EndTime`
                , `Session`.`Active`
                , `SystemUser`.`Name`
                , `SystemUser`.`Email`
                , `SystemUser`.`Username`
                , `SystemUser`.`Role`
                , `SystemUser`.`Location`
    FROM        `Session`
    LEFT JOIN   `SystemUser` ON `Session`.`SystemUserID` = `SystemUser`.`SystemUserID`
    WHERE       `Token` = `tid`;
END

-- /* usage */
CALL usaaprojectdb.Session_Get('9af099b2-6244-4fc1-b72b-1d69a24481b7');
CALL usaaprojectdb.Session_Get('4af099v2-7233-4fc1-n72b-3d67a24481b9');