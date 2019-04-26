import { resetState, state, setLevel } from './state';

export function nextLevel () {
	const newLevel = state.level + 1;
	resetState();
	setLevel(newLevel);
}

