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
