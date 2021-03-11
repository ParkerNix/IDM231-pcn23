const hu = document.getElementById('hu');
const tbo = document.getElementById('tbo');
const yk = document.getElementById('yk');
const ygn = document.getElementById('ygn');
const id = document.getElementById('id');
const wtf = document.getElementById('wtf');
const cb = document.getElementById('cb');
const sm = document.getElementById('sm');
const pft = document.getElementById('pft');
const mgt = document.getElementById('mgt');
const shh = document.getElementById('shh');
const eh = document.getElementById('eh');

function hitButton(button) {
    console.log(`user pressed ` + button);
    switch (button) {
        case 'hu' :
            zDisplayImg.src = 'images/hurryup.png';
            zTitle.innerHTML = "You Want FAST Food";
            zDateRange.innerHTML = "March 21 to April 19";
            zMoreInfo.innerHTML = "Whatever it is, it better be here within the next five seconds. Waiting will not be on the menu tonight.";
            modal.hidden = !modal.hidden;
        break;
        case 'tbo' :
            zDisplayImg.src = 'images/twoisbetterthanone.png';
            zTitle.innerHTML = "Get Two Very Different Meals";
            zDateRange.innerHTML = "May 21 to June 20";
            zMoreInfo.innerHTML = "Well, there was that one place, and the other place, and you couldn't quite pick, so... more for you!";
            modal.hidden = !modal.hidden;
        break;
        case 'yk' :
            zDisplayImg.src = 'images/yasskween.png';
            zTitle.innerHTML = "Eat a Feast Fit For The Royal Figure You Are";
            zDateRange.innerHTML = "July 23 to September 22";
            zMoreInfo.innerHTML = "Extra does not even begin to describe the lavish dinner you want. You have to treat yourself every now and again, right?";
            modal.hidden = !modal.hidden;
        break;
        case 'ygn' :
            zDisplayImg.src = 'images/yougetnothing.png';
            zTitle.innerHTML = "Pick or You'll Get an Order of Literally Nothing";
            zDateRange.innerHTML = "September 23 to October 22";
            zMoreInfo.innerHTML = "Just choose anything at this point, actually anything. You're going to starve before you ever even order.";
            modal.hidden = !modal.hidden;
        break;
        case 'id' :
            zDisplayImg.src = 'images/iamdisgusted.png';
            zTitle.innerHTML = "Have Something Weird and Not Appealing";
            zDateRange.innerHTML = "November 22 to December 21";
            zMoreInfo.innerHTML = "Where others would totally run and scream for someone to burn it, you proudly sit down, ready to dig in. Bravery at its finest.";
            modal.hidden = !modal.hidden;
        break;
        case 'wtf' :
            zDisplayImg.src = 'images/wtf.png';
            zTitle.innerHTML = "Eat Some Weird Thing Only You'd Make";
            zDateRange.innerHTML = "January 20 to February 18";
            zMoreInfo.innerHTML = "Step one: pull a bunch of random stuff from the pantry. Step two: put 'em together and see what happens.";
            modal.hidden = !modal.hidden;
        break;
        case 'cb' :
            zDisplayImg.src = 'images/chef_boi_ardee.png';
            zTitle.innerHTML = "Make Somethng Yourself";
            zDateRange.innerHTML = "April 20 to May 20";
            zMoreInfo.innerHTML = "Why leave to get something? You can make it right from home! So what if it's not fancy? You're crafty (and too lazy to go out)!";
            modal.hidden = !modal.hidden;
        break;
        case 'sm' :
            zDisplayImg.src = 'images/shtillmad.png';
            zTitle.innerHTML = "How About Something That's NOT That One Place";
            zDateRange.innerHTML = "June 21 to July 22";
            zMoreInfo.innerHTML = "Alright, we know the rant is coming, just let it out. At least we know what to look for this time (and what to avoid...)";
            modal.hidden = !modal.hidden;
        break;
        case 'pft' :
            zDisplayImg.src = 'images/perfecto.png';
            zTitle.innerHTML = "Perfection on a Plate ONLY";
            zDateRange.innerHTML = "August 23 to September 22";
            zMoreInfo.innerHTML = "Okay, if there is so much as a noodle, pepperoni, heck a carrot out of place, consider this meal cancelled.";
            modal.hidden = !modal.hidden;
        break;
        case 'mgt' :
            zDisplayImg.src = 'images/me_gustas_tu.png';
            zTitle.innerHTML = "Go to the Usual Place That You Love";
            zDateRange.innerHTML = "December 22 to January 19";
            zMoreInfo.innerHTML = "Gotta show some love to the classics, couldn't live without 'em. The thought of betraying them is unforgivable.";
            modal.hidden = !modal.hidden;
        break;
        case 'shh' :
            zDisplayImg.src = 'images/shh.png';
            zTitle.innerHTML = "Get Something You Secretly Love";
            zDateRange.innerHTML = "October 23 to November 21";
            zMoreInfo.innerHTML = "For reasons undisclosed, you can never be seen eating it, but you could never just pass up an oppportunity to get some!";
            modal.hidden = !modal.hidden;
        break;
        case 'eh' :
            zDisplayImg.src = 'images/eh.png';
            zTitle.innerHTML = "Get Whatever Everyone Else Wants";
            zDateRange.innerHTML = "February 19 to March 20";
            zMoreInfo.innerHTML = "You don't want to be pushy, so you go with the popular choice. Curry? Sounds good. Ramen? Sure! Crickets? Maybe not everything...";
            modal.hidden = !modal.hidden;
        break;
    }
} 

