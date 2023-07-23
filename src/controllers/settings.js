import { config } from "../../include/config.js";
import * as SettingsElement from "../elements/setting-element.js";
import * as SettingChangeInConfig from "./setting-change-config.js";
import * as SettingChangeInUI from "../ui/setting-change-ui.js";
import * as TestAreaElements from "../elements/test-element.js";
import { css } from "../../include/constants.js";
import { text, Test } from "../main.js";

// disable button
function disableButton(button) {
	button.id = "";
	button.style.cursor = "not-allowed";
	if ( !button.hasAttribute("disabled") ) {
		button.toggleAttribute("disabled");
	}
}

// enable button
function enableButton(button, selected = false) {
	if ( selected ) button.id = "selected";
	button.style.cursor = "pointer";
	if ( button.hasAttribute("disabled") ) {
		button.removeAttribute("disabled");
	}
}

TestAreaElements.text.addEventListener("click", () => { TestAreaElements.input.focus() });

// keyboard reaction
SettingsElement.keyboardReaction.off.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.static.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.react.addEventListener("click", updateKeyboardReaction);
SettingsElement.keyboardReaction.next.addEventListener("click", updateKeyboardReaction);

// keyboard layout emulate
SettingsElement.KeyboardLayoutEmulate.off.addEventListener("click", updateKeyboardLayoutEmulate);
SettingsElement.KeyboardLayoutEmulate.on.addEventListener("click", updateKeyboardLayoutEmulate);

// website theme
SettingsElement.websiteTheme.light.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.midnight.addEventListener("click", updateWebsiteTheme);
SettingsElement.websiteTheme.dark.addEventListener("click", updateWebsiteTheme);

// dynamic settings
SettingsElement.setting.dynamic.off.addEventListener("click", updateDynamicSettings);
SettingsElement.setting.dynamic.on.addEventListener("click", updateDynamicSettings);

// text input
SettingsElement.textInput.hidden.addEventListener("click", updateTextInput);
SettingsElement.textInput.visible.addEventListener("click", updateTextInput);

// tape mode
SettingsElement.tape.off.addEventListener("click", updateTapeMode);
SettingsElement.tape.mode.letter.addEventListener("click", updateTapeMode);
SettingsElement.tape.mode.word.addEventListener("click", updateTapeMode);

// text highlight
SettingsElement.textHighlight.off.addEventListener("click", updateTextHighlight);
SettingsElement.textHighlight.mode.letter.addEventListener("click", updateTextHighlight);
SettingsElement.textHighlight.mode.word.addEventListener("click", updateTextHighlight);

// flip text highlight
SettingsElement.textHighlight.flip.off.addEventListener("click", updateFlipTextHighlight);
SettingsElement.textHighlight.flip.on.addEventListener("click", updateFlipTextHighlight);

// text underline
SettingsElement.textUnderline.off.addEventListener("click", updateTextUnderline);
SettingsElement.textUnderline.on.addEventListener("click", updateTextUnderline);

// text whitespace
SettingsElement.textWhitespace.off.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.bullet.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.space.addEventListener("click", updateTextWhitespace);
SettingsElement.textWhitespace.type.bar.addEventListener("click", updateTextWhitespace);

// quickend
SettingsElement.strictspace.off.addEventListener("click", updateStrictSpace);
SettingsElement.strictspace.on.addEventListener("click", updateStrictSpace);

// quickend
SettingsElement.quickend.off.addEventListener("click", updateQuickEnd);
SettingsElement.quickend.on.addEventListener("click", updateQuickEnd);

// difficulty
SettingsElement.difficulty.ease.addEventListener("click", updateDifficulty);
SettingsElement.difficulty.expert.addEventListener("click", updateDifficulty);
SettingsElement.difficulty.master.addEventListener("click", updateDifficulty);

// confidence
SettingsElement.confidence.low.addEventListener("click", updateConfidence);
SettingsElement.confidence.high.addEventListener("click", updateConfidence);
SettingsElement.confidence.peak.addEventListener("click", updateConfidence);

// backspace key
SettingsElement.backspace.off.addEventListener("click", updateBackspaceKey);
SettingsElement.backspace.on.addEventListener("click", updateBackspaceKey);

// delete on correct
SettingsElement.backspaceAllowedOnCorrect.off.addEventListener("click", updateBackspaceAllowedOnCorrectWord);
SettingsElement.backspaceAllowedOnCorrect.on.addEventListener("click",  updateBackspaceAllowedOnCorrectWord);

// modifier keys
SettingsElement.modifier.alt.addEventListener("click", updateModifierKey);
SettingsElement.modifier.ctrl.addEventListener("click", updateModifierKey);
SettingsElement.modifier.meta.addEventListener("click", updateModifierKey);

// error
SettingsElement.error.off.addEventListener("click", updateError);
SettingsElement.error.insert.addEventListener("click", updateError);
SettingsElement.error.skip.addEventListener("click", updateError);
SettingsElement.error.replace.addEventListener("click", updateError);

// forgive error
SettingsElement.error.forgive.off.addEventListener("click", updateForgiveError);
SettingsElement.error.forgive.on.addEventListener("click", updateForgiveError);

// stop on error
SettingsElement.error.stop.off.addEventListener("click", updateStopOnError);
SettingsElement.error.stop.letter.addEventListener("click", updateStopOnError);
SettingsElement.error.stop.word.addEventListener("click", updateStopOnError);

// forgive error
SettingsElement.blindMode.off.addEventListener("click", updateBlindMode);
SettingsElement.blindMode.on.addEventListener("click", updateBlindMode);

// opposite shift mode
SettingsElement.oppositeShift.off.addEventListener("click", updateOppositeShiftMode);
SettingsElement.oppositeShift.on.addEventListener("click", updateOppositeShiftMode);

// minimum speed
SettingsElement.minimum.speed.off.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.on.addEventListener("click", updateMinimumSpeed);
SettingsElement.minimum.speed.thresholdInput.addEventListener("input", updateMinimumSpeedThresholdInput);
SettingsElement.minimum.speed.thresholdInput.addEventListener("focusout", updateMinimumSpeedThresholdInputOnFoucsOut);

// minimum accuracy
SettingsElement.minimum.accuracy.off.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.on.addEventListener("click", updateMinimumAccuracy);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("input", updateMinimumAccuracyThresholdInput);
SettingsElement.minimum.accuracy.thresholdInput.addEventListener("focusout", updateMinimumAccuracyThresholdInputOnFoucsOut);

