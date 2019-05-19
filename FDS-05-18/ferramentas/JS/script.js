let botao = document.querySelector ('#Enviar');

function aparecerAlert(){
    alert("Desculpe. No momento não existe médicos na sua região.")
}

botao.onclick = aparecerAlert;