import { config } from "./config";

export function generateRandomWords(count = 25) { }

export function createWordElements(strings) { }

// maintain a array of strings for text separately
export const text = {
	word_element: [],
	index: 0,

	load(arrayOfWords) {
		this.word_element = createWordElements(arrayOfWords);
		this.index = 0;
	},
  length() {
		return this.word_element.length;
	},
	self() {
		return this.word_element[0]?.parentElement;
	},
	getWordIndex() {
		return this.index;
	},
	setWordIndexTo(i) {
		this.index = i;
	},
	decrementWordIndex() {
		this.index = this.index - 1;
	},
  incrementWordIndex() {
		this.index = this.index + 1;
	},
	previous_word() {
		if ( this.index < 0 ) throw `index: ${this.index}`;
		return this.word_element[this.index - 1];
	},
  current_word() {
		if ( (this.index < 0) || (this.index > this.word.length - 1) ) throw `index: ${this.index}`;
		return this.word_element[this.index];
	},
	next_word() {
		if ( this.index >= this.word.length - 1 ) throw `index: ${this.index}`;
		return this.word_element[this.index + 1];
	},
	word_at(index) {
		if ( (index < 0) || (index > this.word_element.length - 1) ) throw `index: ${this.index}`;
		return this.word_element[index];
	},
}

export const word = {
	letter_text: [],
	letter_element: [],
	index: 0,
	
	load(word, isPreviousWord = false) {

		this.letter_element = Array.from(word?.children);

		if ( isPreviousWord ) {
			this.index = this.letter.length - 1; // for previous word
		} else {
			this.index = 0; // for next/current word
		}
	},
	length() {
		return this.letter_element.length;
	},
	self() {
		return this.letter[0]?.parentElement;
	},
	getLetterIndex() {
		return this.index;
	},
	setLetterIndexTo(index) {
		this.index = index;
	},
	decrementLetterIndex() {
		this.index = this.index - 1;
	},
  incrementLetterIndex() {
		this.index = this.index + 1;
	},
	previous_letter() {},
	current_letter() {
		if ( (this.index < 0) || (this.index > this.letter.length - 1) ) throw `index: ${this.index}`
		return this.letter[this.index];
	},
	next_letter() {},
	letter_at(index) {
		if ( (index < 0) || (index > this.length() - 1) ) throw `index: ${this.index}`;
		return this.letter[index];
	},
}