// minimum burst
SettingsElement.minimum.burst.off.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.fixed.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.option.flex.addEventListener("click", updateMinimumBurst);
SettingsElement.minimum.burst.thresholdInput.addEventListener("input", updateMinimumBurstThresholdInput);
SettingsElement.minimum.burst.thresholdInput.addEventListener("focusout", updateMinimumBurstThresholdInputOnFoucsOut);

// text word count
SettingsElement.textWordCount.off.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words10.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words25.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words50.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.words100.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.custom.addEventListener("click", updateTextWordCount);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("input", updateTextWordCountInputField);
SettingsElement.textWordCount.count.customWordsInput.addEventListener("focusout", updateTextWordCountInputFieldOnFoucsOut);

// timer
SettingsElement.timer.off.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds15.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds30.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds60.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.seconds120.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.custom.addEventListener("click", updateTimerSeconds);
SettingsElement.timer.time.customSecondsInput.addEventListener("input", updateTimerSecondsInputField);
SettingsElement.timer.time.customSecondsInput.addEventListener("focusout", updateTimerSecondsInputFieldOnFocusOut);

// timer visibility
SettingsElement.timer.hidden.off.addEventListener("click", updateTimerVisibilityInUI);
SettingsElement.timer.hidden.on.addEventListener("click", updateTimerVisibilityInUI);

// pacecaret speed (s5)
SettingsElement.pacecaret.speed.off.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.last.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.average.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.best.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.custom.addEventListener("click", updatePaceCaretSpeed);
SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.addEventListener("input", updatePaceCaretSpeedInputField);
SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.addEventListener("focusout", updatePaceCaretSpeedInputFieldOnFocusOut);

// font size & weight sliders
SettingsElement.textFontSize.fontSizeInput.addEventListener("input", updateTextFontSize);
SettingsElement.textFontWeight.fontWeightInput.addEventListener("input", updateTextFontWeight);

// primary text color
SettingsElement.textColor.primary.selectorInput.addEventListener("input", updatePrimaryTextColorSelectorInput);
SettingsElement.textColor.primary.textInput.addEventListener("input", updatePrimaryTextColorTextInput);

// secondary text color
SettingsElement.textColor.secondary.selectorInput.addEventListener("input", updateSecondaryTextColorSelectorInput);
SettingsElement.textColor.secondary.textInput.addEventListener("input", updateSecondaryTextColorTextInput);

// warnings
SettingsElement.warnings.capslock.addEventListener("click", updateWarnings);
SettingsElement.warnings.numlock.addEventListener("click", updateWarnings);
SettingsElement.warnings.scrolllock.addEventListener("click", updateWarnings);
SettingsElement.warnings.focusout.addEventListener("click", updateWarnings);

// live stats
SettingsElement.stats.live.speed.addEventListener("click", updateLiveStats);
SettingsElement.stats.live.accuracy.addEventListener("click", updateLiveStats);
SettingsElement.stats.live.burst.addEventListener("click", updateLiveStats);

// text include (s2)
SettingsElement.textInclude.digit.addEventListener("click", updateTextInclude);
SettingsElement.textInclude.punctuation.addEventListener("click", updateTextInclude);

// show decimal places
SettingsElement.stats.usefloats.off.addEventListener("click", updateUseFloats);
SettingsElement.stats.usefloats.on.addEventListener("click", updateUseFloats);

// speed unit
SettingsElement.stats.unit.cpm.addEventListener("click", updateSpeedUnit);
SettingsElement.stats.unit.wpm.addEventListener("click", updateSpeedUnit);

// live stats interval
SettingsElement.stats.calcInterval.word.addEventListener("click", updateLiveStatsCalcInterval);
SettingsElement.stats.calcInterval.keystroke.addEventListener("click", updateLiveStatsCalcInterval);
SettingsElement.stats.calcInterval.second.addEventListener("click", updateLiveStatsCalcInterval);

// caret color
SettingsElement.caret.color.selectorInput.addEventListener("input", updateCaretColorSelectorInput);
SettingsElement.caret.color.textInput.addEventListener("input", updateCaretColorTextInput);

// pacecaret color
SettingsElement.pacecaret.color.selectorInput.addEventListener("input", updatePaceCaretColorSelectorInput);
SettingsElement.pacecaret.color.textInput.addEventListener("input", updatePaceCaretColorTextInput);

// caret style
SettingsElement.caret.off.addEventListener("click", updateCaretStyle);
SettingsElement.caret.style.underscore.addEventListener("click", updateCaretStyle);
SettingsElement.caret.style.line.addEventListener("click", updateCaretStyle);
SettingsElement.caret.style.box.addEventListener("click", updateCaretStyle);
SettingsElement.caret.style.block.addEventListener("click", updateCaretStyle);

// pacecaret style
SettingsElement.pacecaret.off.addEventListener("click", updatePaceCaretStyle);
SettingsElement.pacecaret.style.underscore.addEventListener("click", updatePaceCaretStyle);
SettingsElement.pacecaret.style.line.addEventListener("click", updatePaceCaretStyle);
SettingsElement.pacecaret.style.box.addEventListener("click", updatePaceCaretStyle);
SettingsElement.pacecaret.style.block.addEventListener("click", updatePaceCaretStyle);

// text word length
SettingsElement.textWordLength.off.addEventListener("click", updateTextWordLength);
SettingsElement.textWordLength.short.addEventListener("click", updateTextWordLength);
SettingsElement.textWordLength.medium.addEventListener("click", updateTextWordLength);
SettingsElement.textWordLength.long.addEventListener("click", updateTextWordLength);

// text word length
function updateTextWordLength(evt) {
	if ( !evt.isTrusted ) return;
	if ( (this.value === "off" && config.text.word.length === "off") && (this.value === "short" && config.text.word.length === "short") && (this.value === "medium" && config.text.word.length === "medium") && (this.value === "long" && config.text.word.length === "long") ) return;

}

// keyboard reaction (s4)
function updateKeyboardReaction(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.reaction.off && this.value === "off") || (config.keyboard.reaction.static && this.value === "static") || (config.keyboard.reaction.react && this.value === "react") || (config.keyboard.reaction.next && this.value === "next") ) return;

	SettingChangeInUI.changeKeyboardReactionInUI(this.value);
	SettingChangeInConfig.changeKeyboardReactionInConfig(this.value);

	console.log("keyboardReation:", config.keyboard.reaction.off, config.keyboard.reaction.static, config.keyboard.reaction.react, config.keyboard.reaction.next);
}

// keyboard layout emulate (s2)
function updateKeyboardLayoutEmulate(evt) {
	if ( !evt.isTrusted ) return;
	if ( (config.keyboard.layout.emulate && this.value === "on") || (!config.keyboard.layout.emulate && this.value === "off") ) return;

	SettingChangeInUI.changeKeyboardLayoutEmulateInUI(this.value);
	SettingChangeInConfig.changeKeyboardLayoutEmulateInConfig(this.value);

	console.log("keyboardLayoutEmulate:", !config.keyboard.layout.emulate, config.keyboard.layout.emulate);
}

