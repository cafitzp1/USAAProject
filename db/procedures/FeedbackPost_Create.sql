USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_Create`;

CREATE PROCEDURE FeedbackPost_Create (
    IN `system_user_id` VARCHAR(40)
    , IN `post_body` VARCHAR(255)
    , IN `anonymous` BIT
    , IN `create_date` TIMESTAMP
)
BEGIN
    INSERT INTO `FeedbackPost` (`SystemUserID`, `PostBody`, `Anonymous`, `CreateDate`)
    VALUES      (`system_user_id`, `post_body`, `anonymous`, `create_date`);
    SELECT      LAST_INSERT_ID() as 'FeedbackPostID'
                , `system_user_id` as 'SystemUserID'
                , `post_body` as 'PostBody'
                , `anonymous` as 'Anonymous'
                , `create_date` as 'CreateDate';
END

-- /* usage */
CALL usaaprojectdb.FeedbackPost_Create('1', 'Hello, this is a test', false, '2019-04-02 12:31:59');
CALL usaaprojectdb.FeedbackPost_Create('1', 'This is also a test', false, '2019-04-02 12:32:09');
CALL usaaprojectdb.FeedbackPost_Create('1', 'And so is this', true, '2019-04-02 12:32:33');
CALL usaaprojectdb.FeedbackPost_Create('2', 'This is a final test', false, '2019-04-02 12:32:55');