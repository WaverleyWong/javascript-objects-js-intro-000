var playlist = {
  tycho : 'Dive'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({}, playlist, { [artistName]: songTitle})
}