// dynamic settings (s2)
function updateDynamicSettings(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.website.setting.dynamic && this.value === "on") ||  (!Config.website.setting.dynamic && this.value === "off") ) return;

	SettingChangeInUI.changeDynamicSettingsInUI(this.value);
	SettingChangeInConfig.changeDynamicSettingsInConfig(this.value);

	// debug
	console.log("dynamicSettings:", !Config.website.setting.dynamic, Config.website.setting.dynamic);
}

// website theme (s3)
function updateWebsiteTheme(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.website.theme ) return;

	SettingChangeInUI.changeWebsiteThemeInUI(this.value);
	SettingChangeInConfig.changeWebsiteThemeInConfig(this.value);

	// debug
	console.log("websiteTheme:", Config.website.theme);
}

// text input (s2)
function updateTextInput(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.input.hidden && this.value === "hidden") || (Config.text.input.visible && this.value === "visible") ) return;

	SettingChangeInUI.changeTextInputInUI(this.value);
	SettingChangeInConfig.changeTextInputInConfig(this.value);

	// debug
	console.log("textInput:", Config.text.input.hidden, Config.text.input.visible);
}

// tape mode (s3)
function updateTapeMode(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.tape.off && this.value === "off") || (Config.tape.mode.letter && this.value === "letter") || (Config.tape.mode.word && this.value === "word") ) return;
	
	SettingChangeInUI.changeTapeModeInUI(this.value);
	SettingChangeInConfig.changeTapeModeInConfig(this.value);

	// debug
	console.log("tapeMode:", Config.tape.off, Config.tape.mode.letter, Config.tape.mode.word);
}

// text highlight (s3)
function updateTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.highlight.off && this.value === "off") || (Config.text.highlight.mode.letter && this.value === "letter") || (Config.text.highlight.mode.word && this.value === "word")) return;

	SettingChangeInUI.changeTextHightlightInUI(this.value);
	SettingChangeInConfig.changeTextHightlightInConfig(this.value)

	// debug
	console.log("textHighlight:", Config.text.highlight.off, Config.text.highlight.mode.letter, Config.text.highlight.mode.word);
}

// flip text highlight (s2)
function updateFlipTextHighlight(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.highlight.flip && this.value === "on") || (!Config.text.highlight.flip && this.value === "off") ) return;

	SettingChangeInUI.changeFlipTextHightlightInUI(this.value);
	SettingChangeInConfig.changeFlipTextHightlightInConfig(this.value);

	// flip primary & secondary colors
	const computedStyles = window.getComputedStyle(document.querySelector(":root"));
	let primary = computedStyles.getPropertyValue("--text-primary-color");
	let secondary = computedStyles.getPropertyValue("--text-secondary-color");
	css.style.setProperty("--text-primary-color", secondary);
	css.style.setProperty("--text-secondary-color", primary);

	TestAreaElements.input.focus();

	// debug
	console.log("flipTextHighlight:", !Config.text.highlight.flip, Config.text.highlight.flip);
}

// text underline (s2)
function updateTextUnderline(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.underline && this.value === "on") || (!Config.text.underline && this.value === "off") ) return;

	SettingChangeInUI.changeTextUnderlineInUI(this.value);
	SettingChangeInConfig.changeTextUnderlineInConfig(this.value);

	// debug
	console.log("textUnderline:", !Config.text.underline, Config.text.underline);
}

// text whitespace (s4)
function updateTextWhitespace(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.whitespace.off && this.value === "off") || (Config.text.whitespace.type.bullet && this.value === "bullet") || (Config.text.whitespace.type.space && this.value === "space") || (Config.text.whitespace.type.bar && this.value === "bar") ) return;

	SettingChangeInUI.changeTextWhitespaceInUI(this.value);
	SettingChangeInConfig.changeTextWhitespaceInConfig(this.value);

	// debug
	console.log("whitespace:", Config.text.whitespace.off, Config.text.whitespace.type.space, Config.text.whitespace.type.bullet, Config.text.whitespace.type.bar, Config.text.whitespace.character, Config.text.whitespace.code);
}

// strictspace (s2)
function updateStrictSpace(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.strictspace && this.value === "on") || (!Config.strictspace && this.value === "off")) return;

	SettingChangeInUI.changeStrictSpaceInUI(this.value);
	SettingChangeInConfig.changeStrictSpaceInConfig(this.value);

	// debug
	console.log("strictSpace:", !Config.strictspace, Config.strictspace);
}

// quickend (s2)
function updateQuickEnd(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.quickend && this.value === "on") || (!Config.quickend && this.value === "off")) return;

	SettingChangeInUI.changeQuickEndInUI(this.value);
	SettingChangeInConfig.changeQuickEndInConfig(this.value);

	// debug
	console.log("quickEnd:", !Config.quickend, Config.quickend);
}

// difficulty (s3)
function updateDifficulty(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.difficulty.ease && this.value === "ease") || (Config.difficulty.expert && this.value === "expert") || (Config.difficulty.master && this.value === "master") ) return;

	SettingChangeInUI.changeDifficultyInUI(this.value);
	SettingChangeInConfig.changeDifficultyInConfig(this.value)

	// debug
	console.log("difficulty:", Config.difficulty.ease, Config.difficulty.expert, Config.difficulty.master);
}

// confidence (s3)
function updateConfidence(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.confidence.low && this.value === "low") || (Config.confidence.high && this.value === "high") || (Config.confidence.peak && this.value === "peak") ) return;

	SettingChangeInUI.changeConfidenceInUI(this.value);
	SettingChangeInConfig.changeConfidenceInConfig(this.value);

	// at peak confidence backspacing is not allowed, so backspace is disabled
	if ( this.value === "peak" ) {
		SettingChangeInUI.changeBackspaceKeyInUI("off");
		SettingChangeInConfig.changeBackspaceKeyInConfig("off");

		// at peak confidence backspace is disabled, so user cannot delete at all
		if ( Config.backspace.allowedOnCorrectWord ) {
			SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
			SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
		}
	}

	// going back to low or high confidence from peak confidence (and backspace is disabled)
	if ( ((this.value === "low") || (this.value === "high")) && Config.backspace.off ) {
		SettingChangeInUI.changeBackspaceKeyInUI("on");
		SettingChangeInConfig.changeBackspaceKeyInConfig("on");
	}

	// confidence high prevents user to delete previous word regardless of it was typed correctly or incorrectly
	if ( (this.value === "high") && Config.backspace.allowedOnCorrectWord ) {
		SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
		SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
	}

	// debug
	console.log("confidence:", Config.confidence.low, Config.confidence.high, Config.confidence.peak);
}

