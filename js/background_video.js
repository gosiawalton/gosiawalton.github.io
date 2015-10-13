jQuery(document).ready(function($) {
  var video = document.getElementById("background_video");
  var pauseButton = document.querySelector(".pause button");

  video.play();

  function fadeVideo() {
    video.classList.add("video_overlay");
  }

  video.addEventListener('ended', function() {
    // only functional if "loop" is removed
    video.pause();
    // to capture IE10
    fadeVideo();
  });

  pauseButton.addEventListener("click", function() {
    video.classList.toggle("video_overlay");
    if (video.paused) {
      video.play();
      pauseButton.innerHTML = $(pauseButton).html().replace('On', 'Off');
    } else {
      video.pause();
      pauseButton.innerHTML = $(pauseButton).html().replace('Off', 'On');
    }
  });
});
