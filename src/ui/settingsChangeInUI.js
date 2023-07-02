import Config from "../../include/config.js"
import * as SettingsElement from "../elements/settingsElements.js";

// keyboard reaction
export function changeKeyboardReactionInUI(value) {
	if ( value === "next" ) {
		SettingsElement.keyboardReaction.off.id = "";
		SettingsElement.keyboardReaction.static.id = "";
		SettingsElement.keyboardReaction.react.id = "";
		SettingsElement.keyboardReaction.next.id = "selected";
	} else if ( value === "static" ) {
		SettingsElement.keyboardReaction.off.id = "";
		SettingsElement.keyboardReaction.static.id = "selected";
		SettingsElement.keyboardReaction.react.id = "";
		SettingsElement.keyboardReaction.next.id = "";
	} else if ( value === "react" ) {
		SettingsElement.keyboardReaction.off.id = "";
		SettingsElement.keyboardReaction.static.id = "";
		SettingsElement.keyboardReaction.react.id = "selected";
		SettingsElement.keyboardReaction.next.id = "";
	} else {
		SettingsElement.keyboardReaction.off.id = "selected";
		SettingsElement.keyboardReaction.static.id = "";
		SettingsElement.keyboardReaction.react.id = "";
		SettingsElement.keyboardReaction.next.id = "";
	}
}

// emulate keyboard
export function changeKeyboardLayoutEmulateInUI(value) {
	if ( value === "on" ) {
		SettingsElement.KeyboardLayoutEmulate.off.id = "";
		SettingsElement.KeyboardLayoutEmulate.on.id = "selected";
	}	else {
		SettingsElement.KeyboardLayoutEmulate.off.id = "selected";
		SettingsElement.KeyboardLayoutEmulate.on.id = "";
	}
}

// dynamic setting
export function changeDynamicSettingsInUI(value) {
	if ( value === "off" ) {
		SettingsElement.setting.dynamic.off.id = "selected";
		SettingsElement.setting.dynamic.on.id = "";
	}	else {
		SettingsElement.setting.dynamic.off.id = "";
		SettingsElement.setting.dynamic.on.id = "selected";
	}
}

// website theme
export function changeWebsiteThemeInUI(value) {
	if ( value === "dark" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "selected";
	} else if ( value === "midnight" ) {
		SettingsElement.websiteTheme.light.id = "";
		SettingsElement.websiteTheme.midnight.id = "selected";
		SettingsElement.websiteTheme.dark.id = "";
	} else {
		SettingsElement.websiteTheme.light.id = "selected";
		SettingsElement.websiteTheme.midnight.id = "";
		SettingsElement.websiteTheme.dark.id = "";
	}
}

// tape mode
export function changeTapeModeInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "selected";
		SettingsElement.tape.mode.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.tape.off.id = "";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "selected";
	} else {
		SettingsElement.tape.off.id = "selected";
		SettingsElement.tape.mode.letter.id = "";
		SettingsElement.tape.mode.word.id = "";
	}
}

// text input
export function changeTextInputInUI(value) {
	if ( value === "visible" ) {
		SettingsElement.textInput.hidden.id = "";
		SettingsElement.textInput.visible.id = "selected";
	} else {
		SettingsElement.textInput.hidden.id = "selected";
		SettingsElement.textInput.visible.id = "";
	}
}

// text highlight
export function changeTextHightlightInUI(value) {
	if ( value === "word" ) {
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "selected";
	} else if ( value === "letter" ) {		
		SettingsElement.textHighlight.off.id = "";
		SettingsElement.textHighlight.mode.letter.id = "selected";
		SettingsElement.textHighlight.mode.word.id = "";
	} else {
		SettingsElement.textHighlight.off.id = "selected";
		SettingsElement.textHighlight.mode.letter.id = "";
		SettingsElement.textHighlight.mode.word.id = "";
	}
}

