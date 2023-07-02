let btnNav = document.querySelector('.btn-nav');
btnNav.addEventListener('click', () => {
   document.querySelector('.navbar-nav')
     .classList
     .toggle('display');
});