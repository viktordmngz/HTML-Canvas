const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;    // 60/600
    const h = height * 0.1;   // 60/600
    const gap = width * 0.03; // 20/600
    const ix = width * 0.17;  // 100/600
    const iy = width * 0.17;  // 100/600
    let x,y;

    const offset = width * 0.02 // ~16/600

    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
       x = ix + (w + gap) * i;
       y = iy + (h + gap) * j;

       context.beginPath();
       context.rect(x, y, w, h);
       context.stroke();

       if (Math.random() > 0.5){
        context.beginPath();
        context.rect(x + offset/2, y + offset/2, w - offset, h - offset);
        context.stroke();

       }

      }
    }
  };
};

canvasSketch(sketch, settings);