// backspace key (s2)
function updateBackspaceKey(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.backspace.off && this.value === "off") || (!Config.backspace.off && this.value === "on") ) return;

	SettingChangeInUI.changeBackspaceKeyInUI(this.value);
	SettingChangeInConfig.changeBackspaceKeyInConfig(this.value);

	// dependencies
	if ( this.value === "off" ) {
		// backspace off means confidence is at peak
		SettingChangeInUI.changeConfidenceInUI("peak");
		SettingChangeInConfig.changeConfidenceInConfig("peak");

		// no concept of deleting on correct if backspace is disabled
		if ( Config.backspace.allowedOnCorrectWord ) {
			SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI("off");
			SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig("off");
		}
	} else {
		// on confidence low backspacing is set to default value of low
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");
	}

	// debug
	console.log("backspace.off:", Config.backspace.off);
}

// deletion not allowed on correct (s2)
function updateBackspaceAllowedOnCorrectWord(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.backspace.allowedOnCorrectWord && this.value === "on") || (!Config.backspace.allowedOnCorrectWord && this.value === "off") ) return;
	
	SettingChangeInUI.changeBackspaceAllowedOnCorrectWordInUI(this.value);
	SettingChangeInConfig.changeBackspaceAllowedOnCorrectWordInConfig(this.value);

	// when deletion of correct words is enabled then disable high/peak confidence mode and enable backspace if its disabled
	if ( Config.backspace.allowedOnCorrectWord && (Config.confidence.high || Config.confidence.peak) ) {
		SettingChangeInUI.changeConfidenceInUI("low");
		SettingChangeInConfig.changeConfidenceInConfig("low");

		if ( Config.backspace.off ) {
			SettingChangeInUI.changeBackspaceKeyInUI("on");
			SettingChangeInConfig.changeBackspaceKeyInConfig("on");	
		}
	}
	
	// debug
	console.log("delete on correct:", !Config.backspace.allowedOnCorrectWord, Config.backspace.allowedOnCorrectWord);
}

// modifier keys (s3)
function updateModifierKey(evt) {
	if ( !evt.isTrusted ) return;
	
	SettingChangeInConfig.changeModifierKeyInConfig();

	// debug
	console.log("modifier:", Config.backspace.modifier.alt, Config.backspace.modifier.ctrl, Config.backspace.modifier.meta);
}

// error (s4)
function updateError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.off && this.value === "off") || (Config.error.insert && this.value === "insert") || (Config.error.skip && this.value === "skip") || (Config.error.replace && this.value === "replace") ) return;

	SettingChangeInUI.changeErrorInUI(this.value);
	SettingChangeInConfig.changeErrorInConfig(this.value);

	// error insert, skip, replace, forgive is disabled, enable stop on letter
	if ( Config.error.off ) {
		if ( !Config.error.stop.letter ) { // disble stop on error
			SettingChangeInUI.changeStopOnErrorInUI("letter");
			SettingChangeInConfig.changeStopOnErrorInConfig("letter");
		}
		if ( Config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
	} else { // either insert or skip or replace is selected
		if ( Config.blind ) { // disable blind mode
			SettingChangeInUI.changeBlindModeInUI("off");
			SettingChangeInConfig.changeBlindModeInConfig("off");
		}
	}
		
	// disable stop on letter when in insert, skip, replace modes
	if ( !Config.error.off && Config.error.stop.letter	) {
		SettingChangeInUI.changeStopOnErrorInUI("off");
		SettingChangeInConfig.changeStopOnErrorInConfig("off");
	}

	// forgive error is not possible in skip & replace
	if ( (Config.error.skip || Config.error.replace) && Config.error.forgive ) {
		// it is possible to enable/disable forgive error in error insert, but not in
		// error skip/replace so forgive error should be disabled
		SettingChangeInUI.changeForgiveErrorInUI("off");
		SettingChangeInConfig.changeForgiveErrorInConfig("off");
	}

	// debug
	console.log("error:", Config.error.off, Config.error.insert, Config.error.skip, Config.error.replace);
}

// forgive error (s2)
function updateForgiveError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.forgive && this.value === "on") || (!Config.error.forgive && this.value === "off") ) return;
	
	SettingChangeInUI.changeForgiveErrorInUI(this.value);
	SettingChangeInConfig.changeForgiveErrorInConfig(this.value);

	// error forgive require error insert, so disable error skip/replace and enable
	// insert, i.e, insertion of errors is necessary in order to forgive them
	if ( Config.error.forgive && !Config.error.insert ) {
		SettingChangeInUI.changeErrorInUI("insert");
		SettingChangeInConfig.changeErrorInConfig("insert");		
	}

	if ( Config.error.forgive && Config.blind ) { // disable blind mode
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}
	
	// debug
	console.log("forgiveError:", !Config.error.forgive, Config.error.forgive);
}

// stop on error (s3)
function updateStopOnError(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.error.stop.off && this.value === "off") || (Config.error.stop.letter && this.value === "letter") || (Config.error.stop.word && this.value === "word") ) return;

	SettingChangeInUI.changeStopOnErrorInUI(this.value);
	SettingChangeInConfig.changeStopOnErrorInConfig(this.value);
	
	// disable blind mode
	if ( (Config.error.stop.letter || Config.error.stop.word) && Config.blind ) {
		SettingChangeInUI.changeBlindModeInUI("off");
		SettingChangeInConfig.changeBlindModeInConfig("off");
	}

	if ( Config.error.stop.letter ) {
		// caret will be stopped before letter so insert, skip, replace, forgive is not possible
		if ( !Config.error.off ) {
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");

			if ( Config.error.forgive ) {
				SettingChangeInUI.changeForgiveErrorInUI("off");
				SettingChangeInConfig.changeForgiveErrorInConfig("off");
			}
		}
	} else if ( Config.error.stop.word ) {
		if ( Config.backspace.off ) {			
			SettingChangeInUI.changeBackspaceKeyInUI("on");
			SettingChangeInConfig.changeBackspaceKeyInConfig("on");	
		}
		if ( Config.error.off ) {
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");			
		}
	} else {
		if ( Config.error.off ) { // set to default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}

	// debug
	console.log("stopOnError:", Config.error.stop.off, Config.error.stop.letter, Config.error.stop.word);
}

// blind mode
function updateBlindMode(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.blind && this.value === "on") || (!Config.blind && this.value === "off") ) return;

	SettingChangeInUI.changeBlindModeInUI(this.value);
	SettingChangeInConfig.changeBlindModeInConfig(this.value);

	// no error handling in blind mode, so disable insert, skip, replace, forgive
	if ( Config.blind ) {
		if ( !Config.error.off ) { // disbale insert, skip, replace
			SettingChangeInUI.changeErrorInUI("off");
			SettingChangeInConfig.changeErrorInConfig("off");
		}
		if ( Config.error.forgive ) { // disable forgive error
			SettingChangeInUI.changeForgiveErrorInUI("off");
			SettingChangeInConfig.changeForgiveErrorInConfig("off");
		}
		if ( !Config.error.stop.off ) { // disable stop on error
			SettingChangeInUI.changeStopOnErrorInUI("off");
			SettingChangeInConfig.changeStopOnErrorInConfig("off");
		}
	} else {
		if ( Config.error.off ) { // default
			SettingChangeInUI.changeErrorInUI("insert");
			SettingChangeInConfig.changeErrorInConfig("insert");
		}
	}
	
	// debug
	console.log("blindMode:", !Config.blind, Config.blind);
}

