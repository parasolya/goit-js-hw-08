import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

function saveTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");
if (savedTime) {
    player.setCurrentTime(savedTime);
}
