// Select all audio and iframe elements
const audioElements = document.querySelectorAll(".audio");
const iframeElements = document.querySelectorAll("iframe");

// Add event listeners to each audio element
audioElements.forEach((audio) => {
  audio.addEventListener("play", () => {
    // Pause all other audio elements when one is played
    audioElements.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });
    // Pause all iframes when audio is played
    iframeElements.forEach((iframe) => {
      iframe.src = iframe.src; // Reloads the iframe to stop the video
    });
  });
});

// Add event listeners to each iframe element
iframeElements.forEach((iframe) => {
  iframe.addEventListener("mouseenter", () => {
    // Reload all other iframes when one is hovered over
    iframeElements.forEach((otherIframe) => {
      if (otherIframe !== iframe) {
        otherIframe.src = otherIframe.src;
      }
    });
    // Pause all audios when an iframe is hovered over
    audioElements.forEach((audio) => {
      audio.pause();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentPlaying = null;

  document.querySelectorAll("iframe").forEach((iframe) => {
    iframe.addEventListener("mouseenter", function () {
      if (currentPlaying && currentPlaying !== iframe) {
        currentPlaying.src = currentPlaying.src; // Reloads the previous iframe to stop the video
      }
      currentPlaying = iframe;
    });
  });
});