// opposite shift mode (s2)
function updateOppositeShiftMode(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.oppositeshift && this.value === "on") || (!Config.oppositeshift && this.value === "off") ) return;

	SettingChangeInUI.changeOppositeShiftModeInUI(this.value);
	SettingChangeInConfig.changeOppositeShiftModeInConfig(this.value);

	// debug
	console.log("oppositeShift:", Config.oppositeshift);
}

// minimum speed (s3)
function updateMinimumSpeed(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.speed.off && this.value === "off") || (!Config.minimum.speed.off && this.value === "on") ) return;

	SettingChangeInUI.changeMinimumSpeedInUI(this.value);
	SettingChangeInConfig.changeMinimumSpeedInConfig(this.value);

	// focus in input field when user clicks on "on" button
	if ( this.value === "on" ) {
		SettingsElement.minimum.speed.thresholdInput.focus();
	} else {
		SettingsElement.minimum.speed.thresholdInput.value = "";
	}

	// debug
	console.log("minSpeed:", Config.minimum.speed.off);
}

// minimum speed threashold input (s1)
function updateMinimumSpeedThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn "on" button active if not
	if ( SettingsElement.minimum.speed.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumSpeedInUI("on");
		SettingChangeInConfig.changeMinimumSpeedInConfig("on");
	}
	Config.minimum.speed.threshold = Number(this.value); // update in config

	// debug
	console.log("minSpeedThreshold:", Config.minimum.speed.threshold);
}

// minimum speed threshold input (focusout)
function updateMinimumSpeedThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && SettingsElement.minimum.speed.on.id === "selected" ) {
		SettingChangeInUI.changeMinimumSpeedInUI("off");
		SettingChangeInConfig.changeMinimumSpeedInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minSpeedThreshold)");
}

// minimum accuracy (s3)
function updateMinimumAccuracy(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.accuracy.off && this.value === "off") || (!Config.minimum.accuracy.off && this.value === "on") ) return;

	SettingChangeInUI.changeMinimumAccuracyInUI(this.value);
	SettingChangeInConfig.changeMinimumAccuracyInConfig(this.value);

	// focus in input field when user clicks on "on" button
	if ( this.value === "on" ) {
		SettingsElement.minimum.accuracy.thresholdInput.focus();
	} else {
		SettingsElement.minimum.accuracy.thresholdInput.value = "";
	}

	// debug
	console.log("minAccuracy:", Config.minimum.accuracy.off);
}

// minimum accuracy threashold input (s1)
function updateMinimumAccuracyThresholdInput(evt) {
	if ( !evt.isTrusted ) return;
	
	// turn on "on" button active if not
	if ( SettingsElement.minimum.accuracy.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumAccuracyInUI("on");
		SettingChangeInConfig.changeMinimumAccuracyInConfig("on");
	}
	Config.minimum.accuracy.threshold = Number(this.value);  // update in config

	// debug
	console.log("minAccuracyThreshold:", Config.minimum.accuracy.threshold);
}

// minimum accuracy threshold input (focusout)
function updateMinimumAccuracyThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && SettingsElement.minimum.accuracy.on.id === "selected" ) {
		SettingChangeInUI.changeMinimumAccuracyInUI("off");
		SettingChangeInConfig.changeMinimumAccuracyInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minAccuracyThreshold)");
}

// minimum burst (s3)
function updateMinimumBurst(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.minimum.burst.off && this.value === "off") || (Config.minimum.burst.option.fixed && this.value === "fixed") || (Config.minimum.burst.option.flex && this.value === "flex") ) return;

	SettingChangeInUI.changeMinimumBurstInUI(this.value);
	SettingChangeInConfig.changeMinimumBurstInConfig(this.value);

	// focus in input field when user clicks on flex or fixed buttons
	if ( this.value === "fixed" || this.value === "flex" ) {
		SettingsElement.minimum.burst.thresholdInput.focus();
	} else {
		SettingsElement.minimum.burst.thresholdInput.value = "";
	}

	// debug
	console.log("minBurst:", Config.minimum.burst.off, Config.minimum.burst.option.fixed, Config.minimum.burst.option.flex);
}

// minimum burst threashold input (s1)
function updateMinimumBurstThresholdInput(evt) {
	if ( !evt.isTrusted ) return;

	// turn on "fixed" button active if user starts entering value into input field
	// without clicking on flex or fixed buttons first
	if ( SettingsElement.minimum.burst.off.id === "selected" ) {
		SettingChangeInUI.changeMinimumBurstInUI("fixed");
		SettingChangeInConfig.changeMinimumBurstInConfig("fixed");
	}
	Config.minimum.burst.threshold = Number(this.value);  // update in config

	// debug
	console.log("minBurstThreshold [input]:", Config.minimum.burst.threshold);
}

// minimum burst threshold input (focusout)
function updateMinimumBurstThresholdInputOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field
	if ( (this.value === "" || this.value === "0") && (SettingsElement.minimum.burst.option.fixed.id === "selected" || SettingsElement.minimum.burst.option.flex.id === "selected") ) {
		SettingChangeInUI.changeMinimumBurstInUI("off");
		SettingChangeInConfig.changeMinimumBurstInConfig("off");
		this.value = "";
	}

	// debug
	console.log("INPUT FOCUS-OUT (minBurstThreshold)");
}

