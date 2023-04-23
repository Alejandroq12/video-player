const video = document.getElementById('video');
const play = document.getElementById('play');
const stop1 = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video
function toggleVideoStatus() {
  return true;
}

function updatePlayIcon() {
  return true;
}

// Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop video
function stopVideo() {
  return true;
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop1.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
