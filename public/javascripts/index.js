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

const setDataToDisplay = () => {

    //TODO: remove
    console.log('filtering...');

    // initialize local variables
    let dataToDisplay = [];
    let feedHTML = "";

    // clear #news-feed
    $('#news-feed').html('');

    // store current filter values
    let roleFilter = $('#role-select option:selected').val();
    let locationFilter = $('#region-select option:selected').val();
    let postTypeFilter = $('#post-type-select option:selected').val();

    //TODO: remove
    console.log('filter1: ' + roleFilter);
    console.log('filter2: ' + locationFilter);
    console.log('filter3: ' + postTypeFilter);

    // set data which applies to the current filters to display
    for (let item of data) {

        // if all 3 all, add
        if ((roleFilter == 'All' || roleFilter == 'Role') &&
            (locationFilter == 'All' || locationFilter == 'Location') &&
            (postTypeFilter == 'All' || postTypeFilter == 'Post Type')) {
            
            dataToDisplay.push(item);
        }
        // if 1 and 2 all, add where 3
        else if ((roleFilter == 'All' || roleFilter == 'Role') &&
            (locationFilter == 'All' || locationFilter == 'Location')) {

            if (item.Type == postTypeFilter) { 
                dataToDisplay.push(item);
            }
        }
        // if 1 and 3 all, add where 2
        else if ((roleFilter == 'All' || roleFilter == 'Role') &&
            (postTypeFilter == 'All' || postTypeFilter == 'Post Type')) {

            if (item.Location == locationFilter) { 
                dataToDisplay.push(item);
            }
        }
        // if 2 and 3 all, add where 1
        else if ((locationFilter == 'All' || locationFilter == 'Location') &&
            (postTypeFilter == 'All' || postTypeFilter == 'Post Type')) {

            if (item.Role == roleFilter) { 
                dataToDisplay.push(item);
            }
        }
        // if 1 all, add where 2 and 3
        else if (roleFilter == 'All' || roleFilter == 'Role') {
            if (item.Location == locationFilter && item.Type == postTypeFilter) { 
                dataToDisplay.push(item);
            }
        }
        // if 2 all, add where 1 and 3
        else if (locationFilter == 'All' || locationFilter == 'Location') {
            if (item.Role == roleFilter && item.Type == postTypeFilter) { 
                dataToDisplay.push(item);
            }
        }
        // if 3 all, add where 1 and 2
        else if (postTypeFilter == 'All' || postTypeFilter == 'Post Type') {
            if (item.Role == roleFilter && item.Location == locationFilter) { 
                dataToDisplay.push(item);
            }
        }
        // check all 3
        else {
            if (item.Role == roleFilter && item.Location == locationFilter && item.Type == postTypeFilter) { 
                dataToDisplay.push(item);
            }
        }
    }

    // TODO: remove
    if (dataToDisplay.length > 0)
        console.log(dataToDisplay);
    else
        console.log("no data");

    // for new data, set html for card with formatted body
    for (let item of dataToDisplay) {
        let cardHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">${item.Title}</h2>
        `;

        if (item.Field1 != null && item.Field1 != '') {
            cardHTML += `
                        <p class="card-text">${item.Question1}</p>
                        <blockquote class="blockquote">
                            <p class="mb-0 blockquote-footer">${item.Field1}</p>
                        </blockquote>
            `
        }

        if (item.Field2 != null && item.Field2 != '') {
            cardHTML += `
                        <p class="card-text">${item.Question2}</p>
                        <blockquote class="blockquote">
                            <p class="mb-0 blockquote-footer">${item.Field2}</p>
                        </blockquote>
            `
        }

        if (item.Field3 != null && item.Field3 != '') {
            cardHTML += `
                        <p class="card-text">${item.Question3}</p>
                        <blockquote class="blockquote">
                            <p class="mb-0 blockquote-footer">${item.Field3}</p>
                        </blockquote>
            `
        }

        if (item.Field4 != null && item.Field4 != '') {
            cardHTML += `
                        <p class="card-text">${item.Question4}</p>
                        <blockquote class="blockquote">
                            <p class="mb-0 blockquote-footer">${item.Field4}</p>
                        </blockquote>
            `
        }

        cardHTML += `
                    </div>
                    <div class="card-footer text-muted">
        `

        if (item.PostTypeID == 1) {
            cardHTML += `
                        <b>Suggestion</b>
            `
        } else if (item.PostTypeID == 2) {
            cardHTML += `
                        <b>Grievance</b>
            `
        } else if (item.PostTypeID == 3) {
            cardHTML += `
                        <b>Praise</b>
            `
        } else if (item.PostTypeID == 4) {
            cardHTML += `
                        <b>Announcement</b>
            `
        }

        let name = item.Name || "Anonymous";
        let date = convertUTCDateToLocalDate(new Date(item.CreateDate));
        date = date.toLocaleString();
        
        if (item.Email) {
            cardHTML += `
                    posted ${date} by
                    <a class="name" href="javascript:void(0);" data-toggle="tooltip" data-html="true" title="
                            ${item.Email}<br>
                            Role: <b>${item.Role}</b><br>
                            Location: <b>${item.Location}</b>
                        "</a>${name}</a>
                </div>
            </div>
            `;
        } else {
            cardHTML += `
                    posted ${date} by
                    <a class="name" href="javascript:void(0);" data-toggle="tooltip" data-html="true" title="
                            Role: <b>${item.Role}</b><br>
                            Location: <b>${item.Location}</b>
                        "</a>${name}</a>
                </div>
            </div>
            `;
        }
                    
        feedHTML += cardHTML;
    }

    // add html
    $('#news-feed').html(feedHTML);

    // reset tooltips
    $('[data-toggle="tooltip"]').tooltip();
};

const convertUTCDateToLocalDate = (date) => {
    let newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    let offset = date.getTimezoneOffset() / 60;
    let hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
};

//--- EVENT HANDLERS ---//

$('.radioBtn').click(() => {
    displayPostPlaceholder();
});

$('#role-select').change(() => {
    setDataToDisplay();
});

$('#region-select').change(() => {
    setDataToDisplay();
});

$('#post-type-select').change(() => {
    setDataToDisplay();
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

// TODO: add user management nav item