// flip text highlight
export function changeFlipTextHightlightInUI(value) {

	if ( value === "on" ) {
		SettingsElement.textHighlight.flip.off.id = "";
		SettingsElement.textHighlight.flip.on.id = "selected";
	} else {
		SettingsElement.textHighlight.flip.off.id = "selected";
		SettingsElement.textHighlight.flip.on.id = "";
	}
}

// text underline
export function changeTextUnderlineInUI(value) {
	if ( value === "off" ) 	{
		SettingsElement.textUnderline.off.id = "selected";
		SettingsElement.textUnderline.on.id = "";
	} else {
		SettingsElement.textUnderline.off.id = "";
		SettingsElement.textUnderline.on.id = "selected";
	}
}

// text whitespace
export function changeTextWhitespaceInUI(value) {
	if ( value === "bullet" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "selected";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else if ( value === "bar" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "selected";
	} else if ( value === "space" ) {
		SettingsElement.textWhitespace.off.id = "";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "selected";
		SettingsElement.textWhitespace.type.bar.id = "";
	} else {
		SettingsElement.textWhitespace.off.id = "selected";
		SettingsElement.textWhitespace.type.bullet.id = "";
		SettingsElement.textWhitespace.type.space.id = "";
		SettingsElement.textWhitespace.type.bar.id = "";
	}
}

// strict space
export function changeStrictSpaceInUI(value) {
	if ( value === "off" ) {
		SettingsElement.strictspace.off.id = "selected";
		SettingsElement.strictspace.on.id = "";
	} else {
		SettingsElement.strictspace.off.id = "";
		SettingsElement.strictspace.on.id = "selected";
	}	
}

// quick end
export function changeQuickEndInUI(value) {
	if ( value === "off" ) {
		SettingsElement.quickend.off.id = "selected";
		SettingsElement.quickend.on.id = "";
	} else {
		SettingsElement.quickend.off.id = "";
		SettingsElement.quickend.on.id = "selected";
	}
}

// test difficulty
export function changeDifficultyInUI(value) {
	if ( value === "expert" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "selected";
		SettingsElement.difficulty.master.id = "";
	} else if ( value === "master" ) {
		SettingsElement.difficulty.ease.id = "";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "selected";
	} else {
		SettingsElement.difficulty.ease.id = "selected";
		SettingsElement.difficulty.expert.id = "";
		SettingsElement.difficulty.master.id = "";
	}
}

// confidence
export function changeConfidenceInUI(value) {
	if ( value === "high" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "selected";
		SettingsElement.confidence.peak.id = "";
	}	else if ( value === "peak" ) {
		SettingsElement.confidence.low.id = "";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "selected";
	} else {
		SettingsElement.confidence.low.id = "selected";
		SettingsElement.confidence.high.id = "";
		SettingsElement.confidence.peak.id = "";
	}
}

// backspace key
export function changeBackspaceKeyInUI(value) {
	if ( value === "off" ) {
		SettingsElement.backspace.off.id = "selected";
		SettingsElement.backspace.on.id = "";
	}	else {
		SettingsElement.backspace.off.id = "";
		SettingsElement.backspace.on.id = "selected";
	}
}

// delete on correct
export function changeDeleteOnCorrectInUI(value) {
	if ( value === "off" ) {
		SettingsElement.deleteOnCorrect.off.id = "selected";
		SettingsElement.deleteOnCorrect.on.id = "";
	}	else {
		SettingsElement.deleteOnCorrect.off.id = "";
		SettingsElement.deleteOnCorrect.on.id = "selected";
	}
}

// error
export function changeErrorInUI(value) {
	if ( value === "skip" ) {
		SettingsElement.error.off.id = "";
		SettingsElement.error.insert.id = "";
		SettingsElement.error.skip.id = "selected";
		SettingsElement.error.replace.id = "";
	} else if ( value === "replace" ) {
		SettingsElement.error.off.id = "";
		SettingsElement.error.insert.id = "";
		SettingsElement.error.skip.id = "";
		SettingsElement.error.replace.id = "selected";
	} else if ( value === "insert" ) {
		SettingsElement.error.off.id = "";
		SettingsElement.error.insert.id = "selected";
		SettingsElement.error.skip.id = "";
		SettingsElement.error.replace.id = "";
	} else {
		SettingsElement.error.off.id = "selected";
		SettingsElement.error.insert.id = "";
		SettingsElement.error.skip.id = "";
		SettingsElement.error.replace.id = "";
	}
}

// forgive error
export function changeForgiveErrorInUI(value) {
	if ( value === "on" ) {
		SettingsElement.error.forgive.off.id = "";
		SettingsElement.error.forgive.on.id = "selected";
	} else {
		SettingsElement.error.forgive.off.id = "selected";
		SettingsElement.error.forgive.on.id = "";
	}
}

// stop on error
export function changeStopOnErrorInUI(value) {
	if ( value === "letter" ) {
		SettingsElement.error.stop.off.id = "";
		SettingsElement.error.stop.letter.id = "selected";
		SettingsElement.error.stop.word.id = "";
	} else if ( value === "word" ) {
		SettingsElement.error.stop.off.id = "";
		SettingsElement.error.stop.letter.id = "";
		SettingsElement.error.stop.word.id = "selected";
	} else {
		SettingsElement.error.stop.off.id = "selected";
		SettingsElement.error.stop.letter.id = "";
		SettingsElement.error.stop.word.id = "";
	}
}

// opposite shift mode
export function changeOppositeShiftModeInUI(value) {
	if ( value === "on" ) {
		SettingsElement.oppositeShift.off.id = "";
		SettingsElement.oppositeShift.on.id = "selected";
	} else {
		SettingsElement.oppositeShift.off.id = "selected";
		SettingsElement.oppositeShift.on.id = "";
	}
}

// minimum speed
export function changeMinimumSpeedInUI(value) {
	if ( value === "on" ) {
		SettingsElement.minimum.speed.off.id = "";
		SettingsElement.minimum.speed.on.id = "selected";
	} else {
		SettingsElement.minimum.speed.off.id = "selected";
		SettingsElement.minimum.speed.on.id = "";
	}
}

// minimum accuracy
export function changeMinimumAccuracyInUI(value) {
	if ( value === "on" ) {
		SettingsElement.minimum.accuracy.off.id = "";
		SettingsElement.minimum.accuracy.on.id = "selected";
	} else {
		SettingsElement.minimum.accuracy.off.id = "selected";
		SettingsElement.minimum.accuracy.on.id = "";
	}
}

// minimum burst
export function changeMinimumBurstInUI(value) {
	if ( value === "fixed" ) {
		SettingsElement.minimum.burst.off.id = "";
		SettingsElement.minimum.burst.option.fixed.id = "selected";
		SettingsElement.minimum.burst.option.flex.id = "";
	} else if ( value === "flex") {
		SettingsElement.minimum.burst.off.id = "";
		SettingsElement.minimum.burst.option.fixed.id = "";
		SettingsElement.minimum.burst.option.flex.id = "selected";
	} else {
		SettingsElement.minimum.burst.off.id = "selected";
		SettingsElement.minimum.burst.option.fixed.id = "";
		SettingsElement.minimum.burst.option.flex.id = "";
	}
}

// text word count
export function changeTextWordCountInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.textWordCount.off.id = "";
		SettingsElement.textWordCount.count.words10.id = "";
		SettingsElement.textWordCount.count.words25.id = "";
		SettingsElement.textWordCount.count.words50.id = "";
		SettingsElement.textWordCount.count.words100.id = "";
		SettingsElement.textWordCount.count.custom.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.textWordCount.off.id = "selected";
		SettingsElement.textWordCount.count.words10.id = "";
		SettingsElement.textWordCount.count.words25.id = "";
		SettingsElement.textWordCount.count.words50.id = "";
		SettingsElement.textWordCount.count.words100.id = "";
		SettingsElement.textWordCount.count.custom.id = "";
	} else if ( value === "10" ) {
		SettingsElement.textWordCount.off.id = "";
		SettingsElement.textWordCount.count.words10.id = "selected";
		SettingsElement.textWordCount.count.words25.id = "";
		SettingsElement.textWordCount.count.words50.id = "";
		SettingsElement.textWordCount.count.words100.id = "";
		SettingsElement.textWordCount.count.custom.id = "";
	}	else if ( value === "25" ) {
		SettingsElement.textWordCount.off.id = "";
		SettingsElement.textWordCount.count.words10.id = "";
		SettingsElement.textWordCount.count.words25.id = "selected";
		SettingsElement.textWordCount.count.words50.id = "";
		SettingsElement.textWordCount.count.words100.id = "";
		SettingsElement.textWordCount.count.custom.id = "";
	} else if ( value === "50" ) {
		SettingsElement.textWordCount.off.id = "";
		SettingsElement.textWordCount.count.words10.id = "";
		SettingsElement.textWordCount.count.words25.id = "";
		SettingsElement.textWordCount.count.words50.id = "selected";
		SettingsElement.textWordCount.count.words100.id = "";
		SettingsElement.textWordCount.count.custom.id = "";
	} else if ( value === "100" ) {
		SettingsElement.textWordCount.off.id = "";
		SettingsElement.textWordCount.count.words10.id = "";
		SettingsElement.textWordCount.count.words25.id = "";
		SettingsElement.textWordCount.count.words50.id = "";
		SettingsElement.textWordCount.count.words100.id = "selected";
		SettingsElement.textWordCount.count.custom.id = "";
	}
}

