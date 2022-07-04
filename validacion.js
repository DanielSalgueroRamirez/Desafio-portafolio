var nombre=  document.getElementById('nombre');

nombre.addEventListener('input',function(){
  if (this.value.length > 50) 
  window.alert("Máximo 50 caracteres");
})

var asunto=  document.getElementById('asunto');

asunto.addEventListener('input',function(){
  if (this.value.length > 50) 
  window.alert("Máximo 50 caracteres");
})

var mensaje=  document.getElementById('mensaje');

mensaje.addEventListener('input',function(){
  if (this.value.length > 300) 
  window.alert("Máximo 300 caracteres");
})


