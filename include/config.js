export default {
  user: {
    istyping: false,
    hastypedallwords: false,
    system: {
      device: "",
      operating_system: "",
      browser: "",
    }
  },
  setting: {
    dynamic: true, // live setting changes without restarting test
    view: {
      condensed: true, // label and buttons visible (toggle description)
      expanded: false, // label, buttons and description visible
    },
  },
  caret: {
    off: true, // none
    style: "line", // line | underline | box | block
    opacity: 1, // rgba - alpha[0,1]
    color: "",
  },
  pace_caret: {
    off: true, // none
    style: "line", // line | underline | box | block
    opacity: 0.5, // rgba - alpha[0,1]
    color: "",
    threshold: {
      last: false, // previous speed
      best: false, // personal best speed
      average: false, // average of last 10 speeds
      custom: {
        off: true,
        speed: 0, // provide custom speed (in wpm) to compete against
      },
    },
  },
  theme: "light", // light | dimmed | dark
  arrow: true, // implicitly enabled
  oppositeshift: false, // use opposite shift keys for shifting, ignore B, Y, ^
  oppositethumbforspace: false, // use opposite thumb for hitting space key [emulate opposite thumb by splitting space into two halves]
  underline: true, // underline the current word being typed
  textscroll: "abrupt", // abrupt | smooth
  textinput: {
    hidden: true, // hide input box during the test
    visible: false, // unhide input box during the test
  },
  backspace: {
    off: false,
    modifier: {
       alt: true, // backspace + alt
       meta: false, // backspace + cmd/win
       ctrl: false, // backspace + ctrl
    },
  },
  confidence: {
    low: true, // use backspace key to delete previous words/letters
    high: false, // cannot use backspace key to go back to previous word to correct mistakes
    peak: false, // cannot use backspace key   at all (no deletion allowed)
  },
  difficulty: {
    ease: true, // classic typing experience, mistakes can be corrected or left behind
    expert: false, // fails the test if user submit an incorrect word, current word can be edited
    master: false, // fails the test if user press a single incorrect key
  },
  strictspace: true, // default: hitting space will not move caret to next word instead it will be inserted
  testendswithspace: false, // to end test user needs to type space after last word
  error: {
    off: false, // no errors or incorrect words are highlighted (blind mode)
    replace: false, // replace to be typed letter with incorrectly typed letter & move caret forward
    insert: true, // insert incorrect letter before to be typed letter
    forgive: false, // insert errors, but forgive them (delete) as soon as user types correct letter
    stop: {
      letter: false,
      word: false,
    },
  },
  highlight: {
    off: false,
    mode: {
      letter: true,
      word: false,
    },
    flipcolor: false, // default: future text is brighter than the already typed text
  },
  tape: { // text in one line, text scrolls horizontally either from ltr or rtl direction
    off: true,
    letter: false,
    word: false,
  },
  text: {
    word: {
      count: 30, // 10 | 25 | 50 | 100 | infinite | input
      type: "dictionary", // dictionary | root | gibberish | quote | story | algorithm
      length: "random", // short(<5) | medium(>=5, <=9), | long(>=10, <=12) | very long(>=13) | random
    },
    color: {
      primary: "#1d2021", // future text, text which needs to be typed
      secondary: "#7b7b7b", // past text, text which has been typed
    },
    font: {
      size: 1.2, // size of each letter
      weight: 445, // thickness of each letter
      family: "Roboto Mono", // roboto | fira | mona | ubuntu | syne | source | VT323 | fuzzy | tsukimi | rampart | rubik | diploma | work | mona | nunito
    },
    whitespace: {
      off: false, // nospace
      type: {
        space: false, // 160, '&nbsp'
        bullet: true, // 8226, '•' (::after is used to draw bullet character)
        bar: false, // 9251, '␣'
      },
      code: 160, // 160 | 9251 | 8226
      character: "&nbsp;", // '&nbsp', '␣', '•'
    },
    include: {
      digit: false, // include numbers along with words
      punctuation: false, // .?",-';:()[]{}/...
    },
    capitalization: {
      firstletter: false, // capitalize only the first letter of first word in the text
      allfirstletters: false, // capitalize all the first letters of all words in the text
      random: false, // randomly capitalize the first letter of all words in the text
      jumbled: false, // randomly capitalize the letters of a word
    }
  },
  speedunit: {
    cpm: false, // show characters per minute
    wpm: true, // show words per minute
  },
  usefloats: false, // display floating point number
  live: {
    interval: { // calculation interval for speed, accuracy, burst
      word: false, // calculate after every word
      keystroke: true, // calculate after each keystroke
      second: false, // calculate after every one second
    },
    speed: false,    // show live speed in wpm/cpm
    accuracy: false, // show live accuracy
    burst: false,    // show live burst, speed of last word typed
  },
  timer: {
    off: false,
    seconds: 60, // 15 | 30 | 60 | 120 | custom
    hide: false,
  },
  minimum: {
    speed: {
      off: true,
      threshold: 0,
    },
    accuracy: {
      off: true,
      threshold: 0,
    },
  },
  keyboard: {
    off: false,
    reaction: {
      off: false,
      static: false,
      react: true,
      next: false,
    },
    language: "english", // english | hindi | bengali | arabic | russian | +languages(indian)
    layout: "qwerty", // qwerty | dvorak | colemak | workman
    emulate: false,
    visible: {
      function: true,
      alphanumeric: true,
      arrowpad: true,
      controlpad: true,
      numpad: true,
    },
  },
  warning: {
    focus: true,        // user is out of focus (not typing anymore)
    capslock: false,    // capslock key is left turned on
    numlock: false,     // numlock key is left turned on
    scrolllock: false,  // scolllock key is left turned on
  },
  guidedlessions: false, // learn touch typing using typing lessons
  customtext: false, // type custom ascii text
  practice: {
    arrow: false, // ArrowUp, ArrowLeft, ArrowRight, ArrowDown, KeyW, KeyA, KeyS, KeyD, Numpad8, Numpad4, Numpad6, Numpad2
    brackets: false, // {[(<>)]}
    numpad: false, // number pad's digits and symbols only
    numrow: false, // number row's digits [0-9] only
    specials: false, // `~!@#$%^&*()-_=+[{\|;:'".>,</?"}]
    alphanumeric: false, // ascii characters [a-z, A-Z] and digits [0-9]
    gibberish: false, // all printable ascii characters
    function: false,      // F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F11, F12
  },
};