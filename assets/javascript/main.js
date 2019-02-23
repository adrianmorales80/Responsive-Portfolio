var skills = document.getElementsByClassName('skill');
var skillArray = [];
var currentSkill = 0;
console.log(skills);
console.log(skills.item(1));
/*
skills[currentSkill].style.opacity = 1;
for (var i = 0; i < skills.length; i++) {
    splitLetters(skills[i]);
}

function splitLetters(skill) {
    var content = skill.innerHTML;
    skill.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        skill.appendChild(letter);
        letters.push(letter);
    }
    skillArray.push(letters);
}

function changeSkill() {
    var cs = skillArray[currentSkill];
    var ns = currentSkill == skills.length - 1 ? skillArray[0] :skillArray[currentSkill+1];
    for (var i = 0; i < cs.length; i++) {
        animateLetterOut(cs, i);
    }
    for (var j = 0; j < ns.length; j++) {
        ns[j].className = 'letter-behind';
        ns[0].parentElement.style.opacity = 1;
        animateLetterIn(ns, j);
    }
    currentSkill = (currentSkill == skillArray.length-1) ? 0 : skillArray +1;
}

function animateLetterOut(cs, i) {
    setTimeout(function() {
        cs[i].className = 'letter-out';
    }, i*80);
}

function animateLetterIn(ns, j) {
    setTimeout(function() {
        ns[j].className = 'letter-in';
    }, 340+(j*80));
}

changeSkill();
setInterval(changeSkill, 2000);
*/