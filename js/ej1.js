const btnComenzar = document.querySelector ('#comenzar');
const frmJuego = document.forms['formJuego'];
btnComenzar.addEventListener('click',()=>{
 frmJuego.numero.disabled=false;
 frmJuego.enviar.disabled=false;
})
frmJuego.enviar.addEventListener('click',(e)=>{
  e.preventDefault();
  let num = frmJuego.numero.value
  let sorteo =  Math.floor(Math.random() * 11)
  console.log(sorteo)
  if(num>=0 && num<=10 ){
    if(sorteo==num){
      alert('Ganaste juego finalizado ');
      frmJuego.numero.disabled=true;
      frmJuego.enviar.disabled=true;
    }else{
      alert(`Perdiste el numero sorteado es ${sorteo}`);
    }
  }else{
    elert('Valor ingresado no valido');
  }
  /* if ()
  alert('enviado'); */
})