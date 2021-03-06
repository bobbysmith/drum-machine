(function () {

  var bank1 = {
    name: '808',
    description: "The OG Drum Machine",
    sounds: {
      55: {
        sample: 'kick',
        url: 'sound/808/kick.wav',
        buffer: undefined
      },
      56: {
        sample: 'snare',
        url: 'sound/808/snare.wav',
        buffer: undefined
      },
      57: {
        sample: 'clap',
        url: 'sound/808/clap.wav',
        buffer: undefined
      },
      48: {
        sample: 'cowbell',
        url: 'sound/808/cowbell.wav',
        buffer: undefined
      },
      89: {
        sample: 'open hi-hat',
        url: 'sound/808/open_hat.wav',
        buffer: undefined
      },
      85: {
        sample: 'closed hi-hat',
        url: 'sound/808/closed_hat.wav',
        buffer: undefined
      },
      73: {
        sample: 'cymbal',
        url: 'sound/808/cymbal.wav',
        buffer: undefined
      },
      79: {
        sample: 'shaker',
        url: 'sound/808/shaker.wav',
        buffer: undefined
      },
      72: {
        sample: 'rimshot',
        url: 'sound/808/rimshot.wav',
        buffer: undefined
      },
      74: {
        sample: 'low tom',
        url: 'sound/808/low_tom.wav',
        buffer: undefined
      },
      75: {
        sample: 'medium tom',
        url: 'sound/808/medium_tom.wav',
        buffer: undefined
      },
      76: {
        sample: 'high tom',
        url: 'sound/808/high_tom.wav',
        buffer: undefined
      },
      66: {
        sample: 'wood block',
        url: 'sound/808/block.wav',
        buffer: undefined
      },
      78: {
        sample: 'low congo',
        url: 'sound/808/low_congo.wav',
        buffer: undefined
      },
      77: {
        sample: 'medium congo',
        url: 'sound/808/medium_congo.wav',
        buffer: undefined
      },
      188: {
        sample: 'high congo',
        url: 'sound/808/high_congo.wav',
        buffer: undefined
      }
    }
  };

  var bank2 = {
    name: 'House',
    description: '4 on tha floor',
    sounds: {
      55: {
        sample: 'kick',
        url: 'sound/house/808_kick.wav',
        buffer: undefined
      },
      56: {
        sample: 'snare',
        url: 'sound/house/909_snare.wav',
        buffer: undefined
      },
      57: {
        sample: 'clap',
        url: 'sound/house/clap.wav',
        buffer: undefined
      },
      48: {
        sample: 'hi-hat',
        url: 'sound/house/hihat.wav',
        buffer: undefined
      },
      89: {
        sample: 'cymbal',
        url: 'sound/house/cymbal.wav',
        buffer: undefined
      },
      85: {
        sample: 'high tom',
        url: 'sound/house/high_tom.wav',
        buffer: undefined
      },
      73: {
        sample: 'medium tom',
        url: 'sound/house/medium_tom.wav',
        buffer: undefined
      },
      79: {
        sample: 'low tom',
        url: 'sound/house/low_tom.wav',
        buffer: undefined
      },
      72: {
        sample: 'steel drum',
        url: 'sound/house/steel_drum.wav',
        buffer: undefined
      },
      74: {
        sample: 'tambourine',
        url: 'sound/house/tambourine.wav',
        buffer: undefined
      },
      75: {
        sample: 'much body vocal',
        url: 'sound/house/much_body.mp3',
        buffer: undefined
      },
      76: {
        sample: 'body vocal',
        url: 'sound/house/body.mp3',
        buffer: undefined
      },
      66: {
        sample: 'cowbell',
        url: 'sound/house/808_cowbell.wav',
        buffer: undefined
      },
      78: {
        sample: 'bass',
        url: 'sound/house/bass.wav',
        buffer: undefined
      },
      77: {
        sample: 'horn',
        url: 'sound/house/horn.wav',
        buffer: undefined
      },
      188: {
        sample: 'synth',
        url: 'sound/house/synth.wav',
        buffer: undefined
      }
    }
  };

  var bank3 = {
    name: 'Dancehall',
    description: 'Reeeeeeeewiiiiind Selecta',
    sounds: {
      55: {
        sample: 'kick',
        url: 'sound/dancehall/kick.wav',
        buffer: undefined
      },
      56: {
        sample: 'snare',
        url: 'sound/dancehall/snare.wav',
        buffer: undefined
      },
      57: {
        sample: 'hi-hat',
        url: 'sound/dancehall/hihat02.wav',
        buffer: undefined
      },
      48: {
        sample: 'shaker',
        url: 'sound/dancehall/shaker.wav',
        buffer: undefined
      },
      89: {
        sample: 'timbali',
        url: 'sound/dancehall/timbali.wav',
        buffer: undefined
      },
      85: {
        sample: 'riddim',
        url: 'sound/dancehall/riddim.wav',
        buffer: undefined
      },
      73: {
        sample: 'dutty',
        url: 'sound/dancehall/dutty.wav',
        buffer: undefined
      },
      79: {
        sample: 'hey',
        url: 'sound/dancehall/hey.mp3',
        buffer: undefined
      },
      72: {
        sample: 'bumbaclot',
        url: 'sound/dancehall/bumbaclat.wav',
        buffer: undefined
      },
      74: {
        sample: 'yeah mon',
        url: 'sound/dancehall/yeah_mon.wav',
        buffer: undefined
      },
      75: {
        sample: 'uhh',
        url: 'sound/dancehall/uhh.wav',
        buffer: undefined
      },
      76: {
        sample: 'beenie man vox',
        url: 'sound/dancehall/beenie.wav',
        buffer: undefined
      },
      66: {
        sample: 'gunshot',
        url: 'sound/dancehall/gunshot.wav',
        buffer: undefined
      },
      78: {
        sample: 'laser',
        url: 'sound/dancehall/laser.wav',
        buffer: undefined
      },
      77: {
        sample: 'lasers',
        url: 'sound/dancehall/lazerzz.wav',
        buffer: undefined
      },
      188: {
        sample: 'airhorn',
        url: 'sound/dancehall/airhorn.mp3',
        buffer: undefined
      }
    }
  };

  var bank4 = {
    name: 'Hip Hop',
    description: 'That ole boom bap',
    sounds: {
      55: {
        sample: 'kick',
        url: 'sound/hip-hop/kick.wav',
        buffer: undefined
      },
      56: {
        sample: 'snare',
        url: 'sound/hip-hop/snare.wav',
        buffer: undefined
      },
      57: {
        sample: 'rim shot',
        url: 'sound/hip-hop/rimshot.wav',
        buffer: undefined
      },
      48: {
        sample: 'hi-hat',
        url: 'sound/hip-hop/hihat.wav',
        buffer: undefined
      },
      89: {
        sample: 'clap',
        url: 'sound/808/clap.wav',
        buffer: undefined
      },
      85: {
        sample: 'Ludacris Synth',
        url: 'sound/hip-hop/luda.wav',
        buffer: undefined
      },
      73: {
        sample: 'Neptunes buzz',
        url: 'sound/hip-hop/neptunes.wav',
        buffer: undefined
      },
      79: {
        sample: 'synth stab',
        url: 'sound/hip-hop/stab.wav',
        buffer: undefined
      },
      72: {
        sample: 'Raw',
        url: 'sound/hip-hop/raw.wav',
        buffer: undefined
      },
      74: {
        sample: 'Oh Baby',
        url: 'sound/hip-hop/oh_baby.wav',
        buffer: undefined
      },
      75: {
        sample: 'Grindin',
        url: 'sound/hip-hop/grindin.wav',
        buffer: undefined
      },
      76: {
        sample: 'Hit Me',
        url: 'sound/hip-hop/hit_me.wav',
        buffer: undefined
      },
      66: {
        sample: 'Ooh Vox',
        url: 'sound/hip-hop/ooh.wav',
        buffer: undefined
      },
      78: {
        sample: 'Yeeahhhh!',
        url: 'sound/hip-hop/yea.wav',
        buffer: undefined
      },
      77: {
        sample: 'yo',
        url: 'sound/hip-hop/yo.wav',
        buffer: undefined
      },
      188: {
        sample: 'sfx',
        url: 'sound/hip-hop/sfx_hit.wav',
        buffer: undefined
      }
    }
  };

  var bank5 = {
    name: 'Soul',
    description: "1, 2, 3, 4... Hit me",
    sounds: {
      55: {
        sample: 'kick',
        url: 'sound/soul/kick.wav',
        buffer: undefined
      },
      56: {
        sample: 'snare',
        url: 'sound/soul/snare_1.wav',
        buffer: undefined
      },
      57: {
        sample: 'cowbell',
        url: 'sound/soul/cowbell.wav',
        buffer: undefined
      },
      48: {
        sample: 'hi-hat',
        url: 'sound/soul/hihat.wav',
        buffer: undefined
      },
      89: {
        sample: 'crash',
        url: 'sound/soul/crash.wav',
        buffer: undefined
      },
      85: {
        sample: 'funky',
        url: 'sound/soul/funky.wav',
        buffer: undefined
      },
      73: {
        sample: 'horn stab',
        url: 'sound/soul/horn.wav',
        buffer: undefined
      },
      79: {
        sample: 'JB horn',
        url: 'sound/soul/jb_horn.wav',
        buffer: undefined
      },
      72: {
        sample: 'one',
        url: 'sound/soul/one.wav',
        buffer: undefined
      },
      74: {
        sample: 'two',
        url: 'sound/soul/two.wav',
        buffer: undefined
      },
      75: {
        sample: 'three',
        url: 'sound/soul/three.wav',
        buffer: undefined
      },
      76: {
        sample: 'four',
        url: 'sound/soul/four.wav',
        buffer: undefined
      },
      66: {
        sample: 'Hit Me',
        url: 'sound/soul/hit_me.wav',
        buffer: undefined
      },
      78: {
        sample: 'huh',
        url: 'sound/soul/jb_huh.wav',
        buffer: undefined
      },
      77: {
        sample: 'ha',
        url: 'sound/soul/ha.wav',
        buffer: undefined
      },
      188: {
        sample: 'yow',
        url: 'sound/soul/yow.wav',
        buffer: undefined
      }
    }
  };

  var bank6 = {
    name: 'Hidden',
    description: "all the classics",
    sounds: {
      55: {
        sample: 'Node',
        url: 'sound/easter-egg/node.wav',
        buffer: undefined
      },
      56: {
        sample: 'the doooooom',
        url: 'sound/easter-egg/dom.wav',
        buffer: undefined
      },
      57: {
        sample: 'ajax traversal manipulation',
        url: 'sound/easter-egg/ajax.wav',
        buffer: undefined
      },
      48: {
        sample: 'api',
        url: 'sound/easter-egg/api.wav',
        buffer: undefined
      },
      89: {
        sample: 'they call it coffeescript',
        url: 'sound/easter-egg/coffeescript.wav',
        buffer: undefined
      },
      85: {
        sample: 'design',
        url: 'sound/easter-egg/design.wav',
        buffer: undefined
      },
      73: {
        sample: 'ember',
        url: 'sound/easter-egg/ember.wav',
        buffer: undefined
      },
      79: {
        sample: 'git real',
        url: 'sound/easter-egg/git.wav',
        buffer: undefined
      },
      72: {
        sample: 'javascript roadtrip',
        url: 'sound/easter-egg/js_roadtrip.wav',
        buffer: undefined
      },
      74: {
        sample: "testin' with rspec",
        url: 'sound/easter-egg/rspec.wav',
        buffer: undefined
      },
      75: {
        sample: 'sasssssy',
        url: 'sound/easter-egg/sassy.wav',
        buffer: undefined
      },
      76: {
        sample: 'TDD',
        url: 'sound/easter-egg/tdd.wav',
        buffer: undefined
      },
      66: {
        sample: 'get your truth...',
        url: 'sound/easter-egg/truth_dom.wav',
        buffer: undefined
      },
      78: {
        sample: 'zombie rails',
        url: 'sound/easter-egg/rails.wav',
        buffer: undefined
      },
      77: {
        sample: 'css',
        url: 'sound/easter-egg/css.wav',
        buffer: undefined
      },
      188: {
        sample: 'makersquare',
        url: 'sound/easter-egg/mks.wav',
        buffer: undefined
      }
    }
  };

  window.JS404 || (window.JS404 = {});
  JS404.banks = [
    bank1,
    bank2,
    bank3,
    bank4,
    bank5
    // bank6
  ];

  for (var i = 0; i < JS404.banks.length; i += 1) {
    JS404.banks[i].id = i;
  }

})();
