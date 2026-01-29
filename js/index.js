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


const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // 1. Select the #messages section by id
    const messageSection = document.getElementById('messages');

    // 2. Query messageSection to find the <ul> element
    const messageList = messageSection.querySelector('ul');

    // 3. Create a new list item (li) element
    const newMessage = document.createElement('li');

    // 4. Set the inner HTML with a link for the name and a span for the message
    newMessage.innerHTML = `
        <a href="mailto:${email}">${name}</a>
        <span>${message}</span>
    `;

    // 5. Create a "remove" button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    // 6. Add click listener to the removeButton to delete the message entry
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode; // DOM Traversal to find the <li>
        entry.remove(); // Remove the <li> from the DOM
    });

    // 7. Append the button to the list item, then the list item to the list
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // --- NEW CODE ENDS HERE ---

    messageForm.reset();


});


