
var c = document.getElementById("OceanGrid");
var ctx = c.getContext("2d");

// Drawing game grid
var i;
for (i=0; i < 432; i += 36) {
  ctx.lineWidth = (1+((i%10) == 0));
  ctx.moveTo(0,i);
  ctx.lineTo(396, i);
  ctx.stroke();
}
for (i=0; i < 432; i+=36) {
  ctx.lineWidth = (1.0+((i%10) == 0));
  ctx.moveTo(i,0);
  ctx.lineTo(i, 396);
  ctx.stroke();
}
// End drawing game grid
// Filling in alphabet
var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
var positionX = 9
for (i=0; i < 10; i++) {
  ctx.font = '18pt Calibri';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(alpha[i], positionX += 36, 27);
}
// Filling in the Numbers
var positionY = 27
for (i=0; i < 10; i++) {
  ctx.font = '18pt Calibri';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(i + 1, 18, positionY += 36);
}


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

c.addEventListener('mousemove', function(evt) {
  var mousePos = getMousePos(c, evt);
  var message = 'Mouse position: ' + mousePos.x + ' , ' + mousePos.y;
  document.getElementById("cord").innerHTML =  message;
}, false);


//draw a box or an xcd to mark hits,