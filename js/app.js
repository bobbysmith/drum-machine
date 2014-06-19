$(document).ready(function(){

  var lightDemo = function(){
    $('.pad[data-id]').each(function(index, element) {
      (function(index, $element) {
        setTimeout(function() {
          $element.addClass('selected');
          setTimeout(function() {
            $element.removeClass('selected');
          }, 100);
        }, 130 * index );
      })(index, $(element));
    });
  };

  var bankLights = function(){
    $('.bank[data-id]').each(function(index, element) {
      (function(index, $element) {
        setTimeout(function() {
          $element.addClass('selected');
          setTimeout(function() {
            $element.removeClass('selected');
          }, 400);
        }, 485 * index );
      })(index, $(element));
    });
  };

  bankLights();
  bankLights();
  lightDemo();


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



  window.playSound = function (soundId, bank) {
    var sound = bank.sounds[soundId];
    loadAudioFile(sound.url);
  };


  var selectedBank = function(){
    var bankId = $('.bank.selected').data('id');
    var bank = banks[bankId];
    return bank;
  };


  var bankKeys = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6
  };


  $('.bank').on('click', function (e){
    selectBank($(this).data('id'));

    var bank = selectedBank();
  });

  function selectBank(bankId) {
      $('.bank.selected').removeClass('selected');
      $(".bank[data-id=" + bankId + "]").addClass("selected");
      var bank = selectedBank();
      $('#current-bank span').text(bank.name);
      $('#description span').text(bank.description);
      // lightDemoOff();
      lightDemo();
  }


  $(document).on('keydown', function (e){
    if (bankKeys[e.keyCode]) {
      selectBank(bankKeys[e.keyCode]);
      var bank = selectedBank();
      }
    // } else if (padKeyCode[e.keyCode]) {

    // }
    var currentPad = $(".pad[data-id=" + e.keyCode + "]");
    currentPad.addClass("selected");
    var soundId = e.keyCode;
    var bank = selectedBank();

    // $('#sample span').text(bank.sounds[soundId].sample);

    playSound(soundId, bank);

    setTimeout(function(){
      currentPad.removeClass("selected");
    }, 100);
    setTimeout(function(){
      $('#sample span').empty();
    }, 700);
  });


  $('.pad').on('click', function (e){
    var soundId = $(this).data('id');
    var bank = selectedBank();

    $('#sample span').text(bank.sounds[soundId].sample);

    playSound(soundId, bank);
    setTimeout(function(){
      $('#sample span').empty();
    }, 500);
  });

});
