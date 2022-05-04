const reCaptcha = document.querySelector('.g-recaptcha');
const formSubmitBtn = document.querySelector('.submit');
const formSubmitWrapper = document.querySelector('.formsubmit-wrapper');

const sendMessage = () => {
  const inputName = document.querySelector('.name');
  const inputEmail = document.querySelector('.email');
  const inputPhone = document.querySelector('.phone');
  const inputWebsite = document.querySelector('.website');
  const inputMessage = document.querySelector('.message');
  $.ajax({
    url: 'https://formsubmit.co/ajax/damianr.nubisoft@gmail.com',
    method: 'POST',
    data: {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      website: inputWebsite.value,
      message: inputMessage.value,
    },
    dataType: 'json',
  });
};

function recaptchaCheckSuccess() {
  const formSent = document.querySelector('.form-sent');
  reCaptcha.classList.add('disabled');
  formSent.innerHTML = `<h1 style="margin-top: 200px;">Email has been sent!</h1>`;

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
