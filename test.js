$(document).ready(function(){
    
    $('#dato').val("valore del dato");

    $('#pulsante').click(function(){

    $("#prova").toggleClass("nascondi","mostra");
    $("#Email").val("pippo"); 
    var classe=$('#prova').attr('class');
      console.log(classe);
      if (classe ==='' || classe === undefined || classe ==='mostra')
        {
          $("#prova").addClass("nascondi").removeClass("mostra");
        }  else {
            $("#prova").addClass("mostra").removeClass("nascondi");
        } 
    //     var valore1 = $('#dato').val();
    //     if (valore1 === '' || valore1 === undefined)
    //    alert ("Valore non valido");
        
    });

    // function validaForm() {
    //     var valore1 = $('#dato').val();
    //     if (valore1 === '' && valore1 === undefined)
    //         alert("Valore non valido");
    // }

});
