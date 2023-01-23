const BURGERBTN = document.querySelector('.navbar-collapse')
const ALLMENUBTNS = document.querySelectorAll('.nav-link')

ALLMENUBTNS.forEach(btns=>btns.addEventListener('click', () => BURGERBTN.classList.remove('show') ))