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
            imgModal.src = 'images/hurryup.png';
            title.innerHTML = "You Want FAST Food";
            dateRange.innerHTML = "March 21 to April 19";
            description.innerHTML = "Whatever it is, it better be here within the next five seconds. Waiting will not be on the menu tonight.";
            modal.hidden = !modal.hidden;
        break;
        case 'tbo' :
            imgModal.src = 'images/twoisbetterthanone.png';
            title.innerHTML = "Get Two Very Different Meals";
            dateRange.innerHTML = "May 21 to June 20";
            description.innerHTML = "Well, there was that one place, and the other place, and you couldn't quite pick, so... more for you!";
            modal.hidden = !modal.hidden;
        break;
        case 'yk' :
            imgModal.src = 'images/yasskween.png';
            title.innerHTML = "Eat a Feast Fit For The Royal Figure You Are";
            dateRange.innerHTML = "July 23 to September 22";
            description.innerHTML = "Extra does not even begin to describe the lavish dinner you want. You have to treat yourself every now and again, right?";
            modal.hidden = !modal.hidden;
        break;
        case 'ygn' :
            imgModal.src = 'images/yougetnothing.png';
            title.innerHTML = "Pick or You'll Get an Order of Literally Nothing";
            dateRange.innerHTML = "September 23 to October 22";
            description.innerHTML = "Just choose anything at this point, actually anything. You're going to starve before you ever even order.";
            modal.hidden = !modal.hidden;
        break;
        case 'id' :
            imgModal.src = 'images/iamdisgusted.png';
            title.innerHTML = "Have Something Weird and Not Appealing";
            dateRange.innerHTML = "November 22 to December 21";
            description.innerHTML = "Where others would totally run and scream for someone to burn it, you proudly sit down, ready to dig in. Bravery at its finest.";
            modal.hidden = !modal.hidden;
        break;
        case 'wtf' :
            imgModal.src = 'images/wtf.png';
            title.innerHTML = "Eat Some Weird Thing Only You'd Make";
            dateRange.innerHTML = "January 20 to February 18";
            description.innerHTML = "Step one: pull a bunch of random stuff from the pantry. Step two: put 'em together and see what happens.";
            modal.hidden = !modal.hidden;
        break;
        case 'cb' :
            imgModal.src = 'images/chef_boi_ardee.png';
            title.innerHTML = "Make Somethng Yourself";
            dateRange.innerHTML = "April 20 to May 20";
            description.innerHTML = "Why leave to get something? You can make it right from home! So what if it's not fancy? You're crafty (and too lazy to go out)!";
            modal.hidden = !modal.hidden;
        break;
        case 'sm' :
            imgModal.src = 'images/shtillmad.png';
            title.innerHTML = "How About Something That's NOT That One Place";
            dateRange.innerHTML = "June 21 to July 22";
            description.innerHTML = "Alright, we know the rant is coming, just let it out. At least we know what to look for this time (and what to avoid...)";
            modal.hidden = !modal.hidden;
        break;
        case 'pft' :
            imgModal.src = 'images/perfecto.png';
            title.innerHTML = "Perfection on a Plate ONLY";
            dateRange.innerHTML = "August 23 to September 22";
            description.innerHTML = "Okay, if there is so much as a noodle, pepperoni, heck a carrot out of place, consider this meal cancelled.";
            modal.hidden = !modal.hidden;
        break;
        case 'mgt' :
            imgModal.src = 'images/me_gustas_tu.png';
            title.innerHTML = "Go to the Usual Place That You Love";
            dateRange.innerHTML = "December 22 to January 19";
            description.innerHTML = "Gotta show some love to the classics, couldn't live without 'em. The thought of betraying them is unforgivable.";
            modal.hidden = !modal.hidden;
        break;
        case 'shh' :
            imgModal.src = 'images/shh.png';
            title.innerHTML = "Get Something You Secretly Love";
            dateRange.innerHTML = "October 23 to November 21";
            description.innerHTML = "For reasons undisclosed, you can never be seen eating it, but you could never just pass up an oppportunity to get some!";
            modal.hidden = !modal.hidden;
        break;
        case 'eh' :
            imgModal.src = 'images/eh.png';
            title.innerHTML = "Get Whatever Everyone Else Wants";
            dateRange.innerHTML = "February 19 to March 20";
            description.innerHTML = "You don't want to be pushy, so you go with the popular choice. Curry? Sounds good. Ramen? Sure! Crickets? Maybe not everything...";
            modal.hidden = !modal.hidden;
        break;
    }
} 

hu.addEventListener('click', function () {hitButton('hu');});
tbo.addEventListener('click', function () {hitButton('tbo');});
yk.addEventListener('click', function () {hitButton('yk');});
ygn.addEventListener('click', function () {hitButton('ygn');});
id.addEventListener('click', function () {hitButton('id');});
wtf.addEventListener('click', function () {hitButton('wtf');});
cb.addEventListener('click', function () {hitButton('cb');});
sm.addEventListener('click', function () {hitButton('sm');});
pft.addEventListener('click', function () {hitButton('pft');});
mgt.addEventListener('click', function () {hitButton('mgt');});
shh.addEventListener('click', function () {hitButton('shh');});
eh.addEventListener('click', function () {hitButton('eh');});

const submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    console.log('User hit submit');

    const fName = document.getElementById('fname').value;
    console.log(`user's name is ` + fName);
    const name = document.getElementById('name');
    name.innerHTML = fName + `, `;

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
    });

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', function() {
  console.log('Modal is closed for buisiness');
  modal.hidden = !modal.hidden;
});

const imgModal = document.getElementById('imgModal');
const title = document.getElementById('title');
const dateRange = document.getElementById('dateRange');
const description = document.getElementById('description');

const help = document.getElementById('help');
help.addEventListener('click', function() {
    console.log('Help modal opened, wow!');
    helpModal.hidden = !helpModal.hidden;
});

const helpModal = document.getElementById('helpModal');
const closeHelpModal = document.getElementById('closeHelpModal');
closeHelpModal.addEventListener('click', function() {
  console.log('Help modal closed, sorry folks');
  helpModal.hidden = !helpModal.hidden;
});