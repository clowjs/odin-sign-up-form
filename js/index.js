const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordsDoNotMatch = document.getElementsByClassName('passwords-no-match')[0];

confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordsDoNotMatch.style.visibility = 'visible';
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
  } else {
    passwordsDoNotMatch.style.visibility = 'hidden';
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordsDoNotMatch.style.visibility = 'visible';
    passwordInput.classList.add('error');
    confirmPasswordInput.classList.add('error');
  } else {
    passwordsDoNotMatch.style.visibility = 'hidden';
    passwordInput.classList.remove('error');
    confirmPasswordInput.classList.remove('error');
  }
});