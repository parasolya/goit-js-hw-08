import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageInputEl = document.querySelector('.feedback-form textarea');
const emailInputEl = document.querySelector('.feedback-form input[type=email]');

const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const handleComeBackInput = () => {
    const savedMessage = localStorage.getItem(STORAGE_KEY);          
    if (savedMessage) {  
        formData = JSON.parse(savedMessage);
        emailInputEl.value = formData.email;   
        messageInputEl.value = formData.message
    };
};
handleComeBackInput();

const handleFormSubmit = (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Всі поля мають бути заповнені"); 
        return; 
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);    
};

const handleInput = (event) => {
    formData[event.target.name] = event.target.value;        
    localStorage.setItem(STORAGE_KEY, JSON.stringify({...formData}));    
    
};

formEl.addEventListener('input', throttle(handleInput, 500));

formEl.addEventListener('submit', handleFormSubmit);




