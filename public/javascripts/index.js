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

const getPublicPosts = () => {
    // $.ajax({
    //     type: 'GET',
    //     url: /,
    //     data: `date=${date}`,
    //     success: (response) => {
    //         // stop load indicator, notify
    //         $('#date-load-indicator').css('display', 'none');

    //         // store data; attributes: Count, Items, ScannedCount
    //         let data = response;

    //         console.log(`${data.Count} items retrieved`);
    //         console.log(data);

    //         // iterate and store items; attributes: recordID, record, dateCreated, ttl
    //         storedData = [];
    //         data.Items.forEach((item) => {
    //             storedData.push([item.recordID, item.record]);
    //         })

    //         // display initial record
    //         let time = $('#hour-select option:selected').val();
    //         let datetime = `${date} ${time}`;

    //         // set hourly data for whatever is selected and focus select input
    //         showHourlyData(datetime);
    //         $('#hour-select').focus();
    //     },
    //     error: (error) => {
    //         $('#date-load-indicator').css('display', 'none');
    //         console.error(error);
    //     }
    // });
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

//--- EVENT HANDLERS ---//

$('#post-button').click(() => {
    createPost();
});