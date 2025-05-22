/*Código para abertura da barra de navegação no mobile*/
$(document).ready(function() {
$('#mobile_btn').on('click', function() {
$('#mobile_menu').toggleClass('active')
$('#mobile_btn').find('i').toggleClass('fa-x')
});
});
/*Código para abertura da barra de navegação no mobile*/