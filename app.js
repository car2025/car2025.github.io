let amigos=[];


function sortearAmigo() {
  
  if (amigos.length==0){
   
    alert("debe ingresar un nombre");
  
  }else {
  
    var nombres = Math.floor(Math.random()*amigos.length);
 
document.querySelector("#resultado").innerHTML = `<h1>${amigos[nombres]}</h1>`;

let borrar = document.querySelector("#listaAmigos");
borrar.innerHTML = '';

}


}




function limpiarcaja(){

    document.querySelector('#amigo').value = '';
}

function mostrarlista(){
  //listar.innerHTML = "";
for(let i = 0; i < amigos.length; i++) {
 
 }

 let listar = document.querySelector("#listaAmigos");
 listar.innerHTML += `<li>${amigos[amigos.length-1]}</li>`;

}

function agregarAmigo()

{
  let nombreamigo =  document.getElementById('amigo').value;
   if (nombreamigo.length==0){

    return alert("Por favor ,inserte un nombre.");
  }
  if (amigos.includes(nombreamigo)) {
    limpiarcaja();
     return alert("Este nombre ya esta ingresado");
    
  }else {
    amigos.push(nombreamigo);  
  }

  console.log(amigos);
  limpiarcaja();
  mostrarlista();
  
 return;  
}









