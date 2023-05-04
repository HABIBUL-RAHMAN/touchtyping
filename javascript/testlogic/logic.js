import Config from "../include/config.js";
import * as CaretHandler from "../handler/carethandler.js";
import * as TestAreaElement from "../HTMLElement/TestAreaElement.js";
import * as Const from "../include/constant.js";
import * as Misc from "../utils/misc.js";
import * as SettingElement from "../HTMLElement/SettingElement.js";

import { time, typedchar, mInput } from "./statskeeper.js";
import Phrase from "../include/phrase.js";
import Word from "../include/word.js";

const phrase = new Phrase();
const word = new Word();

let wasSpace = false;

export const Test = {
	init() {
		Config.ttypist.istyping = false;
		Config.ttypist.hastypedeveryword = false;
		CaretHandler.addcaretto(word.activeletter);

		// InputElement.value | InputEvent.data
		TestAreaElement.input.addEventListener("input", registerinput);
		TestAreaElement.input.addEventListener("keydown", registerkeydown);
		TestAreaElement.input.addEventListener("keyup", registerkeyup);		
		TestAreaElement.input.value = "";
		TestAreaElement.input.focus();
	},
	restart() {
		typedchar.reset();
		time.reset();
		mInput.reset();
		phrase.loadwords(Misc.wordelements(Misc.randomwords()));
		word.loadword(phrase.activeword, { activeword: true });
		this.init();
	}
}

function registerinput(evt) {

	if ( !evt.isTrusted ) return;

	if ( mInput.keydownUnidentified ) {
		
		TestAreaElement.input.focus();

		if ( !Config.ttypist.istyping ) {
			time.begin = performance.now();
			Config.ttypist.istyping = true;
		}

		if ( evt.data !== null ) mInput.data = evt.data[evt.data.length - 1];

		if ( mInput.data === " " && Misc.isspace(word.activeletter) ) { // space is typed

			TestAreaElement.input.value = "";
			
			CaretHandler.removecaretfrom(word.activeletter);
			if ( phrase.activewordindex > 0 ) {
				phrase.prevword.classList.remove("wordunderline");
				phrase.incrementwordindex();
			}		
			word.loadword(phrase.nextword, { nextword: true });
			addunderline(phrase.activeword);
			CaretHandler.addcaretto(word.activeletter);
			
		} else if ( mInput.data === word.activeletter.textContent ) { // correct char is typed
			
			CaretHandler.removecaretfrom(word.activeletter);
	
			if ( word.activeletterindex < word.lastletterindex ) {
				CaretHandler.addcaretto(word.nextletter);
			} else {
	
				if ( word.activeletterindex === word.lastletterindex ) {
					if ( phrase.activewordindex < phrase.lastwordindex ) { // load next word
						word.loadword(phrase.nextword, { nextword: true });
						CaretHandler.addcaretto(word.activeletter);
					}	
	
					if ( phrase.activewordindex === phrase.lastwordindex ) { // test complete
						
						time.end = window.performance.now();
						CaretHandler.removecaretfrom(word.activeletter);
						Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
						Test.restart();
					}
				}	
			}
		}
	}

	mInput.reset();
}

export function removeUnderlineForLetter(letter) {
	letter.style["text-decoration-color"] = "#3e3e3e"
	letter.classList.remove("correct");
}

export function removeunderline(word) {
	for ( const letter of word.children ) {
		letter.classList.remove("wordunderline");
	}
}

export function addunderline(word) {
	for (const letter of word.children ) {	
		letter.classList.add("wordunderline");
	}
}

