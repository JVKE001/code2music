// document.addEventListener("DOMContentLoaded", function () {
//   const audioElements = document.querySelectorAll(".audio");
//   const iframeElements = document.querySelectorAll("iframe");
//   let currentPlayingVideo = null;

//   // Function to stop a video without restarting it
//   function stopVideo(iframe) {
//     if (iframe) {
//       let tempSrc = iframe.src;
//       iframe.src = ""; // Temporarily remove src to stop playback
//       setTimeout(() => {
//         iframe.src = tempSrc; // Restore src without restarting
//       }, 100);
//     }
//   }

//   // Handle audio playback
//   audioElements.forEach((audio) => {
//     audio.addEventListener("play", () => {
//       // Pause all other audios
//       audioElements.forEach((otherAudio) => {
//         if (otherAudio !== audio) {
//           otherAudio.pause();
//         }
//       });

//       // Stop any playing video
//       if (currentPlayingVideo) {
//         stopVideo(currentPlayingVideo);
//         currentPlayingVideo = null;
//       }
//     });
//   });

//   // Handle iframe video playback
//   iframeElements.forEach((iframe) => {
//     iframe.addEventListener("mouseenter", () => {
//       if (currentPlayingVideo && currentPlayingVideo !== iframe) {
//         stopVideo(currentPlayingVideo);
//       }
//       currentPlayingVideo = iframe;

//       // Pause all audios when a video is hovered over
//       audioElements.forEach((audio) => {
//         audio.pause();
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const audioElements = document.querySelectorAll(".audio");
  const iframeElements = document.querySelectorAll("iframe");
  let currentPlayingVideo = null;

  // Function to stop a video by resetting its src
  function stopVideo(iframe) {
    if (iframe) {
      let tempSrc = iframe.src;
      iframe.src = ""; // Clear src to stop playback
      setTimeout(() => {
        iframe.src = tempSrc; // Restore src without restarting on page load
      }, 100);
    }
  }

  // Handle audio playback
  audioElements.forEach((audio) => {
    audio.addEventListener("play", () => {
      // Pause all other audios
      audioElements.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });

      // Stop any playing video
      if (currentPlayingVideo) {
        stopVideo(currentPlayingVideo);
        currentPlayingVideo = null;
      }
    });
  });

  // Handle iframe video playback (on click)
  iframeElements.forEach((iframe) => {
    iframe.addEventListener("click", () => {
      if (currentPlayingVideo && currentPlayingVideo !== iframe) {
        stopVideo(currentPlayingVideo);
      }
      currentPlayingVideo = iframe;

      // Pause all audios when a video is played
      audioElements.forEach((audio) => {
        audio.pause();
      });
    });
  });
});
