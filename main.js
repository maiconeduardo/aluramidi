function tocaSom(idElementoAudio){

const elemento =  document.querySelector(idElementoAudio);
 
//somente elemento é igual = elemento != null
if ( elemento && elemento.localName =='audio')
{
            elemento.play();
        
}
else
{
    alert('Elemento não encontrado ou seletor inválido');
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