hu.addEventListener('click', function () {hitButton('hu')}, false);
tbo.addEventListener('click', function () {hitButton('tbo')}, false);
yk.addEventListener('click', function () {hitButton('yk')}, false);
ygn.addEventListener('click', function () {hitButton('ygn')}, false);
id.addEventListener('click', function () {hitButton('id')}, false);
wtf.addEventListener('click', function () {hitButton('wtf')}, false);
cb.addEventListener('click', function () {hitButton('cb')}, false);
sm.addEventListener('click', function () {hitButton('sm')}, false);
pft.addEventListener('click', function () {hitButton('pft')}, false);
mgt.addEventListener('click', function () {hitButton('mgt')}, false);
shh.addEventListener('click', function () {hitButton('shh')}, false);
eh.addEventListener('click', function () {hitButton('eh')}, false);

const submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    console.log('User hit submit');

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
        console.log(`sign is now ` + sign);
        hitButton('mgt');
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        sign = "id";
        console.log(`sign is now ` + sign);
        hitButton('id');
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        sign = "shh";
        console.log(`sign is now ` + sign);
        hitButton('shh');
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        sign = "ygn";
        console.log(`sign is now ` + sign);
        hitButton('ygn');
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        sign = "pft";
        console.log(`sign is now ` + sign);
        hitButton('pft');
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        sign = "yk";
        console.log(`sign is now ` + sign);
        hitButton('yk');
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        sign = "sm";
        console.log(`sign is now ` + sign);
        hitButton('sm');
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        sign = "tbo";
        console.log(`sign is now ` + sign);
        hitButton('tbo');
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        sign = "cb";
        console.log(`sign is now ` + sign);
        hitButton('cb');
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        sign = "hu";
        console.log(`sign is now ` + sign);
        hitButton('hu');
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        sign = "eh";
        console.log(`sign is now ` + sign);
        hitButton('eh');
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        sign = "wtf";
        console.log(`sign is now ` + sign);
        hitButton('wtf');}
);

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  console.log('Modal is closed for buisiness');
  modal.hidden = !modal.hidden;
});

const zDisplayImg = document.getElementById('zDisplayImg');
const zTitle = document.getElementById('zTitle');
const zDateRange = document.getElementById('zDateRange');
const zMoreInfo = document.getElementById('zMoreInfo');