function registerkeydown(evt) {

	if ( !evt.isTrusted ) return;

	if ( (evt.key === "Unidentified") || (evt.code === "") ) { 
		mInput.keydownUnidentified = true;
		return;
	}

	if ( !Config.ttypist.istyping ) {
		time.begin = performance.now();
		Config.ttypist.istyping = true;
	}

	typedchar.reset();
  typedchar.value = evt.key;

	if ( (Misc.isspace(word.activeletter)) && (typedchar.value === " ") ) { // space is typed

		wasSpace = true;
		
		CaretHandler.removecaretfrom(word.activeletter);
		if ( phrase.activewordindex > 0 ) {
			removeunderline(phrase.prevword);
			phrase.incrementwordindex();
		}
		word.loadword(phrase.nextword, { nextword: true });
		addunderline(phrase.activeword);
		CaretHandler.addcaretto(word.activeletter);
		
	} else if ( typedchar.value === word.activeletter.textContent ) { // correct char is typed

		CaretHandler.removecaretfrom(word.activeletter);

		word.activeletter.classList.add("correct");
		word.activeletter.style["text-decoration-color"] = "#99cc00"

		if ( word.activeletterindex < word.lastletterindex ) {
			CaretHandler.addcaretto(word.nextletter);
		} else {

			if ( word.activeletterindex === word.lastletterindex ) { // load next word

				if ( phrase.activewordindex < phrase.lastwordindex ) {
					word.loadword(phrase.nextword, { nextword: true });
					CaretHandler.addcaretto(word.activeletter);
				}	

				if ( phrase.activewordindex === phrase.lastwordindex ) { // test complete
					time.end = window.performance.now();
					Config.ttypist.hastypedeveryword = true;
					return;
				}
			}	
		}
	} else if ( typedchar.value === "Backspace" ) { // deletion

		// caret is on first letter of first word, so no deletion
		if ( word.activeletterindex === 0 && phrase.activewordindex === 0 ) return;

		if ( evt.metaKey ) { // cmd + backspace

			CaretHandler.removecaretfrom(word.activeletter);
			phrase.resetwordindex();
			word.loadword(phrase.activeword, { activeword: true });
			CaretHandler.addcaretto(word.activeletter);

		} else if ( evt.altKey || evt.ctrlKey ) { // alt/opt + backspace

			if ( word.activeletterindex === 0 && phrase.activewordindex > 0 ) {

				if ( Misc.isspace(phrase.word_at(phrase.activewordindex - 1)?.children[0])) {
					phrase.decrementwordindex();
				}

				CaretHandler.removecaretfrom(word.activeletter);
				word.loadword(phrase.prevword, { prevword: true });
				CaretHandler.addcaretto(word.activeletter);
			}

			// delete all typed letters of the active word and put caret to first letter
			CaretHandler.removecaretfrom(word.activeletter);
			word.resetletterindex();
			CaretHandler.addcaretto(word.activeletter);

		} else { // backspace

			if ( word.activeletterindex > 0 ) {

				
				removeUnderlineForLetter(word.activeletter);
				CaretHandler.removecaretfrom(word.activeletter);
				CaretHandler.addcaretto(word.prevletter);
				removeUnderlineForLetter(word.activeletter);
				
			} else if ( word.activeletterindex === 0 && phrase.activewordindex > 0 ) {

				CaretHandler.removecaretfrom(word.activeletter);
				removeunderline(word.me());
				word.loadword(phrase.prevword, { prevword: true });
				
				if ( Misc.isspace(word.activeletter) ) {
					if ( phrase.activewordindex > 0 ) {
						phrase.decrementwordindex();
						addunderline(phrase.activeword);
						phrase.incrementwordindex();
					}
				}
				removeUnderlineForLetter(word.activeletter)
				CaretHandler.addcaretto(word.activeletter);
			}
		}
	} else {
		// if ( !Const.NOT_PRINTABLE.includes(typedchar.value) ) {
		// 	word.activeletter.classList.add("wordunderline");
		// }
	}
}

function registerkeyup(evt) {
	if ( !evt.isTrusted ) return;

	if ( wasSpace ) {
		TestAreaElement.input.value = "";
		wasSpace = false;
	}

	if ( Config.ttypist.hastypedeveryword ) {
		CaretHandler.removecaretfrom(word.activeletter);
		TestAreaElement.input.removeEventListener('input', registerinput);
		TestAreaElement.input.removeEventListener('keydown', registerkeydown);
		TestAreaElement.input.removeEventListener('keyup', registerkeyup);
		Misc.showspeed(Misc.totalchar(), (time.duration / 1000));
		Test.restart();
	}
}

export { phrase, word };