// text word count (s5)
function updateTextWordCount(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.text.word.count === -1 && this.value === "off") || (Config.text.word.count === -2 && this.value === "custom") || (Config.text.word.count === 10 && this.value === "10") || (Config.text.word.count === 25 && this.value === "25") || (Config.text.word.count === 50 && this.value === "50") || (Config.text.word.count === 100 && this.value === "100") ) return;

	SettingChangeInUI.changeTextWordCountInUI(this.value);
	SettingChangeInConfig.changeTextWordCountInConfig(this.value);

	// if words mode is disabled then enable default timer mode
	if ( this.value === "off" ) {
		SettingChangeInUI.changeTimerSecondsInUI("60");
		SettingChangeInConfig.changeTimerSecondsInConfig("60");
		return;
	} else { // words mode is enabled so disable timer mode
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// focus in input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.textWordCount.count.customWordsInput.focus();
	} else {
		SettingsElement.textWordCount.count.customWordsInput.value = ""; // clear input field
		Test.restart();
	}

	// debug
	console.log("numberOfWords:", Config.text.word.count);
}

// text word count input (s1)
function updateTextWordCountInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.textWordCount.count.custom.id !== "selected" ) {
		SettingChangeInUI.changeTextWordCountInUI("custom");
		SettingChangeInConfig.changeTextWordCountInConfig("custom");
	}

	 // update in config (i.e, override -2 initial value)
	Config.text.word.count = Number(this.value);

	// debug
	console.log("numberOfWords [input]:", Config.text.word.count);
}

// text word count input - focusout (s1)
function updateTextWordCountInputFieldOnFoucsOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "" || this.value === "0") && (SettingsElement.textWordCount.count.custom.id === "selected") ) {
		
		if ( this.value === "0" ) { // 0 word is not possible
			setTimeout(() => {
				SettingChangeInUI.changeTextWordCountInUI("off");
				SettingChangeInConfig.changeTextWordCountInConfig("off");
				this.value = "";
			}, 250);
		} else {
			SettingChangeInUI.changeTextWordCountInUI("off");
			SettingChangeInConfig.changeTextWordCountInConfig("off");
		}
	}

	if ( this.value === "" ) { // set to default
		SettingChangeInUI.changeTextWordCountInUI("25");
		SettingChangeInConfig.changeTextWordCountInConfig("25");
	}

	// currently more than 150 words is not allowed in custom input field
	if ( Config.text.word.count > 150 ) {
		SettingChangeInUI.changeTextWordCountInUI("100");
		SettingChangeInConfig.changeTextWordCountInConfig("100");
	}

	Test.restart();

	// debug
	console.log("INPUT FOCUS-OUT (numberOfWords)");
}

// timer seconds (s5)
function updateTimerSeconds(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.timer.time === -2 && this.value === "custom") || (Config.stats.timer.time === -1 && this.value === "off") || (Config.stats.timer.time === 15 && this.value === "15") || (Config.stats.timer.time === 30 && this.value === "30") || (Config.stats.timer.time === 60 && this.value === "60") || (Config.stats.timer.time === 120 && this.value === "120") ) return;

	SettingChangeInUI.changeTimerSecondsInUI(this.value);
	SettingChangeInConfig.changeTimerSecondsInConfig(this.value);

		// if timer mode is disabled then enable default words mode
		if ( this.value === "off" ) {
			SettingChangeInUI.changeTextWordCountInUI("25");
			SettingChangeInConfig.changeTextWordCountInConfig("25");
			Test.restart();
			return;
		} else { // timer mode is enabled so disable words mode
			SettingChangeInUI.changeTextWordCountInUI("off");
			SettingChangeInConfig.changeTextWordCountInConfig("off");
		}	

	// focus to input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.timer.time.customSecondsInput.focus();
	} else {
		SettingsElement.timer.time.customSecondsInput.value = "";
	}

	// debug
	console.log("numberOfSeconds:", Config.stats.timer.time);
}

// timer custom seconds input (s1)
function updateTimerSecondsInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.timer.time.custom.id !== "selected" ) {
		SettingChangeInUI.changeTimerSecondsInUI("custom");
		SettingChangeInConfig.changeTimerSecondsInConfig("custom");
	}
	Config.stats.timer.time = Number(this.value); // update in config (i.e, override -2 initial value)

	// debug
	console.log("numberOfSeconds [input]:", Config.stats.timer.time);
}

// timer custom seconds input - focusout (s1)
function updateTimerSecondsInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "") && (SettingsElement.timer.time.custom.id === "selected") ) {
		SettingChangeInUI.changeTimerSecondsInUI("off");
		SettingChangeInConfig.changeTimerSecondsInConfig("off");
	}

	// infinite timer mode
	if ( (SettingsElement.timer.time.custom.id === "selected") && (SettingsElement.timer.time.customSecondsInput.value === "0") ) {
		console.log("infinite timer mode..");
	}

	// debug
	console.log("INPUT FOCUS-OUT (numberOfSeconds)");
}

// timer visibility (s2)
function updateTimerVisibilityInUI(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.timer.hidden && this.value === "on") || (!Config.stats.timer.hidden && this.value === "off") ) return;

	SettingChangeInUI.changeTimerVisibilityInUI(this.value);
	SettingChangeInConfig.changeTimerVisibilityInConfig(this.value);

	// debug
	console.log("timer.hidden:", Config.stats.timer.hidden);
}

// pacecaret speed (s5)
function updatePaceCaretSpeed(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.pacecaret.off && this.value === "off") || (Config.pacecaret.speed.last && this.value === "last") || (Config.pacecaret.speed.average && this.value === "average") || (Config.pacecaret.speed.best && this.value === "best") || (!Config.pacecaret.speed.custom.off && this.value === "custom") ) return;

	SettingChangeInUI.changePaceCaretSpeedInUI(this.value);
	SettingChangeInConfig.changePaceCaretSpeedInConfig(this.value);

	// focus in input field when custom button is clicked, otherwise clear input field
	if ( this.value === "custom" ) {
		SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.focus();
	} else {
		SettingsElement.pacecaret.speed.paceCaretCustomSpeedInput.value = "";
	}

	// debug
	console.log("paceCaretSpeed:", Config.pacecaret.off, Config.pacecaret.speed.last, Config.pacecaret.speed.average, Config.pacecaret.speed.best, Config.pacecaret.speed.custom.off);
}

// pacecaret speed input (s5)
function updatePaceCaretSpeedInputField(evt) {
	if ( !evt.isTrusted ) return;

	// make custom button active if not
	if ( SettingsElement.pacecaret.speed.custom.id !== "selected" ) {
		SettingChangeInUI.changePaceCaretSpeedInUI("custom");
		SettingChangeInConfig.changePaceCaretSpeedInConfig("custom");
	}
	Config.pacecaret.speed.custom.value = Number(this.value); // update in config

	// debug
	console.log("paceCaretSpeed [input]:", Config.pacecaret.speed.custom.value);
}

