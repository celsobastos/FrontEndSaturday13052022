$(function() {

    const caixa = $('.caixa');
    caixa.on('mouseleave', (event) => {
        caixa.slideUp();
    });
    
    const email = $('#email').val();
    $('#button').on('click', () => {
        $('#email').val('celsotest 123');
        caixa.slideDown(2000).slideUp(1000).fadeIn();
    });

    $('#cpf').mask('000.000.000-00', {reverse: true});

});