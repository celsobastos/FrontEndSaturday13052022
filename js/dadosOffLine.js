
// let form = document.querySelector('.form-usuario');
let btnForm = document.querySelector('.btn-form');
let getDados = localStorage.getItem('usuario');
if (getDados !== null) {
    let convertParaObjeto = JSON.parse(getDados);
    $('usuario').value = convertParaObjeto.nome;
    $('email').value = convertParaObjeto.email;
}
btnForm.addEventListener('click', (event) => {
    let dadosUsuario = $('usuario').value;
    let dadosEmail = $('email').value;

    if(dadosUsuario == '' || dadosEmail == '') {
        $('usuario').style.border = 'solid red 2px';
        $('email').style.border = 'solid red 2px';
    }
    else {
        let usuario = {
            nome: dadosUsuario,
            email: dadosEmail,
        };

        let convertParaJson = JSON.stringify(usuario);
        localStorage.setItem('usuario', convertParaJson);
    }
    event.preventDefault();
});