// pacecaret speed input - focusout (s5)
function updatePaceCaretSpeedInputFieldOnFocusOut(evt) {
	if ( !evt.isTrusted ) return;

	// no value entered in input field (turn off custom button)
	if ( (this.value === "" || this.value === "0") && !Config.pacecaret.speed.custom.off) {

		if ( this.value === "0" ) { // 0wpm speed for pacecaret is not possible
			setTimeout(() => {
				SettingChangeInUI.changePaceCaretSpeedInUI("off");
				SettingChangeInConfig.changePaceCaretSpeedInConfig("off");
				this.value = "";
			}, 250);
		} else {
			SettingChangeInUI.changePaceCaretSpeedInUI("off");
			SettingChangeInConfig.changePaceCaretSpeedInConfig("off");
		}
	}

	// debug
	console.log("INPUT FOCUS-OUT (paceCaretSpeed)");
}

// text font size slider (s1)
function updateTextFontSize(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-font-size", `${this.value}px`);
	SettingsElement.textFontSize.fontSizeDisplayBox.textContent = this.value;
	Config.text.font.size = Number(this.value); // update in config
}

// text font weight slider (s1)
function updateTextFontWeight(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-font-weight", `${this.value}`);
	SettingsElement.textFontWeight.fontWeightDisplayBox.textContent = this.value;
	Config.text.font.weight = Number(this.value); // update in config
}

// primary text color picker input field
function updatePrimaryTextColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-primary-color", this.value);
	SettingsElement.textColor.primary.textInput.value = this.value; // update in text input field for primary color
	Config.text.color.primary = this.value; // update in config
}

// primary text color text input field
function updatePrimaryTextColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-primary-color", this.value);
	SettingsElement.textColor.secondary.selectorInput = this.value; // update in color picker input field for primary color
	Config.text.color.primary = this.value; // update in config
}

// secondary text color picker input field
function updateSecondaryTextColorSelectorInput(evt) { // selector input (color)
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-secondary-color", this.value);
	SettingsElement.textColor.secondary.textInput.value = this.value;  // update in text input field for secondary color
	Config.text.color.secondary = this.value; // update in config
}

// secondary text color text input field
function updateSecondaryTextColorTextInput(evt) { // text input (color)
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--text-secondary-color", this.value);
	SettingsElement.textColor.secondary.selectorInput.value = this.value;
	Config.text.color.secondary = this.value; // update in config
}

// caret color selector input field
function updateCaretColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--caret-color", this.value);
	SettingsElement.caret.color.textInput.value = this.value;
	Config.caret.color = this.value; // update in config
}

// caret color text input field
function updateCaretColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--caret-color", this.value);
	SettingsElement.caret.color.selectorInput.value = this.value;
	Config.caret.color = this.value; // update in config
}

// pacecaret color selector input field
function updatePaceCaretColorSelectorInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--pace-caret-color", this.value);
	SettingsElement.pacecaret.color.textInput.value = this.value;
	Config.pacecaret.color = this.value; // update in config
}

// pacecaret color text input field
function updatePaceCaretColorTextInput(evt) {
	if ( !evt.isTrusted ) return;

	css.style.setProperty("--pace-caret-color", this.value);
	SettingsElement.pacecaret.color.selectorInput.value = this.value;
	Config.pacecaret.color = this.value; // update in config
}

// warnings (s4)
function updateWarnings(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeWarningsInConfig();

	// debug
	console.log("warning:", Config.warnings.capslock, Config.warnings.numlock, Config.warnings.scrolllock, Config.warnings.focusout);
}

// live stats (s3)
function updateLiveStats(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeLiveStatsInConfig();

	// debug
	console.log("liveStats:", Config.stats.live.speed, Config.stats.live.accuracy, Config.stats.live.burst);
}

// text include (s2)
function updateTextInclude(evt) {
	if ( !evt.isTrusted ) return;

	SettingChangeInConfig.changeTextIncludeInConfig();

	// debug
	console.log("textInclude:", Config.text.include.digit, Config.text.include.punctuation);
}

// show decimal places (s2)
function updateUseFloats(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.usefloats && this.value === "on") || (!Config.stats.usefloats && this.value === "off") ) return;

	SettingChangeInUI.changeUseFloatsInUI(this.value);
	SettingChangeInConfig.changeUseFloatsInConfig(this.value);

	// debug
	console.log("useFloats:", !Config.stats.usefloats, Config.stats.usefloats);
}

// speed unit (s2)
function updateSpeedUnit(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.unit.cpm && this.value === "cpm") || (Config.stats.unit.wpm && this.value === "wpm") ) return;

	SettingChangeInUI.changeSpeedUnitInUI(this.value);
	SettingChangeInConfig.changeSpeedUnitInConfig(this.value);

	// debug
	console.log("speedUnit:", Config.stats.unit.cpm, Config.stats.unit.wpm);
}

// live stats interval (s3)
function updateLiveStatsCalcInterval(evt) {
	if ( !evt.isTrusted ) return;
	if ( (Config.stats.calcInterval.word && this.value === "word") || (Config.stats.calcInterval.keystroke && this.value === "keystroke") || (Config.stats.calcInterval.second && this.value === "second") ) return;

	SettingChangeInUI.changeLiveStatsCalcIntervalInUI(this.value);
	SettingChangeInConfig.changeLiveStatsCalcIntervalInConfig(this.value);
	
	// debug
	console.log("liveStatsInterval:", Config.stats.calcInterval.word, Config.stats.calcInterval.keystroke, Config.stats.calcInterval.second);
}

// caret style (s5)
function updateCaretStyle(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.caret.style ) return;
	
	// change caret in text
	for ( const letter of document.getElementsByTagName("letter") ) {
		letter.classList.remove(Config.caret.style);
		letter.classList.add(this.value);
		if ( letter.id === Config.caret.style ) letter.id = this.value;
	}
	TestAreaElements.input.focus();	

	SettingChangeInUI.changeCaretStyleInUI(this.value);
	SettingChangeInConfig.changeCaretStyleInConfig(this.value);

	// debug
	console.log("caret:", Config.caret.style);
}

// pacecaret style (s5)
function updatePaceCaretStyle(evt) {
	if ( !evt.isTrusted ) return;
	if ( this.value === Config.pacecaret.style ) return;

	SettingChangeInUI.changePaceCaretStyleInUI(this.value);
	SettingChangeInConfig.changePaceCaretStyleInConfig(this.value);

	// debug
	console.log("pacecaret:", Config.pacecaret.style);
}

