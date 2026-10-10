const nameField = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

const name_error = document.getElementById('name-error');
const email_error = document.getElementById('email-error');
const message_error = document.getElementById('message-error');

form.addEventListener('submit', (e) => {

  
  if (nameField.value.trim() === '') {
    e.preventDefault();
    name_error.innerHTML = "Name is required";
  } else {
    name_error.innerHTML = "";
  }

  
  const email_check = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === '' || !email_check.test(email.value)) {
    e.preventDefault();
    email_error.innerHTML = "Valid email is required";
  } else {
    email_error.innerHTML = "";
  }

  
  if (message.value.trim() === '') {
    e.preventDefault();
    message_error.innerHTML = "Message is required";
  } else {
    message_error.innerHTML = "";
  }         

});
