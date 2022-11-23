import Config from "./config.js";
import * as Misc from "./misc.js";
import * as Constants from "./constants.js"

class Sentence {
  #words; // array of strings
  #currentWordIndex; // stores index for current word which the user is typing
  #currentLetterIndex; // stores the index for current letter of current word

  constructor() {
    this.#words = Misc.getRandomWords();
    this.#currentWordIndex = 0;
    this.#currentLetterIndex = 0;
  }

  get totalwords() {
    return this.#words.length;
  }
  get totalcharacters() {
    let count = 0;
    for (let word of this.#words) {
      count += word.children.length;
    }
    return count;
  }

  // get word element
  get activeWord() {
    try {
      if ( this.#currentWordIndex < 0 || this.#currentWordIndex >= this.#words.length ) {
        throw `'currentWordIndex' is out of bound (${this.#currentWordIndex})`;
      }
      return this.#words[this.#currentWordIndex];

    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  // get active word in string type
  get activeWordValue() {
    // here...
  }

  // get letter element
  get activeLetter() {
    try {
      if ( this.#currentWordIndex < 0 || this.#currentWordIndex >= this.#words.length ) {
        throw `'currentWordIndex' is out of bound (${this.#currentWordIndex})`;
      }

      if (
        this.#currentLetterIndex < 0 ||
        this.#currentLetterIndex >= this.#words[this.#currentWordIndex].length
      ) {
        throw `'currentLetterIndex' is out of bound (${this.#currentLetterIndex})`;
      }
      return this.#words[this.#currentWordIndex].children[this.#currentLetterIndex];
      
    } catch (outofbounderror) {
      console.error(outofbounderror);
    }
  }

  // get active letter in string type
  get activeLetterValue() {
    // here...
  }

  // getters (indexes)
  get activeWordIndex() {
    return this.#currentWordIndex;
  }
  get activeLetterIndex() {
    return this.#currentLetterIndex;
  }

  // setters (indexes)
  set activeWordIndex(index) {
    this.#currentWordIndex = index;
  }
  set activeLetterIndex(index) {
    this.#currentLetterIndex = index;
  }

  // increment letter & word indexes
  incrementLetterIndex() {
    this.#currentLetterIndex++;
  }
  incrementWordIndex() {
    this.#currentWordIndex++;
  }

  // decrement letter & word indexes
  decrementLetterIndex() {
    this.#currentLetterIndex--;
  }
  decrementWordIndex() {
    this.#currentWordIndex--;
  }

  // reset letter & word indexes
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
}

export default Sentence;