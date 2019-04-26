import { resetState, state, setLevel, setStages } from './state';
import levels from './data/levels';

export function nextLevel () {
	const newLevel = state.level + 1;
	resetState();
	setLevel(newLevel);

	const levelData = levels[newLevel - 1];
	if (levelData) {
		setStages(levelData.stages);
	}
}

