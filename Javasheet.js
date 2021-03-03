const hu = document.getElementById('hu')
const tbo = document.getElementById('tbo')
const yk = document.getElementById('yk')
const ygn = document.getElementById('ygn')
const id = document.getElementById('id')
const wtf = document.getElementById('wtf')
const cb = document.getElementById('cb')
const sm = document.getElementById('sm')
const pft = document.getElementById('pft')
const mgt = document.getElementById('mgt')
const shh = document.getElementById('shh')
const eh = document.getElementById('eh')

function logButton(button) {
    console.log(`user pressed ` + button);
} 

hu.addEventListener('click', function () {logButton('hu')}, false);
tbo.addEventListener('click', function () {logButton('tbo')}, false);
yk.addEventListener('click', function () {logButton('yk')}, false);
ygn.addEventListener('click', function () {logButton('ygn')}, false);
id.addEventListener('click', function () {logButton('id')}, false);
wtf.addEventListener('click', function () {logButton('wtf')}, false);
cb.addEventListener('click', function () {logButton('cb')}, false);
sm.addEventListener('click', function () {logButton('sm')}, false);
pft.addEventListener('click', function () {logButton('pft')}, false);
mgt.addEventListener('click', function () {logButton('mgt')}, false);
shh.addEventListener('click', function () {logButton('shh')}, false);
eh.addEventListener('click', function () {logButton('eh')}, false);

if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }
