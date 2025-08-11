const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (name === '') {
        alert('Name cannot be empty.');
        return;
    }
    if (!email.includes('@')) {
        alert('Email must include @.');
        return;
    }
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 60) {
        alert('Age must be a number between 18 and 60.');
        return;
    }
    alert('Form is valid!');
});