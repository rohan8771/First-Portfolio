const navigationList = document.querySelector('.navigation__list');
const navigationListItems = navigationList.children;
const skillsTimesCurrent = document.querySelector('.skills__times-current');
const skillsTimesWithTmeAndExperience = document.querySelector('.skills__times-withTimeAndExperience');
const fillList = document.querySelectorAll('.fill');
const hamburger = document.querySelector('.hamburger')

let currentSelectedNavigationItem = navigationListItems[0];

navigationList.addEventListener('click', function(e) {
    const navigationListItemEl = e.target.closest('.navigation__list-item');
    if(navigationListItemEl) {
        navigationListItemEl.classList.add('selected');
        currentSelectedNavigationItem.classList.remove('selected');
        currentSelectedNavigationItem = navigationListItemEl;
    }
});


let currentSelectedSkillsTimes = skillsTimesCurrent;

skillsTimesCurrent.addEventListener('click', function(){ 
    if(currentSelectedSkillsTimes != skillsTimesCurrent) {
        currentSelectedSkillsTimes.classList.remove('selected-2');
        skillsTimesCurrent.classList.add('selected-2');
        currentSelectedSkillsTimes = skillsTimesCurrent;

        //Go over all the fills, and reduce their widths by 30%
        for(let i = 0; i < fillList.length; i++) {
            console.log(fillList[i]);
            let fill = fillList[i].style.width;
            fill = fill.slice(0, 2);
            fill = Number(fill) - 45;
            fill = String(fill) + "%";
            fillList[i].style.width = fill;
        }
        
    }
});

skillsTimesWithTmeAndExperience.addEventListener('click', function(){ 
    if(currentSelectedSkillsTimes != skillsTimesWithTmeAndExperience) {
        currentSelectedSkillsTimes.classList.remove('selected-2');
        skillsTimesWithTmeAndExperience.classList.add('selected-2');
        currentSelectedSkillsTimes = skillsTimesWithTmeAndExperience;

        //Go over all the fills, and increase their widths by 30%
        for(let i = 0; i < fillList.length; i++) {
            console.log(fillList[i]);
            let fill = fillList[i].style.width;
            console.log(fill);
            fill = fill.slice(0, 2);
            console.log(fill);
            fill = Number(fill) + 45;
            fill = String(fill) + "%";
            console.log(fill);
            fillList[i].style.width = fill;
        }
    }
});

// let navigation__listDisplaying = false;
// hamburger.addEventListener('click', function() {
//     if(navigation__listDisplaying) {
//         navigationList.style.display = "none";
//         navigation__listDisplaying = false;
//     }
//     else {
//         navigationList.style.display = "block";
//         navigation__listDisplaying = true;
//     }
// });

hamburger.addEventListener('click', () => {
    navigationList.classList.toggle('show');
});