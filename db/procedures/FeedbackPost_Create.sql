USE usaaprojectdb;

DROP PROCEDURE IF EXISTS `usaaprojectdb`.`FeedbackPost_Create`;

CREATE PROCEDURE FeedbackPost_Create (
    IN `system_user_id` VARCHAR(40)
    , IN `ttl` VARCHAR(255)
    , IN `create_date` TIMESTAMP
    , IN `anonymous` BIT
    , IN `fld1` VARCHAR(255)
    , IN `fld2` VARCHAR(255)
    , IN `fld3` VARCHAR(255)
    , IN `fld4` VARCHAR(255)
    , IN `post_type_id` INT
)
BEGIN
    INSERT INTO `FeedbackPost` (
        `SystemUserID`
        , `Title`
        , `CreateDate`
        , `Anonymous`
        , `Field1`
        , `Field2`
        , `Field3`
        , `Field4`
        , `PostTypeID`
    )
    VALUES (
        `system_user_id`
        , `ttl`
        , `create_date`
        , `anonymous`
        , `fld1`
        , `fld2`
        , `fld3`
        , `fld4`
        , `post_type_id`
    );
    SELECT      LAST_INSERT_ID() as 'FeedbackPostID'
                , `system_user_id` as 'SystemUserID'
                , `ttl` as 'Title'
                , `create_date` as 'CreateDate';
END

-- /* usage */
CALL usaaprojectdb.FeedbackPost_Create('1', 'Post 1', 'Hello, this is a test', false, '2019-04-02 12:31:59');