const today = new Date();
const name = "Patrick Porcuna"
const thisYear = today.getFullYear();

const footer = document.getElementById('footer');

const copyright = document.createElement('p');

copyright.innerHTML = ` ${name} ${thisYear}`;

footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Azure", "CloudFlare", "Linux", "Python", "Bash", "PowerShell"];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {

    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    const messageSection = document.getElementById('messages');

    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');

    newMessage.innerHTML = `
        <a href="mailto:${email}">${name}</a>
        <span>${message}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode; 
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();


});

fetch('https://api.github.com/users/Porcunanet/repos')
  .then(response => response.json())
  .then(data => {
    const repositories = data;
    console.log(repositories);
    
    // Select the projects section and list
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    
    // Iterate over repositories and display them
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
    // Optionally display an error message to the user
    const projectSection = document.getElementById('projects');
    const errorMessage = document.createElement('p');
    errorMessage.innerText = 'Unable to load projects at this time. Please try again later.';
    errorMessage.style.color = 'red';
    projectSection.appendChild(errorMessage);
  });

