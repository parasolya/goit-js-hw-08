import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageInputEl = document.querySelector('.feedback-form textarea');
const emailInputEl = document.querySelector('.feedback-form input[type=email]');

const STORAGE_KEY = "feedback-form-state";
const formData = {};

const handleComeBackInput = () => {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const parsedMessage = JSON.parse(savedMessage);
    
    if (savedMessage) {
        emailInputEl.value = parsedMessage.email;
        console.log(emailInputEl.value);
        messageInputEl.value = parsedMessage.message;
    };
};
handleComeBackInput();


const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);    
};

const handleInput = (event) => {
    formData[event.target.name] = event.target.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
};

formEl.addEventListener('input', throttle(handleInput, 500));

formEl.addEventListener('submit', handleFormSubmit);


