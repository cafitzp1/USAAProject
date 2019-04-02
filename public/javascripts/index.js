"use strict";

// Variables

// Methods
var createPost = () => {

    // Create elements for post
    var p = document.createElement('p');
    var h2 = document.createElement('h2');
    var mainDiv = document.createElement('div');
    var bodyDiv = document.createElement('div');
    var footerDiv = document.createElement('div');
    var a = document.createElement('a');

    h2.className = "card-title";
    p.className = "card-text";
    mainDiv.className = "card mb-4";
    bodyDiv.className = "card-body";
    footerDiv.className = "card-footer text-muted";
    a.href = "#";

    h2.innerHTML = "title"
    p.innerHTML = "content";
    a.innerHTML = "name";
    footerDiv.innerHTML = "Posted by ";

    bodyDiv.appendChild(h2);
    bodyDiv.appendChild(p);
    footerDiv.appendChild(a);
    mainDiv.appendChild(bodyDiv);
    mainDiv.appendChild(footerDiv);

    var newsFeed = document.getElementById('newsFeed');
    newsFeed.prepend(mainDiv);
    
};