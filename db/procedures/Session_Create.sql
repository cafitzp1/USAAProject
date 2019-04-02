USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`Session_Create`;

CREATE PROCEDURE `Session_Create`(
    IN `system_user_id` INT
    , IN `token` VARCHAR(255)
    , IN `start_time` DATE
    , IN `end_time` DATE
)

BEGIN
    INSERT INTO `Session` (`SystemUserID`, `Token`, `StartTime`, `EndTime`, `Active`)
    VALUES (
        `system_user_id`
        , `token`
        , `start_time`
        , `end_time`
        , 1
    );
    SELECT  LAST_INSERT_ID() as 'SessionID'
            , token as 'Token';
END

-- /* usage */
-- CALL usaaprojectdb.Session_Create(1, '9af099b2-6244-4fc1-b72b-1d69a24481b7', '2019-04-02 12:35:33', '2019-05-02 12:35:33');
-- CALL usaaprojectdb.Session_Create(2, '4af099v2-7233-4fc1-n72b-3d67a24481b9', '2019-04-02 12:37:21', '2019-05-02 12:37:21');