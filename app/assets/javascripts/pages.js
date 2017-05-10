function drawGrid(canvasID) {
  var c = document.getElementById(canvasID);
  var ctx = c.getContext("2d");

  // Drawing game grid
  var i;

  //vertical lines
  for (i=0; i < 386; i += 35) {
    ctx.lineWidth = (1);
    ctx.moveTo(0,i);
    ctx.lineTo(385, i);
    ctx.stroke();
  };

  //horizontal line
  for (i=0; i < 386; i+=35) {
    ctx.lineWidth = (1);
    ctx.moveTo(i,0);
    ctx.lineTo(i, 385);
    ctx.stroke();
  };
  // End drawing game grid
  // Filling in alphabet
  var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  var positionX = 9
  for (i=0; i < 10; i++) {
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(alpha[i], positionX += 35.4, 26);
  };
  // Filling in the Numbers
  var positionY = 27
  for (i=0; i < 10; i++) {
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(i + 1, 18, positionY += 35);
  };


  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  };

  c.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(c, evt);
    var message = canvasID + ' Mouse position: ' + mousePos.x + ' , ' + mousePos.y;
    document.getElementById(canvasID + "Cord").innerHTML =  message;
  }, false);
}

