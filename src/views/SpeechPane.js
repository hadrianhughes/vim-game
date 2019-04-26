import * as PIXI from 'pixi.js';
import View from './View';

export default function SpeechPane () {
	const self = this;

	View.call(self);

	const PERIOD = 50;

	self.fullText = '';
	let lastChange = Date.now();
	let textLength = 0;

	const getText = () => self.fullText.substr(0, textLength);

	self.textNode = new PIXI.Text(getText(), {
		fontFamily: 'Unifont',
		fontSize: 18,
		fill: 0xFFFFFF,
		wordWrap: true,
		wordWrapWidth: 200,
	});

	self.container.addChild(self.textNode);

	self.update = function () {
		const timeNow = Date.now();

		if (timeNow - lastChange >= PERIOD && textLength < self.fullText.length) {
			textLength += 1;
			self.textNode.text = getText();
			lastChange = timeNow;
		}
	};

	self.reset = function (newText) {
		self.fullText = newText;
		textLength = 0;
	};
};

