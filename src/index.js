import * as PIXI from 'pixi.js';
import * as game from './model/game';
import { subscribe, state } from './model/state';
import SpeechPane from './views/SpeechPane';

// Initialise Pixi.js
const app = new PIXI.Application();
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x303030;

// Set up nodes on screen
const speechPane = new SpeechPane();
speechPane.textNode.x = 20;
speechPane.textNode.y = app.renderer.height - (speechPane.textNode.height * 2);
app.stage.addChild(speechPane.container);

// Update nodes on every tick
app.ticker.add(speechPane.update);

subscribe('currentLineIndex', () => {
	speechPane.reset(state.currentLine);
});

game.nextLevel();

