$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover(); 
    $('.carousel').carousel({
      interval: 2000
    });

    //jQuery
    $('#contacto').on('show.bs.modal', function(e){
      console.log('El modal contacto se esta mostrando');
      //Remover una clase y adherirle otra al hacer clic (sucede solo una vez)
      // $('#contactoBtn').removeClass('btn-outline-success');
      // $('#contactoBtn').addClass('btn-primary');
      //Bloquear al entrar al modal
      $('#contactoBtn').prop('disabled', true);
    })

     $('#contacto').on('shown.bs.modal', function(e){
        console.log('El modal se mostro');
      });

      $('#contacto').on('hide.bs.modal', function(e){
      console.log('El modal contacto se esta ocultando');
    })

     $('#contacto').on('hidden.bs.modal', function(e){
        console.log('El modal se oculto');
        //Desbloquear al salir del modal
        $('#contactoBtn').prop('disabled', false);
      });
  });