"use strict";

//--- METHODS ---//

const displayPost = (postTitle, postBody, postAuthor, datePosted) => {

    // set name to anonymous if undefined
    if (postAuthor == undefined) {
        postAuthor = "Anonymous";
    }

    // Create elements for post
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    let mainDiv = document.createElement('div');
    let bodyDiv = document.createElement('div');
    let footerDiv = document.createElement('div');
    let a = document.createElement('a');

    // set styles for post elements
    h2.className = "card-title";
    p.className = "card-text";
    mainDiv.className = "card mb-4";
    bodyDiv.className = "card-body";
    footerDiv.className = "card-footer text-muted";
    a.href = "#";

    // set post html
    h2.innerHTML = postTitle;
    p.innerHTML = postBody;
    a.innerHTML = postAuthor;
    footerDiv.innerHTML = `Posted on ${datePosted} by `;

    // append divs
    bodyDiv.appendChild(h2);
    bodyDiv.appendChild(p);
    footerDiv.appendChild(a);
    mainDiv.appendChild(bodyDiv);
    mainDiv.appendChild(footerDiv);

    // prepend to feed
    let newsFeed = document.getElementById('news-feed');
    newsFeed.prepend(mainDiv);
};

const displayPostPlaceholder = () => {

    // reset fields
    $('.post-field').val('');
    $('#post-field-1').attr('maxlength', 255);
    $('#post-field-2').attr('maxlength', 255);
    $('#post-field-3').attr('maxlength', 255);
    $('#post-field-1').css('display', '');
    $('#post-field-2').css('display', '');
    $('#post-field-3').css('display', '');
    $('#post-field-4').css('display', '');
    $('#br-1').css('display', '');
    $('#br-2').css('display', '');
    $('#br-3').css('display', '');
    $('#br-4').css('display', '');
    $('#post-field-1').attr('placeholder', '');
    $('#post-field-2').attr('placeholder', '');
    $('#post-field-3').attr('placeholder', '');
    $('#post-field-4').attr('placeholder', '');


    // questions
    let sgq1 = 'What is the issue?';
    let sq2 = 'How do you suggest we fix it?';
    let gq2 = 'What is the impact?';
    let gq3 = 'How should we address this issue?';
    let pq1 = 'Whose work are you praising?';
    let pq2 = 'What did they do?';
    let pq3 = 'How did it have a meaningful impact?';
    let aq1 = 'What is the announcement?';

    if (document.getElementById("suggestions-radio").checked) {

        // set placeholders
        $('#post-field-1').attr('placeholder', sgq1);
        $('#post-field-2').attr('placeholder', sq2);

        // hide fields not needed
        $('#post-field-3').css('display', 'none');
        $('#post-field-4').css('display', 'none');
        $('#br-3').css('display', 'none');
        $('#br-4').css('display', 'none');
    }

    if (document.getElementById("grievances-radio").checked) {

        // fields are set differently depending on public or anonymous
        if ($('body.has-public').length > 0) {
            // placeholders
            $('#post-field-1').attr('placeholder', sgq1);
            $('#post-field-2').attr('placeholder', gq2);
            $('#post-field-3').attr('placeholder', gq3);
        } else {
            // placeholders
            $('#post-field-1').attr('placeholder', sgq1 + ' (200 character limit)');
            $('#post-field-2').attr('placeholder', gq2 + ' (250 character limit)');
            $('#post-field-3').attr('placeholder', gq3 + ' (250 character limit)');
            // max vals
            $('#post-field-1').attr('maxlength', 200);
            $('#post-field-2').attr('maxlength', 250);
            $('#post-field-3').attr('maxlength', 250);
        }

        // hide fields not needed
        $('#post-field-4').css('display', 'none');
        $('#br-4').css('display', 'none');
    }

    if (document.getElementById("praise-radio").checked) {
        // set placeholders
        $('#post-field-1').attr('placeholder', pq1);
        $('#post-field-2').attr('placeholder', pq2);
        $('#post-field-3').attr('placeholder', pq3);

        // hide fields not needed
        $('#post-field-4').css('display', 'none');
        $('#br-4').css('display', 'none');
    }

    if (document.getElementById("announcements-radio").checked) {
        // set placeholders
        $('#post-field-1').attr('placeholder', aq1);

        // hide fields not needed
        $('#post-field-2').css('display', 'none');
        $('#post-field-3').css('display', 'none');
        $('#post-field-4').css('display', 'none');
        $('#br-2').css('display', 'none');
        $('#br-3').css('display', 'none');
        $('#br-4').css('display', 'none');
    }
};

//--- EVENT HANDLERS ---//

$('.radioBtn').click(() => {
    displayPostPlaceholder();
});

// equivalent of an on load method
$(() => {
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip()

    // execute code based on class attribute applied to body element
    if ($('body.has-feed').length > 0) {
        // toggle nav items
        $('#home-nav-item').removeClass('active');
        $('#forum-nav-item').addClass('active');

        // forum view botton toggling
        if ($('body.has-public').length > 0) {
            $('#anonymous-view-btn').removeClass('active');
            $('#public-view-btn').addClass('active');
        } else if ($('body.has-anonymous').length > 0) {
            $('#public-view-btn').removeClass('active');
            $('#anonymous-view-btn').addClass('active');
        }

    } else if ($('body.has-home').length > 0) {
        // toggle nav items
        $('#forum-nav-item').removeClass('active');
        $('#home-nav-item').addClass('active');
    }
});

// TODO: implement handler for region and role select onchange to filter data
// TODO: add user management nav item