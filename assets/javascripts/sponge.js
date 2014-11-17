//Forçar o foco no input de pesquisa
$('.input-search').focus();

































 
//daterangepicker
//https://github.com/dangrossman/bootstrap-daterangepicker
//http://www.dangrossman.info/2012/08/20/a-date-range-picker-for-twitter-bootstrap/
// moment.js locale configuration
// locale : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
(function (factory) {
    factory(moment);
}(function (moment) {
    return moment.defineLocale('pt-br', {
        months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atrás',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinal : '%dº'
    });
}));



$(document).ready(function() {
  $('.buttondaterangepicker').daterangepicker(
    { 

   opens: 'left',
      ranges: {
         'Hoje': [moment(), moment()],
         'Ontem': [moment().subtract(1,'days'), moment().subtract(1,'days')],
         'Últimos 7 Dias': [moment().subtract(6,'days'), moment()],
         'Últimos 30 Dias': [moment().subtract(29,'days'), moment()],
         'Esse Mês': [moment().startOf('month'), moment().endOf('month')],
         'Último Mês': [moment().subtract(1,'month').startOf('month'), moment().subtract(1,'month').endOf('month')]
      },
      startDate: moment().subtract(29,'days'),
      endDate: moment()
    },
    function(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    
    );
});


































 
//dropdown menu principal
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

































 
$(document).ready(function(){
        $(".button-collapse-arrow").click(function() {
            $(this).children( ".fa" ).toggleClass('fa-rotate-180');
        });
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

