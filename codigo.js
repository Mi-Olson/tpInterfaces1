



// (function(){

     var elemento= document.getElementById("usuario");
    
     elemento.addEventListener("click",function(){
       var contenedorUsuario=document.getElementById("usuariocontrol"); 
     
       
       contenedorUsuario.className='cadaInput';
       
       contenedorUsuario.innerText="ingresa de DNI";
       

       
     });   
    
 
    var paswordIngreso=document.getElementById("ingresoPassword");
    paswordIngreso.addEventListener("click",function(){

         var contenedorPasword=document.getElementById("paswordcontrol");    
         contenedorPasword.className='cadaInput';
         contenedorPasword.innerText="ingrese password";
        //  var pal= paswordIngreso.value;
        //  var cant=pal.length;
        //  if (cant<5){alert("error debe ingresar mas e 4 digitos");}


});


function colocarNombre() {

  var elemento2 = document.getElementById("usuario");
  var contenidoNombre = elemento2.value;
  var algo = document.querySelector("#apareceUsuario");
  console.log(contenidoNombre);

//  algo.innerHTML='<p>${contenidoNombre}</p>'

 algo.innerHTML=contenidoNombre;
}


 

 //body.insertAdjacentHTML("beforeend",parrafobutton);
 

    