let reloj =() =>{
  let h2hora = document.querySelector('.hora');
  let ampm = document.querySelector('.meridiano');
  let seg =  document.querySelector('.seg');
  let fechaTexto = document.querySelector('#fechaTexto');
  

  let meridiano = '';
  let date = new Date();
  let horas = date.getHours().toString().padStart(2, '0');
  let minutos = date.getMinutes().toString().padStart(2, '0');
  let segundos = date.getSeconds().toString().padStart(2, '0');
  let dia = date.getDay();
  let mes = date.getMonth();
  let anio = date.getFullYear();
  let semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  let nombreDia = semana[dia];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  let nombreMes = meses[mes];
  fechaTexto.innerText = `${nombreDia} ${date.getDate()} de ${nombreMes} del ${anio}`;

  if (horas>12) {
    horas = horas - 12;
    meridiano = 'PM';
  }else{
    meridiano = (horas=12) ?'PM':'AM';        
  }
  h2hora.innerText =`${horas}:${ minutos}:`;
  ampm.innerText = meridiano;
  seg.innerText = segundos;

}
setInterval(reloj, 1000);