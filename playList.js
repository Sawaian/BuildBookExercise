

const playlist = () => {
    const playData = require('./spotify.json')
let playlist;

try {
   playlist = JSON.parse(playData);
}
catch (error) {
    console.log('Error parsing JSON:', error, playData);
}


console.log(playlist)
}

export default playlist;
