import Player from '@vimeo/player';

import * as _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const saveSett = player.on(
  'timeupdate',
  _.throttle(el => {
    console.log(el.seconds);
    localStorage.setItem('videoplayer-current-time', el.seconds);
  }, 250)
);
