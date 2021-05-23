var usu=document.getElementById("ingresoUsuario").value;  
var dondeColocar=document.getElementById("apareceUsuario");
var dondeColocar=document.createTextNode(usu);

// (function(){


    document.getElementById("botonControlUsuario").addEventListener("click",function(){
        var palabra=document.getElementById("ingresoUsuario");    
        
        var pal=palabra.typeOff;
       
        if (pal == text){alert("error debe ingresar solo numeros");}
        
     });   
    
 

document.getElementById("botonControlPassword").addEventListener("click",function(){
   var palabra=document.getElementById("ingresoPassword");    
   
   var pal=palabra.value;
   var cant=pal.length;
   if (cant<5){alert("error debe ingresar mas e 4 digitos");}


});

 
// }());
/* var body=document.querySelector("#body");
 var parrafoNuevo= document.createElement("p");
 var contenidoParrafo=document.createTextNode("BEEP");
 parrafoNuevo.appendChild(contenidoParrafo);

 //body.insertAdjacentHTML("beforeend",parrafobutton);
 body.appendChild(parrafoNuevo); */

    