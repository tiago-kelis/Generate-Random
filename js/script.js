"use strict";

function clear (){
     pegue = parseFloat(document.getElementById("pegue").value = "");
}

let btnS = document.getElementById("getnumber");  


btnS.addEventListener("click", function(){
  const result1 = document.getElementById("result");

  const pegue = document.getElementById("pegue").value;
  result1.textContent = `${pegue} número(s) gerado(s)`;


  const sort = Array.from({length:pegue}, () => Math.floor(Math.random() * 60));

  document.getElementById("result-2").innerHTML = sort;   
        
                 
      clear();
   

});











