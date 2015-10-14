jQuery(document).ready(function($) {
  var video = document.getElementById("background_video");
  var pauseButton = document.querySelector(".pause button");
  var textOverlay = document.querySelector(".textOverlay");

  function toggleVideoPauseState() {
    if (video.paused) {
      video.play();
      video.classList.remove("video_overlay");
      textOverlay.classList.remove("highlightTextOverlay");
      pauseButton.innerHTML = $(pauseButton).html().replace('On', 'Off');
    } else {
      video.pause();
      video.classList.add("video_overlay");
      textOverlay.classList.add("highlightTextOverlay");
      pauseButton.innerHTML = $(pauseButton).html().replace('Off', 'On');
    }
  }

  video.addEventListener('ended', function() {
    // only functional if "loop" is removed
    toggleVideoPauseState();
  });

  video.addEventListener('click', function() {
    toggleVideoPauseState();
  });

  textOverlay.addEventListener('click', function() {
    toggleVideoPauseState();
  });

  pauseButton.addEventListener("click", function() {
    toggleVideoPauseState()
  });
});
