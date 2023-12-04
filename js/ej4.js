let btnInicio = document.querySelector('#btnInicio');
    let btnPausa = document.querySelector('#btnPausa');
    let btnReset = document.querySelector('#btnReset');
    let reloj = document.querySelector('#reloj');
    let tiempo = 0;
    let fnCronometro;
    btnInicio.addEventListener('click',()=>{   
        corriendo = true;
        fnCronometro = setInterval(cronometro, 1000);
        btnInicio.disabled=true;   
    });
    btnPausa.addEventListener('click',()=>{
      clearInterval(fnCronometro);
      btnInicio.disabled=false; 
    });
    btnReset.addEventListener('click',()=>{
      tiempo = 0;
      reloj.innerText = '00:00:00';
      clearInterval(fnCronometro);
      btnInicio.disabled=false;
    });
    let cronometro = () =>{
      tiempo++;
      let horas = Math.floor(tiempo / 3600).toString().padStart(2, '0');
      let minutos = Math.floor((tiempo % 3600) / 60).toString().padStart(2, '0');
      let segundos = (tiempo % 60).toString().padStart(2, '0');
      reloj.innerText = `${horas}:${minutos}:${segundos}`;
    }   