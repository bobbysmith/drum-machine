$(document).ready(function(){

  // var lightDemo = function(){
  //   for(var i = 47; i<190; i++){

  //     var currentPad = $(".pad[data-id=" + i + "]");
  //     currentPad.addClass('selected');

  //   };
  // };

  // var lightDemoOff = function(){
  //   for(var i = 47; i<190; i++){
  //     var currentPad = $(".pad[data-id=" + i + "]");
  //     // console.log(currentPad);
  //     setTimeout(function(){
  //       currentPad.removeClass("selected");
  //     }, 200);
  //   };

  // };

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


  ///////////////////////////////////////
Sequencer = (function() {

      function Sequencer() {
        var _this = this;
        this.tracks = [];
        this.timers = [];
        this.position = 0;
        $('#pads button').bind('keydown', function(event) {
          var timeDelta;
          if (_this.recording) {
            timeDelta = new Date().getTime() - _this.timeStamp;
            return _this.current_track.push([timeDelta, event.target]);
          }
        });
      }

      Sequencer.prototype.record = function() {
        this.timeStamp = new Date().getTime();
        this.current_track = [];
        this.tracks.push(this.current_track);
        this.play();
        return this.recording = true;
      };

      Sequencer.prototype.play = function() {
        if (this.tracks.length !== 0) {
          this.timers = this.tracks.reduce(function(a, b) {
            return a.concat(b);
          });
          this.timers = this.timers.map(function(pair, index) {
            var func;
            func = function() {
              return $(pair[1]).trigger('mousedown');
            };
            return window.setTimeout(func, pair[0]);
          });
          return this.recording = false;
        }
      };

      Sequencer.prototype.stop = function() {
        this.recording = false;
        this.timers.map(function(timer) {
          return window.clearTimeout(timer);
        });
        return this.timers = [];
      };

      Sequencer.prototype.undo = function() {
        return this.tracks.pop();
      };

      return Sequencer;

    })();
    audioContext = new webkitAudioContext;
    AudioPlayer = (function() {

      function AudioPlayer(view) {
        this.view = view;
      }

      AudioPlayer.prototype.play = function() {
        if (this.buffer) {
          this.source = audioContext.createBufferSource();
          this.source.buffer = this.buffer;
          this.source.connect(audioContext.destination);
          this.source.playbackRate.value = this.playbackRate;
          this.source.noteGrainOn(0, this.startAt || 0, (this.endAt - this.startAt) || this.buffer.duration);
          return this.triggerView();
        }
      };

      AudioPlayer.prototype.stop = function() {
        if (this.buffer && this.source) {
          this.source.noteOff(0);
          window.clearTimeout(this.timer);
          return this.view.lightOff;
        }
      };

      AudioPlayer.prototype.getPlaybackRate = function() {
        if (this.source) return this.source.playbackRate.value;
      };

      AudioPlayer.prototype.setPlaybackRate = function(rate) {
        if (this.source) {
          this.playbackRate = rate;
          return this.source.playbackRate.value = rate;
        }
      };

      AudioPlayer.prototype.computedDuration = function() {
        return (((this.endAt - this.startAt) || this.buffer.duration) / this.getPlaybackRate()) * 1000;
      };

      AudioPlayer.prototype.triggerView = function() {
        var timeOut;
        this.view.lightOff();
        this.view.lightOn();
        window.clearTimeout(this.timer);
        Display.draw(this);
        timeOut = this.computedDuration();
        return this.timer = window.setTimeout(this.view.lightOff, timeOut);
      };

      AudioPlayer.prototype.load_file = function(file) {
        var reader, self,
          _this = this;
        reader = new FileReader;
        self = this;
        reader.onload = function(event) {
          var onerror, onsuccess;
          onsuccess = function(buffer) {
            self.buffer = buffer;
            return Display.draw(self);
          };
          onerror = function() {
            return alert('Unsupported file format');
          };
          return audioContext.decodeAudioData(event.target.result, onsuccess, onerror);
        };
        return reader.readAsArrayBuffer(file);
      };

      return AudioPlayer;

    })();
  ///////////////////////////////////////


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
    // lightDemoOff();
    // lightDemo();
    $('.bank.selected').removeClass('selected');
    $(this).addClass("selected");

    var bank = selectedBank();

    $('#current-bank span').text(bank.name);
    $('#description span').text(bank.description);
  });

  function selectBank(bankId) {
      $('.bank.selected').removeClass('selected');
      $(".bank[data-id=" + bankId + "]").addClass("selected");
  }


  $(document).on('keydown', function (e){
    // lightDemo();
    // lightDemoOff();
    if (bankKeys[e.keyCode]) {
      selectBank(bankKeys[e.keyCode]);
      var bank = selectedBank();

      $('#current-bank span').text(bank.name);
      $('#description span').text(bank.description);
      }
    // } else if (padKeyCode[e.keyCode]) {

    // }
    var currentPad = $(".pad[data-id=" + e.keyCode + "]");
    currentPad.addClass("selected");
    var soundId = e.keyCode;
    var bank = selectedBank();

    $('#sample span').text(bank.sounds[soundId].sample);

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
