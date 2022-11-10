const Config = {
  theme: "molokai",
  theme_dark: true,
  theme_light: "off",
  add_punctuation: false,
  add_numbers: false,
  totalWordsToType: 50,
  totalTimeAvailable: 30,
  mode: "time" || "words" || "quote" || "custom",
  fontSize: 1.5,
  difficulty: "normal",
  quickEnd: false,
  caretStyle: "line" || "underline" || "box" || "block",
  flipTestColors: false,
  confidenceMode: "off",
  indicateTypos: "off",
  stopOnError: "off",
	caretColor: "",
	caretWidth: "thin" || "thick",
	keymap: "on" || "off",
  fontFamily: "Roboto_Mono",
	fontWeight: "normal" || "bold" || "bolder",
  highlightMode: "letter" || "word",
	forgiveErrors: true,
	endTestWithSpace: false,
	liveStats: false,
};

const wordstats = {
	correct: 0,
	incorrect: 0,
	missed: 0,
};

class History {
	#tests;
	#totaltests;
	constructor() {
		this.#tests = new Array();
		this.#totaltests = this.#tests.length;
	}
}

class Stats {
	
	#wpm;
	#cpm;
	#raw;
	#accuracy;
	
	constructor() {
		this.#cpm = 0;
		this.#wpm = 0;
		this.#raw = 0;
		this.#accuracy = 0;
	}
}

class Time {
	
	#testStartTime;
	#testEndTime;
	
	constructor() {
		this.#testStartTime = 0;
		this.#testEndTime = 0;
	}

  startTimer() {
    this.#testStartTime = performance.now();
  }
  stopTimer() {
    this.#testEndTime = performance.now();
  }
  testDuration() {
    return this.#testStartTime - this.#testEndTime;
  }
}

let testHasStarted = true;

class Test {

		#stats;
		#sentence;
    #time;

		constructor() {
      this.#time = new Time();
			this.#stats = new Stats();
			this.#sentence = new Sentence();
		}
		generateRandomWords(N);
}

class Sentence {

  #words; // array of strings
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor(words) { // expects an 1D array of strings

    if (arguments.length === 0) {
      this.#words = new Array();
    } else {
      this.#words = Array.from(words);
    }

    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

	showwords() {
		console.log(this.#words.join(' '));
	}

	push_front(...words) {
		for ( let word of words ) {
			this.#words.unshift(word);
		}
	}
	push_back(...words) {
		for ( let word of words ) {
			this.#words.push(word);
		}
	}
	pop_front() {
    return this.#words.shift();
	}
	pop_back() {
		return this.#words.pop();
	}

  get totalwords() { // return the total number of words present in words array
    return this.#words.length;
  }

  get activeWord() { // return the active word
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeLetter() { // return the active letter
    try {
      if (
        this.#currentWordIndex < 0 ||
        this.#currentWordIndex >= this.#words.length
      ) {
        throw "'currentWordIndex' is out of bound";
      }

      if (
        this.#currentLetterIndex < 0 ||
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].length
      ) {
        throw "'currentLetterIndex' is out of bound";
      }

      return this.#words[this.#currentWordIndex][this.#currentLetterIndex];
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  get activeWordLength() { // return length of active word
    return this.#words[this.#currentWordIndex].length;
  }
	
  get activeWordIndex() { // return active word's index
    return this.#currentWordIndex;
  }
  set activeWordIndex(index) { // set new index for active word
    this.#currentWordIndex = index;
  }

  get activeLetterIndex() { // return active letter's index
    return this.#currentLetterIndex;
  }
  set activeLetterIndex(index) { // set new index for active letter in active word
    this.#currentLetterIndex = index;
  }

  resetIndexes() {
    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }
  resetActiveWordIndex() {
    this.#currentWordIndex = 0;
  }
  resetActiveLetterIndex() {
    this.#currentLetterIndex = 0;
  }

  goToNextLetter() {
    this.#currentLetterIndex++;
  }
  goToPreviousLetter() {
    this.#currentLetterIndex--;
  }
  goToNextWord() {
    this.#currentWordIndex++;
  }
  goToPreviousWord() {
    this.#currentWordIndex--;
  }
}

const sentence = new Sentence(s.split(" "));
