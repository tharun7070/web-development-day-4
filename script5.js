const form = document.getElementById('myForm');
const displayDiv = document.getElementById('formDataDisplay');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const p = document.createElement('p');
    p.textContent = `Name: ${name}, Email: ${email}, Age: ${age}`;
    displayDiv.appendChild(p);

    form.reset();
});