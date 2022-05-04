const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputPhone = document.querySelector('.phone');
const inputWebsite = document.querySelector('.website');
const inputMessage = document.querySelector('.message');
const formSubmitBtn = document.querySelector('.submit');
const reCaptcha = document.querySelector('.g-recaptcha');
const sendMessage = () => {
  formInputs = {
    name: inputName.value,
    email: inputEmail.value,
    phone: inputPhone.value,
    website: inputWebsite.value,
    message: inputMessage.value,
  };
  $.ajax({
    url: 'https://formsubmit.co/ajax/damianr.nubisoft@gmail.com',
    method: 'POST',
    data: {
      name: formInputs.name,
      email: formInputs.email,
      phone: formInputs.phone,
      website: formInputs.website,
      message: formInputs.message,
    },
    dataType: 'json',
  });
};
const formSubmitWrapper = document.querySelector('.formsubmit-wrapper');

function recaptchaCheckSuccess() {
  const formSent = document.querySelector('.form-sent');
  reCaptcha.classList.add('disabled');
  formSent.innerHTML = `<h1 style="margin-top: 200px;">Email has been sent!</h1>
`;
  sendMessage();

  setTimeout(() => {
    formSent.innerHTML = ``;
  }, 3000);
  setTimeout(() => {
    formSubmitWrapper.classList.remove('disabled');
  }, 3500);
}

const openReCaptchaCheck = () => {
  formSubmitWrapper.classList.add('disabled');
  reCaptcha.classList.remove('disabled');
};

formSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openReCaptchaCheck();
});
