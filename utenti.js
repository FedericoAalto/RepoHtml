$(document).ready(function(){
   // console.log("ciao");
   // var cognome = $("#CognomeUtente").serialize();
   //    alert("il tuo cognome è: " + cognome);

  //var valore = $("#Cognome").val();
  // $("#Email").val("pippo");

   $("#form").validate({
      rules : {
       nome: {
          required:true,
         
       },
       cognome: {
          required:true,
          
       },
       email:{
          required:true,
          email:true
       },
       password:{
          required:true,
          password:true,
          minlength:5,
          maxlength:10
       }

      },

      messages:{
         nome:"inserisci il nome",
         cognome:"inserisci il cognome",
         email:"inserisci la tua email",
         password:{
            required:"inserisci la tua email",
            minlength:"la password dev'essere almeno lunga 5 caratteri",
            maxlength:"la password dev'essere lunga massio 10 caratteri",

         },
      },
      submitHandler:function(form){
         form.submit();
   }
      


      //controllare i l valore di nome e cognome
     // $("#form").validate({
      //   rules: {
          //  Email: {
          //     required: true,
            //   Email: true

           // }

    //  },
    //  messages: {
      //   Email: {
         //   required: 'inserisci indirizzo email',
          //  Email: 'inserisci un indirizzo email valido'
         
      //}


  // });
