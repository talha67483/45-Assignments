function make_album(artist:string,title:string,numTrack?:number){
    let album = {artist,title}
    if(numTrack){
        album["numTrack"] = numTrack
    }
    return album;


}
console.log(make_album("Artist one","Title one"));
console.log(make_album("Artist Two","Title Two"));
console.log(make_album("Artist Three","Title Three",32));

