console.log('Active Link');

let navBar = document.querySelectorAll('a.navbar-link');
// let path = window.location.pathname;
// console.dir(path);
function deleteActive() {
    navBar.forEach(function(element){
        element.classList.remove('active');
    });
}
deleteActive();
navBar.forEach(function(element){
    let text = element.href; 
    let pattern = /#/;
    let result = pattern.test(text);
    if(result === true) {
        element.classList.add('active');
    }
});
navBar.forEach(function(element){
    element.addEventListener('click', function(event) {
        deleteActive();
        event.target.classList.add('active');
    });
});
