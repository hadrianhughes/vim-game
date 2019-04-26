import { Modes } from './common';

export const state = {
	level: 0,
	mode: Modes.normal,
	input: '',
	stages: [],
	currentStage: null,
	content: '',
	cursorPosition: 0,
};

const createSetter = (property, type) => value => {
	if (typeof type === 'string') {
		if (typeof value === type || (type === 'array' && Array.isArray(value))) {
			state[property] = value;
		} else {
			throw new TypeError(`createSetter: value "${value}" is not of type "${type}"`);
		}
	} else if (typeof type === 'object' && !Array.isArray(type)) {
		if (Object.keys(type).find(key => type[key] === value)) {
			state[property] = value;
		} else {
			throw new TypeError(`createSetter: value "${value}" is not a member of enum "${type}"`);
		}
	} else {
		throw new TypeError('createSetter: type argument should be a string or an enum (object)');
	}
};

export const setLevel = createSetter('level', 'number');
export const setMode = createSetter('mode', Modes);
export const setInput = createSetter('input', 'string');
export const setStages = createSetter('stages', 'array');
export const setCurrentStage = createSetter('currentStage', 'number');
export const setContent = createSetter('content', 'string');
export const cursorPosition = createSetter('cursorPosition', 'number');

