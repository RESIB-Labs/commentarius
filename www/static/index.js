/*
    == commentarius | 2 words: blog, simple ==

    OPEN SOURCE BLOG ENGINE VERSION 1.0

    Github: https://github.com/RESIB-Labs/commentarius

    Author: Ricardo González @ RESIB Labs ( www.ricardogonz.es - resiblabs.taniwa.es )
    License: GPL 3.0
*/

// Get post files
$.getJSON("posts/", files => {
    // Foreach file do =>
    files.forEach((fileName) => {
        // Split fileName to just show extension
        var fileExtension = fileName.split(".")[1];

        // Only execute this code if fileExtension is md
        if(fileExtension == "md") {
            // Split fileName to just show postName
            var postName = fileName.split(".")[0];

            // Get post content
            fetch("posts/" + fileName).then(response => response.text()).then(postContent => {
                // Add post to post list
                document.getElementById("post-list").innerHTML += '<div class="post-list-post"><div class="card"><div class="card-body"><h5 class="card-title">' + postName +'</h5><p class="card-text">' + postContent.substring(0,100) + '...</p><a href="post.html?p=' + postName + '" class="btn btn-primary">Read More</a></div></div></div>';

            });
        }
    });

}); // Thank you to abalter on stackoverflow for this amazing shortut