const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')
const settings = {
  dimensions: [ 1080, 1080 ]
}

// const deg2Rad = (degrees) => {
//   return degrees * Math.PI / 180
// }

// const randomRange = (min,max) => {
//   return Math.random()*(max-min) + min
// }

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#b7b034";

    const cx = random.range(0,width*0.5);
    const cy = random.range(0,height*0.5);

    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;


    const num1 = 36;
    const radius = random.range(0.2,0.8) * width;
    
    for(let i = 0; i < num1; i++){
      const slice = math.degToRad(360 / num1);
      const angle = slice * i;
    
    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);

    // console.log(angle*180/Math.PI,x,y);

    context.save();
    context.translate(x,y);
    context.rotate(-angle);
    context.scale(random.range(0.55,2.5),random.range(0.2,1));

    context.beginPath();
    context.fillRect(-w * 0.5, random.range(0, -h * 0.5),w,h);
    context.restore();


    context.save();
    context.translate(cx,cy);
    context.rotate(-angle);

    context.lineWidth = random.range(10,15);
    context.beginPath();
    context.arc(0,0,radius * random.range(0.7, 1.4),slice*random.range(1,-8),slice*random.range(1,5));
    context.strokeStyle = "#111111";
    context.stroke();

    context.restore();

    // context.beginPath();
    // context.arc(x, y,h,0,Math.PI*2);
    // context.stroke();
  };
};
};

canvasSketch(sketch, settings);
