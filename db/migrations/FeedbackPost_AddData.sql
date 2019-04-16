/* 
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

    PostTypeID: 1 = Suggestions, 2 = Grievances, 3 = Praise, 4 = Announcements
 */

DELETE FROM usaaprojectdb.FeedbackPost;

CALL usaaprojectdb.FeedbackPost_Create(
    '3'
    , 'Team Building Activities'
    , '2019-04-04 10:22:25'
    , false
    , 'After having a meeting with Kevin Hong, VP of Operations, it has been decided that the trip to New York for team building activities has been canceled. The new location will have to be voted upon. John Brown will be leading the activites.'
    , NULL
    , NULL
    , NULL
    , 4
);

CALL usaaprojectdb.FeedbackPost_Create(
    '5'
    , 'Security'
    , '2019-04-05 08:02:52'
    , false
    , 'A few employees have noticed suspicious activity behind building CD-43 on thursday around 10PM.'
    , NULL
    , NULL
    , NULL
    , 4
);

CALL usaaprojectdb.FeedbackPost_Create(
    '8'
    , 'Office Supplies Delay'
    , '2019-04-07 16:42:23'
    , false
    , 'We have ran out of ink for our printers and there is no ink in the store room.'
    , 'This has cause us a delay in our work flow as we have to send someone to buy more.'
    , 'A system needs to be developed in order to prevent this issue from happening again.'
    , NULL
    , 2
);

CALL usaaprojectdb.FeedbackPost_Create(
    '6'
    , 'Management'
    , '2019-04-11 12:00:05'
    , true
    , 'A few co-workers are unhappy with how the promotion system.'
    , 'The requirements are not clear enough for some to take a proactive approach in getting a promotion.'
    , NULL
    , NULL
    , 1 
);

CALL usaaprojectdb.FeedbackPost_Create(
    '10'
    , 'Citrix problems'
    , '2019-04-11 07:59:19'
    , false
    , 'Our whole department for some reason can not log into their Citrix accounts.'
    , 'Can someone from the IT department research this problem?'
    , NULL
    , NULL
    , 1
);

CALL usaaprojectdb.FeedbackPost_Create(
    '4'
    , 'Reimbursement'
    , '2019-04-05 17:40:35'
    , true
    , 'A few employees have to travel 80+ miles each day for work.'
    , 'Would it be possible for the company to reimburse them for their commitment to the company?'
    , NULL
    , NULL
    , 1
);