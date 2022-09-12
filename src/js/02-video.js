import Player from '@vimeo/player';

import * as _ from 'lodash';

checkLocal();
function checkLocal() {
  return localStorage.getItem('videoplayer-current-time') === null
    ? 0
    : localStorage.getItem('videoplayer-current-time');
}

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(checkLocal());

const saveSett = player.on(
  'timeupdate',
  _.throttle(el => {
    console.log(el.seconds);
    localStorage.setItem('videoplayer-current-time', el.seconds);
  }, 1000)
);
