const favouriteGeneres = (userSongs, songGenres) => {
    //map song to genere
    let songGenresMap = {};
    for (let [key, val] of Object.entries(songGenres)) {
        for (let i = 0; i < val.length; i++) {
            songGenresMap[val[i]] = key
        }
    }

    let result = [];

    for (let [k, v] of Object.entries(userSongs)) {
        let storeSongCounter = {};
        for (let i = 0; i < v.length; i++) {
            //
            storeSongCounter[songGenresMap[v[i]]] = (storeSongCounter[songGenresMap[v[i]]] || 0) + 1
        }
        result.push({ name: k, genere: storeSongCounter });
        storeSongCounter = {}
    }

    let Output = {};

    for (let i = 0; i < result.length; i++) {
        let topPick = [];
        let max =-Infinity
        for (let [key, val] of Object.entries(result[i].genere)) {
            if ( val >= max) {

                if( key && key != 'undefined'){
                    topPick.push(key);
                    max = val
                }

            }

        }
        Output[result[i].name] = topPick;
        topPick = [];

    }

    return Output
}

let userSongs = {
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma": ["song5", "song6", "song7"]
},
    songGenres = {
        "Rock": ["song1", "song3"],
        "Dubstep": ["song7"],
        "Techno": ["song2", "song4"],
        "Pop": ["song5", "song6"],
        "Jazz": ["song8", "song9"]
    }
console.log(favouriteGeneres(userSongs, songGenres));

userSongs = {
    "David": ["song1", "song2"],
    "Emma":  ["song3", "song4"]
 },
 songGenres = {};
 console.log(favouriteGeneres(userSongs, songGenres));