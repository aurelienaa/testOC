
var a_gdNombreInt = document.getElementById("a_gdNombre").value;
var a_gdNombre = a_gdNombreInt+"";
var b_gdNombreInt = document.getElementById("b_gdNombre").value;
var b_gdNombre = b_gdNombreInt+"";

function lg(u) {
  return length(u);
}

var lg_max = lg(a_gdNombre);
var lg_min = lg(b_gdNombre);
var maxString = a_gdNombre;
var minString = b_gdNombre;

if (lg(b_gdNombre) > lg(a_gdNombre)) {
     lg_max = lg(b_gdNombre);
     lg_min = lg(a_gdNombre);
     maxString = b_gdNombre;
     minString = a_gdNombre;
     }

var maxTabChar = [];
var minTabChar = [];
var maxTab = [];
var minTab = [];

for (i = 0; i = lg_max - 1; i++) {
     maxTabChar[i] = maxString.substring(lg_max - 1 - i, lg_max - i);
     maxTab[i] = parseInt(maxTabChar[i]);
     }
for (j = 0; j = lg_min - 1; j++) {
     minTabChar[j] = minString.substring(lg_min - 1 - j, lg_min - j);
     minTab[j] = parseInt(minTabChar[j]);
     console.log(minTab(j));
     }

function f(u) {
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

