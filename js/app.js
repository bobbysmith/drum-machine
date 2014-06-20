$(document).ready(function(){

  var AudioContext = AudioContext || webkitAudioContext;

  var context = new AudioContext(), buffer;

  var playSoundFile = function (buffer) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
  };

  var loadAudioFile = function (url) {

    var request = new XMLHttpRequest();

    request.open('get', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
      context.decodeAudioData(request.response,
        function(incomingBuffer) {
          playSoundFile(incomingBuffer);
        }
      );
    };

    request.send();
  };


  window.JS404 || (window.JS404 = {});
  $.extend(window.JS404, {
    playSound: function (soundId, bank) {
      var sound = bank.sounds[soundId];
      loadAudioFile(sound.url);
    }
  });

});





