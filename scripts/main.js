// import words1k from "./modules/words1k.js";
import words3k from "./modules/words3k.js";
import Config from "./modules/Config.js";
// import Sentence from "./modules/sentence.js";
// const sentence = new Sentence();
// sentence.showwords();

const initialstring = 'the quick brown fox jumps over the lazy dog';

const nonPrintableCharacters = [
  'Backspace', 'Meta', 'Alt', 'Shift', 'Control', 'CapsLock', 'Enter', 'Tab', 
  'ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Escape', 'Delete',
  'Ins', 'End', 'Home', 'Clear', 'Home', 'PageUp',, 'PageDown',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'
];

const carettypes = new Map([
  ["off", "caret_off"],
  ["line", "linetype"],
  ["underline", "underlinetype"],
  ["box", "boxtype"],
  ["block", "blocktype"],
]);

const speedtag = document.querySelector(".speed");
const textinput = document.querySelector(".touchtypist > input");
const wordsContainer = document.querySelector(".sentence");
// const root = document.querySelector(":root");

const newtestwords = Config.wordscount;

let active_word = 0;
let active_letter = 0;

let testStartTime = 0;
let testEndTime = 0;
let testStarted = true;

// use initial string when website loads for the first time.
const randomWords = generateRandomWords();

// load the initial string for first test for the typist
for (let i = 0; i < randomWords.length; ++i) {
  wordsContainer.insertAdjacentElement("beforeend", randomWords[i]);
}

let words = Array.from(document.getElementsByTagName("word"));
let totalwords = words.length;
let letters = words[active_word].children; // store letters of first word

words[active_word].classList.add("active");
letters[active_letter].setAttribute("id", Config.caret); // add caret
textinput.focus();

textinput.addEventListener("keydown", handleKeydown);

function handleKeydown(keyevent) {
  keyevent.preventDefault();

  if (testStarted) {
    // start timers as soon as the first letter is typed
    testStartTime = window.performance.now();
    testStarted = false;
  }

  const keytyped = keyevent.key;

  // move to next word if a space is typed
  if ( letters[active_letter].textContent.charCodeAt(0) === 160 && keytyped === " " ) {
    // charCode is checked so that caret doesn't go to next word when user just
    // hits a space character

    letters[active_letter].removeAttribute("id"); // remove caret
    words[active_word].classList.remove("active"); // remove highlight from active word
    ++active_word; // move to next word
    letters = words[active_word].children; // store all letters of the next word
    words[active_word].classList.add("active"); // add highlight to next word
    active_letter = 0; // go to first letter of next word
    letters[active_letter].setAttribute("id", Config.caret); // add caret

  } else if (keytyped === letters[active_letter].textContent) {
    // Move caret to next letter
    words[active_word].classList.remove("incorrect");
    letters[active_letter].removeAttribute("id"); // remove caret
    ++active_letter;
    letters[active_letter].setAttribute("id", Config.caret); // add caret

    if (
      active_word === totalwords - 1 &&
      active_letter === letters.length - 1
    ) {
      // restart new test if user has finished typing all the words

      testEndTime = window.performance.now();
      words[active_word].classList.remove("active");
      letters[active_letter].removeAttribute("id"); // remove caret

      speed_wpm(testStartTime, testEndTime); // display typing speed
      textinput.removeEventListener("keydown", handleKeydown);
      newtest();
    }
  } else if (keyevent.metaKey && keytyped === "Backspace") {
    // cmd + backspace
    // clear all typed words: restart without resetting the timer

    letters[active_letter].removeAttribute("id"); // remove caret
    words[active_word].classList.remove("active");

    // remove error highlight from current word till first word
    for (let i = words.length - 1; i >= 0; --i) {
      words[i].classList.remove("incorrect");
    }

    // reset variables to initial state
    active_letter = 0;
    active_word = 0;

    // store letters of the first word
    letters = words[active_word].children;

    words[active_word].classList.add("active"); // highlight first word

    letters[active_letter].setAttribute("id", Config.caret); // add caret
  } else if (
    (keyevent.altKey && keytyped === "Backspace") ||
    (keyevent.ctrlKey && keytyped === "Backspace")
  ) {
    // (alt + backspace) || (opt + backspace)
    // clear one word at a time putting caret at first letter of previous word

    letters[active_letter].removeAttribute("id"); // remove caret
    words[active_word].classList.remove("incorrect"); // remove error from current word

    // if caret is already at first letter of a word and user then goes back to
    // previous word
    if (active_letter === 0 && active_word > 0) {
      words[active_word].classList.remove("active"); // remove active word status

      --active_word;

      words[active_word].classList.add("active"); // highlight previous word
      letters = words[active_word].children; // store letters of previous word
      letters[active_letter].setAttribute("id", Config.caret); // add caret
    }

    active_letter = 0; // point to first letter of current word
    words[active_word].classList.remove("incorrect");
    letters[active_letter].setAttribute("id", Config.caret); // add caret

  } else if (keytyped === "Backspace") {
    // Take caret one letter back.

    words[active_word].classList.remove("incorrect");

    // Take caret to previous letter of the current word as long as there is a
    // letter before it.
    if (active_letter > 0) {
      
      letters[active_letter].removeAttribute("id"); // remove caret
      --active_letter;
      letters[active_letter].setAttribute("id", Config.caret); // add caret

    } else if (active_letter === 0 && active_word > 0) {
      // if caret is on first letter of the current word then, put caret on space
      // character of previous word i.e, caret should appear after last
      // non-whitespace character of previous word.

      letters[active_letter].removeAttribute("id"); // remove caret
      words[active_word].classList.remove("active");

      --active_word; // go to previous word

      letters = words[active_word].children; // store letters of previous word
      words[active_word].classList.add("active"); // highlight the previous word

      active_letter = letters.length - 1; // point to last letter of previous word

      letters[active_letter].setAttribute("id", Config.caret); // add caret
    }
  } else {
    // insert '·' this instead of &nbsp; when user hits space character
    // in the wrong place
    if (!nonPrintableCharacters.includes(keytyped)) {
      words[active_word].classList.add("incorrect");
    }
  }
}