// timer time
export function changeTimerSecondsInUI(value) {
	if ( value === "custom" ) { // -2 (custom)
		SettingsElement.timer.off.id = "";
		SettingsElement.timer.time.seconds15.id = "";
		SettingsElement.timer.time.seconds30.id = "";
		SettingsElement.timer.time.seconds60.id = "";
		SettingsElement.timer.time.seconds120.id = "";
		SettingsElement.timer.time.custom.id = "selected";
	} else if ( value === "off" ) { // -1 (off)
		SettingsElement.timer.off.id = "selected";
		SettingsElement.timer.time.seconds15.id = "";
		SettingsElement.timer.time.seconds30.id = "";
		SettingsElement.timer.time.seconds60.id = "";
		SettingsElement.timer.time.seconds120.id = "";
		SettingsElement.timer.time.custom.id = "";
	} else if ( value === "15" ) {
		SettingsElement.timer.off.id = "";
		SettingsElement.timer.time.seconds15.id = "selected";
		SettingsElement.timer.time.seconds30.id = "";
		SettingsElement.timer.time.seconds60.id = "";
		SettingsElement.timer.time.seconds120.id = "";
		SettingsElement.timer.time.custom.id = "";
	}	else if ( value === "30" ) {
		SettingsElement.timer.off.id = "";
		SettingsElement.timer.time.seconds15.id = "";
		SettingsElement.timer.time.seconds30.id = "selected";
		SettingsElement.timer.time.seconds60.id = "";
		SettingsElement.timer.time.seconds120.id = "";
		SettingsElement.timer.time.custom.id = "";
	} else if ( value === "60" ) {
		SettingsElement.timer.off.id = "";
		SettingsElement.timer.time.seconds15.id = "";
		SettingsElement.timer.time.seconds30.id = "";
		SettingsElement.timer.time.seconds60.id = "selected";
		SettingsElement.timer.time.seconds120.id = "";
		SettingsElement.timer.time.custom.id = "";
	} else if ( value === "120" ) {
		SettingsElement.timer.off.id = "";
		SettingsElement.timer.time.seconds15.id = "";
		SettingsElement.timer.time.seconds30.id = "";
		SettingsElement.timer.time.seconds60.id = "";
		SettingsElement.timer.time.seconds120.id = "selected";
		SettingsElement.timer.time.custom.id = "";
	}
}

// timer visibility
export function changeTimerVisibilityInUI(value) {
	if ( value === "on" ) {
		SettingsElement.timer.hidden.off.id = "";
		SettingsElement.timer.hidden.on.id = "selected";
	} else {
		SettingsElement.timer.hidden.off.id = "selected";
		SettingsElement.timer.hidden.on.id = "";
	}
}