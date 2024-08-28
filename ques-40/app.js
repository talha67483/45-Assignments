function make_album(artist, title, numTrack) {
    var album = { artist: artist, title: title };
    if (numTrack) {
        album["numTrack"] = numTrack;
    }
    return album;
}
console.log(make_album("Artist one", "Title one"));
console.log(make_album("Artist Two", "Title Two"));
console.log(make_album("Artist Three", "Title Three", 32));
