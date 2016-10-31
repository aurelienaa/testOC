function f(u) {
var expr = document.getElementById("indice").value;
expr = parseInt(expr);
var ycalc = 0.00; 
switch (expr) {
    case 1: ycalc = Math.cos(u);
    break;
    case 2: ycalc = Math.exp(u);
    break;
    case 3: ycalc = Math.sin(u*u);
    break;
    case 4: ycalc = Math.cos(3*u);
    break;
    case 5: ycalc = Math.cos(Math.exp(-u));
    break;
    default: break;
    }
return ycalc;
}


function draw() { 
  // Largeur et hauteur en pixels
  var W=400;
  var H=300;
  var canvas = document.getElementById("graphe");
  canvas.width=W; canvas.height=H;
  var cvs = canvas.getContext("2d");
  var pixx=50;
  var pixy=100;

  cvs.strokeStyle = "grey";
  cvs.moveTo(0,160);
  cvs.lineTo(400,160);
  cvs.moveTo(200,0);
  cvs.lineTo(200,300);
  cvs.stroke();

  // tracé du quadrillage
  cvs.strokeStyle = "#876";
  cvs.beginPath();
  cvs.lineWidth=0.5;

  // lignes horizontales
  for(var i=0; i<=5*H/pixy; i++) {
    cvs.moveTo(0, H-0.2*pixy*i)
    cvs.lineTo(W, H-0.2*pixy*i)
  }

  // lignes verticales
  for(var i=0; i<=5*W/pixx; i++) {
    cvs.moveTo(0.2*pixx*i, H);
    cvs.lineTo(0.2*pixx*i, 0);
  }
  cvs.stroke();

  // tracé de la fonction
   
    cvs.strokeStyle = "#ffddaa";
    cvs.lineWidth=1.5;
    cvs.beginPath();
    x=0.00;
    var y = f(0.00);
    cvs.moveTo(-200, -150+H-y*pixy);
    for(x=-W/(2*pixx); x<=W/(2*pixx); x+=1/pixx) {
      y = f(x);
      cvs.lineTo(200+x*pixx, -150+H-y*pixy);

    /* var u1=eval(ff)
    cvs.moveTo(-200, H-u1*pix)
    for(x=-W/(2*pix); x<=W/(2*pix); x+=1/pix) {
      u1=eval(ff)
      cvs.lineTo(200+x*pix, H-u1*pix)
    } */
  }
  // cvs.closePath();
  cvs.stroke();
}

/* tracer(g);

function tracer(h)
{
/* var b = document.forms[0].formule1.value;
if (b !="") {var f = "7+" + b}
else {var f = "0"}
var c = document.forms[0].formule2.value;
if (c !="") {var ff = "7+" + c}
else {var ff = "0"}; 
draw(h);
} */

// fonction


/* function trace() {
  graphique();
  draw(g);
} */
