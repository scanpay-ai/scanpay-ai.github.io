const form = document.querySelector('#contact-form');

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('beta').add({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value
    });
    form.name.value = '';
    form.phone.value = '';
    form.email.value = '';
});