var detclick = false;
const det = document.querySelectorAll("details");

// details tag: on click, close all
det.forEach((detail) => {
	detail.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		det.forEach((dt) => { if ( detail !== dt ) dt.removeAttribute("open"); });
		detclick = true;
	});
});

// window: on click, close all
window.document.addEventListener("click", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( !detclick ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
	detclick = false; // put at last (order matters)
});

// on esc, close all details
window.document.addEventListener("keydown", (evt) => {
	if ( !evt.isTrusted ) return;
	if ( evt.key === "Escape" ) { det.forEach((dt) => { dt.removeAttribute("open"); }); }
});

// debugging
det.forEach((detail) => {
	detail.addEventListener("toggle", (evt) => {
		if ( !evt.isTrusted ) return;
		console.log("details:", detail.classList[0], detail.open);
	});
});

const allDetails = {
	textFontFamily: {
		items: Array.from(document.querySelectorAll("details.textFontFamilyList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textFontFamilyList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textFontFamilyList summary div.text.value.in-use"),
	},
	textWordType: {
		items: Array.from(document.querySelectorAll("details.textWordTypeList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textWordTypeList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textWordTypeList summary div.text.value.in-use"),
	},
	textCapitalization: {
		items: Array.from(document.querySelectorAll("details.textCapitalizationList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.textCapitalizationList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.textCapitalizationList summary div.text.value.in-use"),
	},
	keyboardLanguage: {
		items: Array.from(document.querySelectorAll("details.UIKeyboardLanguageList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.UIKeyboardLanguageList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.UIKeyboardLanguageList summary div.text.value.in-use"),
	},
	keyboardLayout: {
		items: Array.from(document.querySelectorAll("details.UIKeyboardLayoutList div.list > *")),
		SVGs: Array.from(document.querySelectorAll("details.UIKeyboardLayoutList div.list div.item div.symbol svg.tick")),
		inUseTextBox: document.querySelector("details.UIKeyboardLayoutList summary div.text.value.in-use"),
	},
}

// put tick mark on select item
function tickMarkCorrectOption(evt, detail) {
	for ( const svg of allDetails[detail].SVGs ) {
		if ( svg?.parentElement?.parentElement.dataset.value === evt.currentTarget.dataset.value ) {
			svg.parentElement.classList.remove("unmarked");
			svg.classList.add("marked")
		} else {
			svg.parentElement.classList.add("unmarked");
			svg.classList.remove("marked")
		}
	}	
}

// details: textFontFamily
allDetails.textFontFamily.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === Config.text.font.family ) return;

		Config.text.font.family = evt.currentTarget.dataset.value; // update in config
		allDetails.textFontFamily.inUseTextBox.textContent = Config.text.font.family; // update in ui
		css.style.setProperty("--text-font-family", Config.text.font.family);
		tickMarkCorrectOption(evt, "textFontFamily");
		
		TestAreaElements.input.focus();

		// debug
		console.log("font-family:", Config.text.font.family);
	});
});

// details: typeOfWords
allDetails.textWordType.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === Config.text.word.type ) return;

		Config.text.word.type = evt.currentTarget.dataset.value; // update in config
		allDetails.textWordType.inUseTextBox.textContent = Config.text.word.type; // update in ui
		tickMarkCorrectOption(evt, "textWordType");
		
		TestAreaElements.input.focus();

		// debug
		console.log("word-type:", Config.text.word.type);
	});
});

// details: typeOfWords
allDetails.textCapitalization.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		const value = evt.currentTarget.dataset.value;
		if ( (value === "off" && Config.text.capitalize.off ) || (value === "randomly" && Config.text.capitalize.randomly) || (value === "first" && Config.text.capitalize.first) || (value === "everyfirst" && Config.text.capitalize.everyfirst) || (value === "untidy" && Config.text.capitalize.untidy) ) return;

		if ( value === "none" ) {
			Config.text.capitalize.off = true;
			Config.text.capitalize.first = false;
			Config.text.capitalize.everyfirst = false;
			Config.text.capitalize.randomly = false;
			Config.text.capitalize.untidy = false;
		} else if ( value === "randomized" ) {
			Config.text.capitalize.off = true;
			Config.text.capitalize.first = false;
			Config.text.capitalize.everyfirst = false;
			Config.text.capitalize.randomly = false;
			Config.text.capitalize.untidy = false;
		} else if ( value === "first letter" ) {
			Config.text.capitalize.off = true;
			Config.text.capitalize.first = false;
			Config.text.capitalize.everyfirst = false;
			Config.text.capitalize.randomly = false;
			Config.text.capitalize.untidy = false;
		} else if ( value === "all first letters" ) {
			Config.text.capitalize.off = true;
			Config.text.capitalize.first = false;
			Config.text.capitalize.everyfirst = false;
			Config.text.capitalize.randomly = false;
			Config.text.capitalize.untidy = false;
		} else if ( value === "jumbled" ) {
			Config.text.capitalize.off = true;
			Config.text.capitalize.first = false;
			Config.text.capitalize.everyfirst = false;
			Config.text.capitalize.randomly = false;
			Config.text.capitalize.untidy = false;
		}
		allDetails.textCapitalization.inUseTextBox.textContent = evt.currentTarget.dataset.text; // update in ui
		tickMarkCorrectOption(evt, "textCapitalization");
		
		// TestAreaElements.input.focus();

		// debug
		console.log("capitalize:", Config.text.capitalize.off, Config.text.capitalize.firstletter, Config.text.capitalize.allfirstletters, Config.text.capitalize.randomized, Config.text.capitalize.jumbled);
	});
});

// details: keyboardLanguage
allDetails.keyboardLanguage.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === Config.keyboard.language ) return;

		Config.keyboard.language = evt.currentTarget.dataset.value; // update in config
		allDetails.keyboardLanguage.inUseTextBox.textContent = Config.keyboard.language; // update in ui
		tickMarkCorrectOption(evt, "keyboardLanguage");
		
		// debug
		console.log(Config.keyboard.language);
	});
});

// details: keyboardLayout
allDetails.keyboardLayout.items.forEach((item) => {
	item.addEventListener("click", (evt) => {
		if ( !evt.isTrusted ) return;
		if ( evt.currentTarget.dataset.value === Config.keyboard.layout.map ) return;

		Config.keyboard.layout.map = evt.currentTarget.dataset.value; // update in config
		allDetails.keyboardLayout.inUseTextBox.textContent = Config.keyboard.layout.map; // update in ui
		tickMarkCorrectOption(evt, "keyboardLayout");
		
		// debug
		console.log(Config.keyboard.layout.map);
	});
});