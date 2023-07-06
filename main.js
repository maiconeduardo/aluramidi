function tocaSom(idElementoAudio){

const elemento =  document.querySelector(idElementoAudio);
if( elemento ===null)
{
    alert('Elemento não encontrado');
}  
else 
{
    if(elemento.localName==='audio')
    {
        elemento.play();
    }
    else
    {
        alert('Som não encontrado')
    }
    //console.log(elemento.localName === 'audio');
    //elemento.play();
    
}

}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function () {
    tocaSom(idAudio);
    
  
    }
    tecla.onkeydown = function (evento) {

       
        if(evento.code === "Enter" || evento.code ==="Space")
        {
            tecla.classList.add('ativa');
        }
        
      
    }
    tecla.onkeyup =function () {
        tecla.classList.remove('ativa');
    }

    


}
