/* Contact page: simple client-side validation demo.
   No backend is wired up — this only simulates a submission. */

function initContactForm(){
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    let valid = true;

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    const showError = (input, show) => {
      const err = input.parentElement.querySelector(".field-error");
      if (err) err.classList.toggle("show", show);
    };

    if (!name.value.trim()){
      showError(name, true); valid = false;
    } else showError(name, false);

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailOk){
      showError(email, true); valid = false;
    } else showError(email, false);

    if (!message.value.trim() || message.value.trim().length < 10){
      showError(message, true); valid = false;
    } else showError(message, false);

    if (!valid){
      if (status){ status.textContent = "Please fix the highlighted fields."; status.classList.add("show"); status.style.borderColor = "var(--wire-red)"; status.style.color = "var(--wire-red)"; }
      return;
    }

    if (status){
      status.style.borderColor = "var(--signal-teal)";
      status.style.color = "var(--signal-teal)";
      status.textContent = "Message received. This is a demo form, so nothing was actually sent — but in a live version, our editors would reply within two business days.";
      status.classList.add("show");
    }
    form.reset();
  });
}

document.addEventListener("chrome:ready", initContactForm);
