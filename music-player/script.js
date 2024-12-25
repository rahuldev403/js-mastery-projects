'use strict';
let songs = [
  {
    name: 'Bye Bye Bye',
    filePath: './songs/1.mp3',
    cover: './poasters/image1.jpg',
    artist: 'Rahul Reynolds',
  },
  {
    name: 'Hass Hass',
    filePath: './songs/2.mp3',
    cover: './poasters/image2.jpg',
    artist: 'Diljit Ayush',
  },
  {
    name: 'Unstoppable',
    filePath: './songs/3.mp3',
    cover: './poasters/image3.jpg',
    artist: 'Aarya Oliver',
  },
  {
    name: 'Drum',
    filePath: './songs/4.mp3',
    cover: './poasters/image4.jpg',
    artist: 'Hitesh Marquess',
  },
  {
    name: 'Xenoxenesis',
    filePath: './songs/5.mp3',
    cover: './poasters/image5.jpg',
    artist: 'Yatharth James',
  },
  {
    name: 'Humdard',
    filePath: './songs/6.mp3',
    cover: './poasters/image6.jpg',
    artist: 'Krishna Shingh',
  },
  {
    name: 'One Love',
    filePath: './songs/7.mp3',
    cover: './poasters/image7.jpg',
    artist: 'Ruturaj Hattori-kun',
  },
  {
    name: 'Firse Machayenge',
    filePath: './songs/8.mp3',
    cover: './poasters/image8.jpg',
    artist: 'Yug Naruto',
  },
  {
    name: 'Soni Soni',
    filePath: './songs/9.mp3',
    cover: './poasters/image9.jpg',
    artist: 'Amaan Khan',
  },
  {
    name: 'Main Hoon',
    filePath: './songs/10.mp3',
    cover: './poasters/image10.jpg',
    artist: 'Aman Shroff',
  },
  {
    name: 'SnowMan',
    filePath: './songs/11.mp3',
    cover: './poasters/image11.jpg',
    artist: 'Arpit Potter',
  },
];
let myProgress = document.querySelector('.progress');
let audio = document.querySelector('audio');
let songItems = Array.from(document.querySelectorAll('.song-item'));
let currentSongIndex = 0;

function loadSong(index) {
  audio.src = songs[index].filePath;
  document.querySelector('.song-title').textContent = songs[index].name;
  document.querySelector('.song-poster').src = songs[index].cover;
  document.querySelector('.song-artist').textContent = songs[index].artist;
  document.getElementById('masterPlay').classList.remove('bi-play');
  document.getElementById('masterPlay').classList.add('bi-pause');
  audio.play();
  document.querySelector('.gif').style.opacity = '1';
}
function updateIcons() {
  songItems.forEach((songItem, index) => {
    let icon = songItem.querySelector('i');
    if (index === currentSongIndex && !audio.paused) {
      icon.classList.remove('bi-play-circle');
      icon.classList.add('bi-pause-circle');
    } else {
      icon.classList.remove('bi-pause-circle');
      icon.classList.add('bi-play-circle');
    }
  });
}
songItems.forEach(function (songItem, index) {
  let icon = document.createElement('i');
  icon.setAttribute('class', 'bi bi-play-circle');
  songItem.appendChild(icon);
  songItem.addEventListener('click', function () {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    updateIcons();
  });
});

document.querySelector('#next').addEventListener('click', function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  updateIcons();
});

document.querySelector('#prev').addEventListener('click', function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  updateIcons();
});

document.getElementById('player').addEventListener('click', function () {
  let masterPlay = document.getElementById('masterPlay');
  if (
    (masterPlay.classList.contains('bi-play') && audio.paused) ||
    audio.currentTime <= 0
  ) {
    masterPlay.classList.remove('bi-play');
    masterPlay.classList.add('bi-pause');
    audio.play();
    document.querySelector('.gif').style.opacity = '1';
  } else {
    masterPlay.classList.remove('bi-pause');
    masterPlay.classList.add('bi-play');
    audio.pause();
    document.querySelector('.gif').style.opacity = '0';
  }
  updateIcons();
});
document.getElementById('volume').addEventListener('input', function () {
  audio.volume = this.value / 100;
});
audio.addEventListener('timeupdate', function () {
  myProgress.value = parseInt((audio.currentTime / audio.duration) * 100);
});
myProgress.addEventListener('input', function () {
  audio.currentTime = (this.value / 100) * audio.duration;
});