function newtest() {
  let wordsContainer = document.querySelector(".sentence");
  wordsContainer.innerHTML = "";
  textinput.value = "";

  const randomWords = generateRandomWords(newtestwords);

  for (let i = 0; i < randomWords.length; ++i) {
    wordsContainer.insertAdjacentElement("beforeend", randomWords[i]);
  }
  
  words = Array.from(document.getElementsByTagName("word"));
  totalwords = words.length;

  active_word = 0;
  active_letter = 0;
  testStarted = true;
  testStartTime = 0;
  testEndTime = 0;

  letters = words[active_word].children;
  words[active_word].classList.add("active");
  letters[active_letter].setAttribute("id", Config.caret); // add caret

  textinput.addEventListener("keydown", handleKeydown); // this brings everything live again
  textinput.focus();

  setTimeout(() => {
    speedtag.style.color = "whitesmoke";
  }, 2000);
}

function totalcharacters(words) {
  let chars = 0;
  for (let word of words) {
    chars += word.children.length;
  }
  return chars;
}

function speed_wpm(testStartTime, testEndTime) {

  const sec = (testEndTime - testStartTime) / 1000;
  const wordsTyped = totalcharacters(words) / 5;
  const wpm = (wordsTyped / sec) * 60;

  speedtag.textContent = `${Math.round(wpm)}wpm`;
  speedtag.style.color = "deeppink";
  speedtag.style.fontWeight = '400';
}

function generateRandomWords(noOfWordsToGenerate) {

  let wordsInStringForm = [];
  
  if ( arguments.length === 0 ) {
    wordsInStringForm = initialstring.split(" ");
  } else {
    wordsInStringForm = new Array(noOfWordsToGenerate);
    for (let i = 0; i < noOfWordsToGenerate; ++i) {
      wordsInStringForm[i] = words3k[Math.trunc(Math.random() * words3k.length)];
    }
  }

  let totalwords  = wordsInStringForm.length;
  let randomWords = new Array(totalwords);

  for (let i = 0; i < totalwords; ++i) {

    let word = document.createElement("word");
    let wordlength = wordsInStringForm[i].length;

    for (let j = 0; j < wordlength; ++j) {

      let letter = document.createElement("letter");
      letter.textContent = wordsInStringForm[i][j];
      word.appendChild(letter);
      letter.classList.add(carettypes.get(Config.caret));
    }

    // letter with space
    let letterWithSpace = document.createElement("letter");
    letterWithSpace.classList.add(carettypes.get(Config.caret));
    letterWithSpace.innerHTML = `&nbsp;`;
    word.appendChild(letterWithSpace);
  
    randomWords[i] = word;
  }

  return randomWords;
}

// =============================================================================

const       caretoff = document.querySelector(".caretstyles > .caretoff");
const  caretoff_icon = document.querySelector("#off-icon .fa-ban")
const      caretline = document.querySelector(".caretstyles > .caretline");
const caretunderline = document.querySelector(".caretstyles > .caretunderline");
const       caretbox = document.querySelector(".caretstyles > .caretbox");
const     caretblock = document.querySelector(".caretstyles > .caretblock");

const allcaretstyles = document.querySelectorAll(".caretstyles > .caret");

function updateCaretStyle(evt) {

  if ( this.title === Config.caret ) return;

  evt.preventDefault();
  
  for ( let othercaret of allcaretstyles ) {

    if ( this !== othercaret ) { // reset default background color of other caretstyles
      othercaret.style.backgroundColor = "var(--setting-carets__bgcolor)";
      if ( othercaret === caretoff ) {
        caretoff_icon.style.color = "var(--setting-offcaret-icon__color)";
      }
    }
  }

  if ( this === caretoff ) {
    caretoff_icon.style.color = "#ff0000";
    caretoff.style.backgroundColor = "#ffeaea";
  } else {
    this.style.backgroundColor = "var(--setting-carets__bgcoloractive)";
  }

  Config.caret = this.title;
  newtest();
}

caretoff.addEventListener('click', updateCaretStyle);
caretbox.addEventListener('click', updateCaretStyle);
caretline.addEventListener('click', updateCaretStyle);
caretblock.addEventListener('click', updateCaretStyle);
caretunderline.addEventListener('click', updateCaretStyle);