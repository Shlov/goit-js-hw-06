const submitEl = document.querySelector('.login-form');

submitEl.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if (email.value.length && password.value.length) {
        console.log({userEmail: email.value, Password: password.value});
        submitEl.reset();
        return
    }
    alert('Поле вводу не може бути порожнім');
}
