"use strict";

//--- METHODS ---//

const createPost = () => {

    // store inputs into json object
    let data = {
        postTitle: $('#post-title').val(),
        postBody: $('#post-body').val(),
        postAuthor: $('#post-author').val(),
        datePosted: (new Date(Date.now())).toLocaleString()
    };

    // return if missing fields
    if (data.postTitle == "" || data.postBody == "" || data.postAuthor == "") {
        window.alert('Missing one or more field(s)');
        return;
    }

    // disable, show loading
    $('#post-button').attr('disabled', true);
    $('#post-button').html('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>');

    // // store in db
    // $('#post-form').submit((event) => {
    //     event.preventDefault(); // Stops browser from navigating away from page
    //     $.post('/new-post', data, (resp) => { // FIXME: cannot find /new-post from this directory
    //         // success
    //         console.log('succes');

    //         displayPost(postTitle, postBody, postAuthor, datePosted);

    //         // clear post area
    //         $('#post-title').val("");
    //         $('#post-body').val("");
    //         $('#post-author').val("");

    //         // reset button
    //         $('#post-button').attr('disabled', false);
    //         $('#post-button').html('Post');
    //     }).fail( (error) => {
    //         // error
    //         alert(error);
    //     })
    // });

    // success
    displayPost(data.postTitle, data.postBody, data.postAuthor, data.datePosted);

    // clear post area
    $('#post-title').val("");
    $('#post-body').val("");
    $('#post-author').val("");

    // reset button
    $('#post-button').attr('disabled', false);
    $('#post-button').html('Post');
};

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

    let postBody = document.getElementById("post-body");

    if (document.getElementById("suggestions-radio").checked)
    {
        postBody.placeholder = "What is the issue?\n\nHow do you suggest we fix it?";
    }
    if (document.getElementById("grievances-radio").checked)
    {
        postBody.placeholder = "What is the issue?\n\nWhat is the impact?\n\nHow should we address this issue?";
    }
    if (document.getElementById("praise-radio").checked)
    {
        postBody.placeholder = "Whose work are you praising?\n\nWhat did they do?\n\nHow did it have a meaningful impact?";
    }
    if (document.getElementById("announcements-radio") != null)
    {
        if (document.getElementById("announcements-radio").checked)
        {
            postBody.placeholder = "What is the announcement?";
        }
    }

};

//--- EVENT HANDLERS ---//

$('#post-button').click(() => {
    //createPost();
});

$('.radioBtn').click(() => {
    displayPostPlaceholder();
});

// equivalent of an on load method
$( () => {
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip()

    // execute code based on class attribute applied to body element
    if ($('body.has-feed').length > 0)
    {
        // ...
    }
});