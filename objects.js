var playlist = {'Adele': 'Hello'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName];
=======
  delete playlist.artistName;
>>>>>>> 5f19e9c36f3851833adf232f43959682cef45a66
  return playlist;
}

