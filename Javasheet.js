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

const submit = document.getElementById('submit');

submit.addEventListener('click', function () {console.log('User hit submit')

    const fName = document.getElementById('fname').value;
    console.log(`user's name is ` + fName);

    const birthday = new Date(document.getElementById('birthday').value);
    console.log(`user's birthday is ` + birthday);

    let whichMonth = birthday.getUTCMonth();
    whichMonth++;
    console.log(`whichMonth is now ` + whichMonth);

    const whichDayOfMonth = birthday.getUTCDate();
    console.log(`whichDayOfMonth is now ` + whichDayOfMonth);

    let sign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        sign = "mgt";
        logSign(sign)
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        sign = "id";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        sign = "shh";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        sign = "ygn";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        sign = "pft";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        sign = "yk";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        sign = "sm";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        sign = "tbo";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        sign = "cb";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        sign = "hu";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        sign = "eh";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        sign = "wtf";
    }

  console.log(`sign is now ` + sign);
});
