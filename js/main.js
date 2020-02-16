//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(){
// Get form values
var siteName = document.getElementById('siteName').value;
var siteURL = document.getElementById('siteURL').value;

//form validation
if(!siteName || !siteURL){
    alert('Please fill out form');
    return false;
}

var bookmark = {
    name: siteName,
    url: siteURL
}

// Test if Local storage is null
if(localStorage.getItem('bookmarks') === null){

    //Init Array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else{
    //Get bookmarks from LocalSTorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Add bookmark to array
    bookmarks.push(bookmark);
    //re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}

 //re-fetch bookmarks
 fetchBookmarks();
    
//Prevent form from submitting
    e.preventDefault();
}

// Delete Bookmark
function deleteBookmarks(){
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for (var i = 0; i < bookmarks.length; i++){
        if (bookmarks[i].url == url){
            //remove bookmark
            bookmarks.splice(i,1);
        }
    }

     //re-set back to localStorage
     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

     //re-fetch bookmarks
     fetchBookmarks();
}

//fetch bookmarks
function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // get output id
    var bookmarkResults = document.getElementById('bookmarkResults');

    //build output
    bookmarkResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarkResults.innerHTML += '<div class = "well">'+
                                    '<h3>'+name+
                                    ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'
                                    '<a onclick="deleteBookmark(\''+url+'\'')" class="btn btn-danger" href="'#'">Delete</a>'
                                    '</h3>'+
                                    '</div>';
    }

}