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

  var recordBeat = function(padId){
    var beat = {};
    beat["time since start"] = Date.now() - startTime;
    beat.pads = [];
    beat.pads.push(padId);
    recording.push(beat);
  };

  var playback = function() {
    for(var i = 0; i < recording.length; i++){
      setTimeout(function(){
        if(beat[i]){
          for(var i in recording){
            playSound();
          };
        };
      }, intervalTime * i);
    };
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
    playSound: function (soundId, bank) {
      var sound = bank.sounds[soundId];
      loadAudioFile(sound.url);
        if (isRecording){
          recordBeat(soundId);
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
    }
  });

});





