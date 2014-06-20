(function () {

  var bankKeycodeMap = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6
  };

  var selectedBank = function(){
    var bankId = $('.bank.selected').data('id');
    var bank = JS404.banks[bankId];
    return bank;
  };

  $('.bank').on('click', function (e){
    e.preventDefault();
    selectBank($(this).data('id'));

    var bank = selectedBank();
  });

  $('#record').on('click', function(){
    JS404.toggleRecording();
  });

  $('#stop').on('click', function(){
    // JS404.toggleRecording();
    isRecording = false;
  });

  function selectBank(bankId) {
      $('.bank.selected').removeClass('selected');
      $(".bank[data-id=" + bankId + "]").addClass("selected");
      var bank = selectedBank();
      $('#current-bank span').text(bank.name);
      $('#description span').text(bank.description);
      lightDemo();
  }


  $(document).on('keydown', function (e){
    if (bankKeycodeMap[e.keyCode]) {
      selectBank(bankKeycodeMap[e.keyCode]);
      var bank = selectedBank();
    }
    // } else if (padKeyCode[e.keyCode]) {

    // }
    var currentPad = $(".pad[data-id=" + e.keyCode + "]");
    currentPad.addClass("selected");
    var soundId = e.keyCode;
    var bank = selectedBank();

    $('#sample span').text(bank.sounds[soundId].sample);

    JS404.playSound(soundId, bank);

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

    JS404.playSound(soundId, bank);
    setTimeout(function(){
      $('#sample span').empty();
    }, 700);
  });

  $("#submit-button").on('click', function (e) {
    e.preventDefault();
    var bpm = $("#bpm").val();
    JS404.setBPM(bpm);
  });

  var lightDemo = function(){
    $('.pad[data-id]').each(function(index, element) {
      (function(index, $element) {
        setTimeout(function() {
          $element.addClass('selected');
          setTimeout(function() {
            $element.removeClass('selected');
          }, 100);
        }, 120 * index );
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
          }, 300);
        }, 375 * index );
      })(index, $(element));
    });
  };

  window.JS404 || (window.JS404 = {});
  JS404.bindPresentation = function () {
    lightDemo();
    bankLights();
  };

})();
