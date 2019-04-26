import * as PIXI from 'pixi.js';
import * as game from './model/game';
import { state } from './model/state';

const app = new PIXI.Application();

document.body.appendChild(app.view);

game.nextLevel();

