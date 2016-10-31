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
    case 4: ycalc = Math.cos(Math.sin(u * u));
    break;
    case 5: ycalc = Math.cos(Math.exp(-u));
    break;
    default: break;
    }
return ycalc;
}

function derivee(f, u) {
var epsilon = 0.001;
return (f(u+epsilon) - f(u))/epsilon;
}




function detposX(objet)
{
    var posX = 0;
    
    do
    {
        posX += objet.offsetLeft;
        objet = objet.offsetParent;
    }
    while( objet != null );
    return posX;
}


function detposY(objet)
{
    var posY = 0;
    
    do
    {
        posY += objet.offsetTop;
        objet = objet.offsetParent;
    }
    while( objet != null );
    return posY;
}




function initx() {

var mx = 0.00;
var my = 0.00;
var ux = 640;

my = detposY(spectre);
mx = detposX(spectre);
mx += 158;
document.getElementById('y').style.top = my+'px';
document.getElementById('x').style.left = mx+'px';
}



function mouvt(dx, dy) {

var ix = 0.00;
var lx = 0.00;
var ux = 640;
var uy = 320.00;
var zx = 0.00;
var theta = 0.00;
var cox = 1.00;
var ax = 1.00;
var bx = 1.00;
var cx = 1.00; 
var Delta = 1.00;
var vx = 1.00;
var wx = 0.00;
var resl = 0;
var resh = 0;
var largx = 0.00; 
var mx = 0;

if (document.body) {
     var larg = (document.body.clientWidth);
     var haut = (document.body.clientHeight);
     } else
     {
     var larg = (window.innerWidth);
     var haut = (window.innerHeight);
     }
 

    // Variation de l abscisse

x = document.getElementById('grapheX').style.left;
x = parseInt(x);
  
window.getDevicePixelRatio = function () {
   var quo = 1.00;
   if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI       !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
       quo = window.screen.systemXDPI / window.screen.logicalXDPI;
       }
       else if (window.devicePixelRatio !== undefined) {
       quo = window.devicePixelRatio;
    }
    return quo;
    }; 

largx = parseFloat(larg); 
// resl = screen.width;
// resh = screen.height;
wx = window.getDevicePixelRatio();
// uy += (largx - 1900.00)*0.025 + 100.00*(wx - 1.00);
// dy += uy;
dy = detposY(spectre);
document.getElementById('x').style.top = dy+'px';
mx = detposX(spectre);
ux = mx;
// ux += 0.28*(largx - 1900);
  
if (x <= ux + 9) { 
    x = ux; 
  document.getElementById('x').style.left = ux+'px';
  if (dx > 0) {
          document.getElementById('x').style.left = ux+dx+'px';
        }
    } else {
      if (x >= (ux + 586)) {
          x = ux + 595;
      document.getElementById('x').style.left = ux + 595+'px';
      if (dx < 0) {
          document.getElementById('x').style.left = ux + 595+dx+'px';
        }
        } 
    else {
        x = parseInt(document.getElementById('x').style.left);
      document.getElementById('x').style.left = x+dx+'px';
        } 
      
    }

    // Calculs de vitesse et eloignement en fonction de la longueur d onde.
  
x = document.getElementById('x').style.left;
x = parseInt(x);
theta = document.getElementById("angle").value;
cox = Math.cos(theta*3.14159265/180.00);
lx = 380.00 + (400.00/595.00)*(x - ux);
zx = (lx / 486.00) - 1.00;
ax = (1.00+zx)*(1.00+zx);
ax = (1.00+zx)*(1.00+zx) + cox*cox;

bx = 2*cox;

cx = -(zx+2.00)*zx;
cx = -(zx+2.00)*zx;

Delta = bx*bx-4.00*ax*cx;
if (Delta >= 0.00) {
    vx = (Math.sqrt(Delta)-bx)/(2.00*ax);
    ix = parseInt(lx); 
    if (vx > 0.00) {
        texte1 = "La longueur d'onde observ&eacute;e est " + ix + " nm, le d&eacute;calage spectral, z = " + zx.toFixed(3) + ", et la vitesse d'&eacute;loignement de la galaxie est donc, selon l'effet Doppler relativiste,  v = " + vx.toFixed(3) + " * c = " + (300000.00*vx).toFixed(2) + " km/s."; 
        texte2 = "Suivant l'expansion de l'Univers, la distance de la galaxie avec la voie lact&eacute;e s'&eacute;tablit selon la loi de Hubble (d = v / Ho, où Ho : constante de Hubble), d = " + (4285.71*vx).toFixed(2) + " Mpc, soit d = " + (3.2616*4.28571*vx).toFixed(2) + " milliards d'ann&eacute;es-lumi&egrave;re.";
      } else {
      texte1 = "La longueur d'onde observ&eacute;e est " + ix + " nm, le d&eacute;calage spectral, z = " + zx.toFixed(3) + ", et la vitesse de rapprochement de la galaxie est donc, selon l'effet Doppler relativiste, v = " + -vx.toFixed(3) + " * c = " + -(300000.00*vx).toFixed(2) + " km/s.";
      texte2 = "";
      }
    } else {
  texte1 = "";
  texte2 = "  Pas de solution par cette m&eacute;thode de calculs.";
  }   
 
document.getElementById("londe").innerHTML = texte1 + detpos(spectre);
document.getElementById("dgal").innerHTML = texte2 + detpos(x);
}




function draw() { 
  // Largeur et hauteur en pixels
  var W=400, H=300
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
