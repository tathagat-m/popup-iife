const modalStyles = `<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

input {
  outline: none;
  border: 2px solid #fdd303;
  transition: all 0.3s ease-in-out;
}

.error input {
  border: 2px solid #e10404;
}

.modal-backdrop {
  font-family: "Roboto", sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.4);
  color: #000 !important;
  z-index: 99;
}

.modal-close {
  position: absolute;
  top: 20%;
  right: 14%;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  border: none;
  background-color: #fdd303;
  z-index: 99;
  font-size: 26px;
}

.modal-wrapper {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 65%;
  background-color: #fdd303;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  padding-right: 0px;
}

.modal-wrapper .modal-form {
  position: relative;
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.modal-wrapper .modal-hero-img {
  flex: 0 0 40%;
}

.modal-hero-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modal-form .form-header {
  font-size: 1.5em !important;
  margin: 5px 10px;
}

.modal-form .form-header.line2 {
  font-weight: 400;
  margin-bottom: 20px;
}

.modal-form input[type="text"],
.modal-form input[type="email"] {
  width: 80%;
  height: 40px;
  padding: 5px 20px;
  margin-bottom: 20px;
}

.radio-wrapper {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-left: 6%;
}

.radio-wrapper input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.radio-label {
  cursor: pointer;
}

.error .radio-label {
  color: #e10404;
}

.form-button-submit {
  color: #fff;
  background-color: black;
  width: 90%;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid black;
  margin-bottom: 10px;
  cursor: pointer;
}

.form-footer {
  color: black;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 13px;
}

.form-error {
  opacity: 0;
  position: absolute;
  bottom: 115px;
  text-transform: capitalize;
  font-style: italic;
  color: #e10404;
  transition: opacity 0.3s ease-in-out;
}

.modal-form.error .form-error {
  opacity: 1;
}

@media screen and (max-width: 1025px) {
  .modal-close {
    font-size: 18px;
    top: 26%;
    right: 7%;
  }

  .modal-wrapper {
    width: 90%;
    height: 50%;
    padding: 10px;
    padding-top: 20px;
    font-size: 12px;
  }

  .modal-wrapper .modal-hero-img {
    display: none;
  }

  .modal-wrapper .modal-form {
    flex: 1;
  }

  .modal-form .form-header {
    font-size: 14px !important;
    margin: 3px 5px;
  }

  .modal-form .form-header.line2 {
    margin-bottom: 10px;
  }

  .modal-form input[type="text"],
  .modal-form input[type="email"] {
    width: 80%;
    height: 20px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  .radio-wrapper {
    margin-bottom: 25px;
    padding-left: 5%;
  }

  .radio-wrapper input[type="checkbox"] {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  .radio-label {
    font-size: 11px;
  }

  .form-button-submit {
    height: 35px;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .form-footer {
    color: black;
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 11px;
  }

  .form-error {
    bottom: 78px;
  }
}
</style>`;

const modal = `
<div class="modal-backdrop">
  <button class="modal-close">X</button>
  <div class="modal-wrapper">
    <div class="modal-form">
      <h2 class="form-header line1">GET $10 OFF WHEN YOU SIGN UP FOR</h2>
      <h2 class="form-header line2">SAVINGS, NEWS, UPDATES AND MORE</h2>
      <input
        id="form-name"
        type="text"
        placeholder="your name"
      />
      <input id="form-email" type="email" placeholder="your email" />
      <div class="radio-wrapper">
        <input id="form-newsletter" type="checkbox" />
        <label for="form-newsletter" class="radio-label"
          >Check this box to recieve monthly newsletter.</label
        >
      </div>
      <button class="form-button-submit">SIGN UP</button>
      <a class="form-footer" href="/">Privacy Policy</a>
      <span class="form-error">Please fill the above details.</span>
    </div>
    <div class="modal-hero-img">
      <img
        src="https://useruploads.visualwebsiteoptimizer.com/useruploads/176372/images/339bf06d957c32e3b61f79b563f229af_offerx500.png"
        alt="Christmas Sale"
      />
    </div>
  </div>
</div>
`;

function CloseModal(isCloseBtnClicked, data = null) {
  //calculate cookie expire date
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);

  if (isCloseBtnClicked) {
    document.cookie = `offerModal=closed; expires=${expiryDate.toUTCString()}; path=/`;
  } else {
    document.cookie = `offerModal=${JSON.stringify(
      data
    )}; expires=${expiryDate.toUTCString()}; path=/`;
  }
  const injector = document.getElementById("injector");
  injector?.remove();
}

function InitiateListeners() {
  const closeBtn = document.querySelector(".modal-close");
  const submitBtn = document.querySelector(".form-button-submit");
  const formError = document.querySelector(".form-error");
  const formName = document.getElementById("form-name");
  const formEmail = document.getElementById("form-email");
  const formNewsletter = document.getElementById("form-newsletter");
  const modalForm = document.querySelector(".modal-form");

  closeBtn?.addEventListener("click", () => {
    CloseModal(true);
  });

  //Form Validations
  submitBtn?.addEventListener("click", () => {
    const emailRegex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    const isEmailCorrect = emailRegex.test(formEmail.value);
    if (formName.value && isEmailCorrect && formNewsletter.checked) {
      const data = {
        name: formName.value,
        email: formEmail.value,
        newsletter: formNewsletter.checked,
      };
      modalForm?.classList.remove("error");
      formName.value = "";
      formEmail.value = "";
      formNewsletter.checked = false;
      CloseModal(false, data);
    } else if (!formName.value && isEmailCorrect && formNewsletter.checked) {
      formError.innerText = "Please enter your name.";
      modalForm?.classList.add("error");
    } else if (formName.value && formNewsletter.checked && !isEmailCorrect) {
      formError.innerText = "Please enter a valid email.";
      modalForm?.classList.add("error");
    } else if (formName.value && isEmailCorrect && !formNewsletter.checked) {
      formError.innerText = "Please check the newsletter to continue.";
      modalForm?.classList.add("error");
    } else {
      formError.innerText = "Please fill the above details.";
      modalForm?.classList.add("error");
    }
  });
}

function RenderModal() {
  const injector = document.createElement("div");
  injector.id = "injector";
  injector.innerHTML = modalStyles + modal;
  document.body.appendChild(injector);

  //Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  //Starting event listeners
  InitiateListeners();
}

(function () {
  console.log("%cInitialising the Offer Modal", "color: green");

  //Check if cookie exists
  const cookie = document.cookie;
  if (cookie.includes("offerModal")) {
    console.log("%cOffer Modal Already Shown to this User", "color: #fdd303");
    return;
  }

  //Determine mobile or desktop
  const isMobile = window.innerWidth < 769;
  if (isMobile) {
    setTimeout(() => {
      RenderModal();
    }, 5000);
  } else {
    //detect if the tab is inactive
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !document.getElementById("injector")) {
        RenderModal();
      }
    });
  }
})();
