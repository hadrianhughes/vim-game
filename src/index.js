import * as PIXI from 'pixi.js';
import * as game from './model/game';
import { state } from './model/state';

const app = new PIXI.Application();

document.body.appendChild(app.view);

// TODO: Remove console.logs
console.log(state.level);
game.nextLevel();
console.log(state.level);

