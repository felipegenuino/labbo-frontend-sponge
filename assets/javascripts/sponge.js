// Performs a smooth page scroll to an anchor on the same page.
// http://css-tricks.com/snippets/jquery/smooth-scrolling/

    // $(function() {
    //   $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    //   });
    // });




//Forçar o foco no input de pesquisa
$('.input-search').focus();



//mansory

// $(document).ready(function(){
//   var $container = $('.container-blocks-campaign');

//   $container.imagesLoaded( function() {
//     $container.masonry({
//       itemSelector        : '.block-campaign',
//       columnWidth         : '.block-campaign',
//       transitionDuration  : 0,
//     });
//   });
// });



 

$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})















 //abrir modal com Hash
 $(function() {
    if (window.location.hash.indexOf("ModalSelectProduct") !== -1) {
        $("#ModalSelectProduct").modal();
    }

    if (window.location.hash.indexOf("login") !== -1) {
            $("#login").modal();
    }

     if (window.location.hash.indexOf("CompraDePontosRealizadaComSucesso") !== -1) {
            $("#ModalCompraDePontos").modal();
    }

    if (window.location.hash.indexOf("EntregaConfirmada") !== -1) {
            $("#ModalEntregaConfirmada").modal();
    }

    if (window.location.hash.indexOf("ResgatedePontosConfirmada") !== -1) {
            $("#ModalResgatedePontosConfirmada").modal();
    }

});














//se clicar em .close, limpa a hash
$( ".close" ).click(function() {
   window.location.hash="";
});








/**
 * Brazilian translation for bootstrap-datepicker
 * Cauan Cabral <cauan@radig.com.br>
 */
;(function($){
  $.fn.datepicker.dates['pt-BR'] = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    clear: "Limpar"
  };
}(jQuery));


//DatePicker
$('.input-group.date').datepicker({
    format: "dd/mm/yyyy",
    todayBtn: true,
    language: "pt-BR",
    forceParse: false,
    calendarWeeks: true,
    autoclose: true,
    todayHighlight: true
});

