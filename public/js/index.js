// index.js

// Wrap your code in an event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
  };

  const showAlert = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
  };

  const login = async (email, password) => {
    try {
      const result = await axios({
        method: 'POST',
        url: 'https://login-api-b6fw.onrender.com/api/v1/users/login',
        data: {
          email,
          password
        }
      });

      if (result.data.status === 'success') {
        showAlert('success', 'Logged in successfully'); // Updated type and message
        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
    } catch (err) {
      showAlert('error', err.response.data.message); // Updated type and message
    }
  };

  // Make sure the form element exists before trying to add an event listener
  const loginForm = document.querySelector('.form--login');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }
});
