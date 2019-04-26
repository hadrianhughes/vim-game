import { Modes } from '../common';

export const initialState = {
	level: 0,
	mode: Modes.normal,
	input: '',
	stages: [],
	currentLineIndex: 0,
	content: '',
	cursorPosition: 0,
	get currentLine () {
		if (this.stages[this.currentLineIndex] && this.stages[this.currentLineIndex].line) {
			return this.stages[this.currentLineIndex].line;
		}

		return undefined;
	},
};

const subscribers = {};

export let state = initialState;

export function resetState () {
	state = initialState;
};

const createSetter = (property, type) => value => {
	let successful = false;
	if (typeof type === 'string') {
		if (typeof value === type || (type === 'array' && Array.isArray(value))) {
			successful = true;
		} else {
			throw new TypeError(`createSetter: value "${value}" is not of type "${type}"`);
		}
	} else if (typeof type === 'object' && !Array.isArray(type)) {
		if (Object.keys(type).find(key => type[key] === value)) {
			successful = true;
		} else {
			throw new TypeError(`createSetter: value "${value}" is not a member of enum "${type}"`);
		}
	} else {
		throw new TypeError('createSetter: type argument should be a string or an enum (object)');
	}

	if (successful) {
		state[property] = value;
		if (subscribers[property]) {
			subscribers[property].forEach(fn => fn(state[property]));
		}
	}
};

export function subscribe (property, fn) {
	if (typeof fn === 'function' && typeof property === 'string') {
		if (subscribers[property]) {
			subscribers[property].push(fn);
		} else {
			subscribers[property] = [fn];
		}
	}
}

export const setLevel = createSetter('level', 'number');
export const setMode = createSetter('mode', Modes);
export const setInput = createSetter('input', 'string');
export const setStages = createSetter('stages', 'array');
export const setCurrentStage = createSetter('currentLineIndex', 'number');
export const setContent = createSetter('content', 'string');
export const cursorPosition = createSetter('cursorPosition', 'number');

