/*
    == commentarius | 2 words: blog, simple ==

    SOURCE CODE VERSION 1.0

    Author: Ricardo González @ RESIB Labs ( www.ricardogonz.es - resiblabs.taniwa.es )
    License: GPL 3.0
*/

function readgGet(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
} // Thank you to Rafael on stackoverflow for this tool!

// Define user input
const postName = readgGet("p");
const postFile = postName + ".md";
const postFileURL = "posts/" + postFile;

// Get and parse post data
fetch(postFileURL).then (response => response.text()).then (res => {
    var converter = new showdown.Converter(),
        postContent = converter.makeHtml(res);

    document.getElementById("post-post-content").innerHTML = postContent;
});

// Show post to user
document.getElementById("post-post-title").innerHTML = postName;
document.title += " - " + postName;

// If no user input, show error
if(!postName) {
    document.getElementById("post-post-title").innerHTML = "ERROR p01.1 (!postName)";
}