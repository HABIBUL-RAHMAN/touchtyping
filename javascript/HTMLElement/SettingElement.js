export const caret = {
	off: document.querySelector("caret off"),
	underline: document.querySelector("caret underline"),
	line: document.querySelector("caret line"),
	box: document.querySelector("caret box"),
	block: document.querySelector("caret block"),
};

export const pacecaret = {
	off: document.querySelector("pacecaret off"),
	underline: document.querySelector("pacecaret underline"),
	line: document.querySelector("pacecaret line"),
	box: document.querySelector("pacecaret box"),
	block: document.querySelector("pacecaret block"),
};

export const highlight = {
	off: document.querySelector("highlight off"),
	mode: {
		letter: document.querySelector("highlight letter"),
		word: document.querySelector("highlight	word"),
	}
}

export const fliphighlightcolor = {
	off: document.querySelector("fliphighlightcolor off"),
	on: document.querySelector("fliphighlightcolor on"),
}

export const backspace = {
	off: document.querySelector("backspace off"),
	on: document.querySelector("backspace on"),
	modifier: {
		alt: document.querySelector("modifier alt"),
		ctrl: document.querySelector("modifier ctrl"),
		meta: document.querySelector("modifier mmeta"),
	}
}

export const difficulty = {
	beginner: document.querySelector("difficulty beginner"),
	expert: document.querySelector("difficulty expert"),
	master: document.querySelector("difficulty master"),
}

export const tape = {
	off: document.querySelector("tape off"),
	on: document.querySelector("tape on"),
}

export const reset = document.querySelector(`button[type="reset"]`);
export const fullscreenToggleButton = document.querySelector(`button[type="fullscreen"]`);
export const enterFullscreen = document.querySelector("button i.fa-expand");
export const exitFullscreen = document.querySelector("button i.fa-compress");