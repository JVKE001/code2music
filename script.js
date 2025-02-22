// Select all video and audio elements
const audioElements = document.querySelectorAll(".audio");
const videoElements = document.querySelectorAll(".video");

// Add event listeners to each audio element
audioElements.forEach((audio) => {
  audio.addEventListener("play", () => {
    // Pause all other audio elements when one is played
    audioElements.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
    // Pause all videos when audio is played
    videoElements.forEach((video) => {
      video.pause();
    });
  });
});

// Add event listeners to each video element
videoElements.forEach((video) => {
  video.addEventListener("play", () => {
    // Pause all other video elements when one is played
    videoElements.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
    // Pause all audios when a video is played
    audioElements.forEach((audio) => {
      audio.pause();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("play", function () {
      videos.forEach((v) => {
        if (v !== video) {
          v.pause();
        }
      });
    });
  });
});
