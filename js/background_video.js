jQuery(document).ready(function($) {
  var video = document.getElementById("background_video");
  var pauseButton = document.querySelector(".pause button");

  function toggleVideoPauseState() {
    if (video.paused) {
      video.play();
      video.classList.remove("video_overlay");
      pauseButton.innerHTML = $(pauseButton).html().replace('On', 'Off');
    } else {
      video.pause();
      video.classList.add("video_overlay");
      pauseButton.innerHTML = $(pauseButton).html().replace('Off', 'On');
    }
  }

  video.addEventListener('ended', function() {
    // only functional if "loop" is removed
    video.pause();
    // to capture IE10
    video.classList.add("video_overlay");
  });

  video.addEventListener('click', function() {
    toggleVideoPauseState();
  });

  pauseButton.addEventListener("click", function() {
    toggleVideoPauseState()
  });
});
