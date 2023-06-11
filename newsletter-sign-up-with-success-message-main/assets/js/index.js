
const submitEmailButton = document.querySelector('.email_form-submit_btn'); 
const successButton = document.querySelector('.success_btn');

const signupModal = document.querySelector('#signup_modal'); 
const successModal = document.querySelector('#success_modal'); 


submitEmailButton.addEventListener('click', (event) => {
    if (signupModal !== null) { 
        signupModal.style.visibility = 'hidden';
        successModal.style.visibility = 'visible';
    }
});


successButton.addEventListener("click", (event) => {
    if(successModal !== null) {
        successModal.style.visibility = 'hidden';
        signupModal.style.visibility = 'visible';
    }
});