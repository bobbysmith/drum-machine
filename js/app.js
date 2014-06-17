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
    // cache here
    var request = new XMLHttpRequest();

    // TODO: Implement some caching so you don't have to make an HTTP request every time you play a sound
    request.open('get', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
      context.decodeAudioData(request.response,
        function(incomingBuffer) {
          // whatever.buffer = incomingBuffer;
          playSoundFile(incomingBuffer);
        }
      );
    };

    request.send();
  };

  window.playSound = function (soundId) {
    var sound = bank1.sounds[soundId];
    loadAudioFile(sound.url);
  };

  $('.pad').on('click', function (e){
    var soundId = $(this).data('id');
    playSound(soundId);
  });

});

// /////////PLAY//////////

// function playSound(){
//   $().play();
// }

// function stopSound(){
//   $()[].pause();
//   $()[].load();
// }



//   $(document).on('keydown', function(key) {
//     if (key.which === 52){
//       playKick();
//     };
//     if (key.which === 53){
//       playSnare();
//     };
//     if (key.which === 54){
//       playOH();
//     }
//     if (key.which === 55){
//       playClap();
//     }
//   });

//   $(document).on('keyup', function(key){
//     if(key.which === 52){
//       stopKick();
//     };
//     if (key.which === 53){
//       stopSnare();
//     };
//     if(key.which === 54){
//       stopOH();
//     }
//     if(key.which === 55){
//       stopClap();
//     }
//   });

// });



// function playKick() {
//   $('#bank1 .kick')[0].play();
// }

// function playSnare(){
//   $('#bank1 .snare')[0].play();
// }

// function playOH(){
//   $('#bank1 .oh')[0].play();
// }

// function playClap(){
//   $('#bank1 .clap')[0].play();
// }
// //////////STOP//////////

// function stopKick(){
//   $('#bank1 .kick')[0].pause();
//   $('#bank1 .kick')[0].load();
// }

// function stopSnare(){
//   $('#bank1 .snare')[0].pause();
//   $('#bank1 .snare')[0].load();
// }
// function stopOH(){
//   $('#bank1 .oh')[0].pause();
//   $('#bank1 .oh')[0].load();
// }
// function stopClap(){
//   $('#bank1 .clap')[0].pause();
//   $('#bank1 .clap')[0].load();
// }
