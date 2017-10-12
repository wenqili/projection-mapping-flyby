let offset, offset2, n;


let canvas = function(p) {

	p.setup = function() {
		p.createCanvas(p.windowHeight / 2, p.windowHeight / 2);
		p.background(0);
		p.frameRate(30);
		offset = p.createVector(p.random(1000), p.random(1000));
		offset2 = p.createVector(p.random(1000), p.random(1000));
		n = p.random(1000);

	}

	p.draw = function() {

		p.background(0);
		p.push();
		p.translate(p.width / 2, p.height / 2);

		for (let r = p.height / 2 - 50; r > 0; r -= 15) {

			p.beginShape();

			for (let i = 0; i < 360; i += 0.8) {
				let rad = p.radians(i);
				let x = r * p.cos(rad);
				let y = r * p.sin(rad);
				let x2 = x + p.map(p.noise(x * 0.015 + offset.x, y * 0.015 + offset.y, n), 0, 1, -50, 50);
				let y2 = y + p.map(p.noise(x * 0.015 + offset2.x, y * 0.015 + offset2.y, n), 0, 1, -50, 50);
				p.stroke(255);

				p.strokeWeight(0.1);
				p.line(x2, y, x, y2);
			}

			p.endShape(p.CLOSE);

		}

		p.pop();

		n += 0.005;

	}

}

new p5(canvas, 'canvas0');
new p5(canvas, 'canvas1');
new p5(canvas, 'canvas2');
new p5(canvas, 'canvas3');

window.onload = function() {
	Maptastic("defaultCanvas0", "defaultCanvas1", "defaultCanvas2", "defaultCanvas3");
};
