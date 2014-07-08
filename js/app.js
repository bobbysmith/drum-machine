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

  var startRecording = function(){
    isRecording = true;
    startTime = Date.now();
    // var intervalTime = ((bpm / 60) * 1000) / 4;
    recording = [];
  };

  var stopRecording = function(){
    isRecording = false;
  };

  var recordBeat = function(padId, bankId){
    var beat = {};
    beat["since start"] = Date.now() - startTime;
    beat.bankId = bankId;
    beat.pads = [];
    beat.pads.push(padId);
    // beat.bank.push(bankId);
    recording.push(beat);
  };

  var isStopping = false;

  var playback = function(recording) {
    isStopping = false;

    for(var i = 0; i < recording.length; i++){
      (function(i) {
        setTimeout(function(){
          if (isStopping) return;
          window.JS404.playSound(recording[i].pads[0], recording[i].bankId);
        }, recording[i]['since start']);
      })(i);
    };
  };

  var stop = function() {
    isStopping = true;
  };


  // Private Variables
  var bpm = 120;
  var isRecording = false;
  // var recording;
  window.recording;
  var startTime;

  // Public Functions
  window.JS404 || (window.JS404 = {});

  $.extend(window.JS404, {
    playSound: function (soundId, bankId) {
      var sound = JS404.banks[bankId].sounds[soundId];
      loadAudioFile(sound.url);
        if (isRecording){
          recordBeat(soundId, bankId);
        }
    },
    setBPM: function (newBPM) {
      console.log('bpm:', newBPM);
      bpm = newBPM;
    },
    toggleRecording: function () {
      // recording to true
      startRecording();
      return isRecording;
    },
    playback: function () {
      isRecording = false;
      playback(recording);
    },
    stop: function () {
      isStopping = true;
    }
  });
});





