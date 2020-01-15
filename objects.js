//var playlist = new Object({artist1:"song"})

//function updatePlaylist (playlist,name,song){
 // playlist.name = "song";
 // return updatePlaylist
//}

var playlist = {
  artist1: "song1",
  artist2: "song2",
  artist3: "song3"
};

function updatePlaylist(thePlaylist, artistName, songTitle) {
  return Object.assign({}, thePlaylist, { [artistName]: songTitle});
}

updatePlaylist(playlist, "artist4", "song4");

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName];
  return thePlaylist;
}

removeFromPlaylist(playlist, "artist2");



