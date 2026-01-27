const today = new Date();
const name = "Patrick Porcuna"
const thisYear = today.getFullYear();

const footer = document.getElementById('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; ${name} ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub"];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
