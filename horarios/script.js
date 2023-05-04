function carregarHoras(){
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora>=0 && hora<12){
        //bom dia
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#FDE675'
    }else if(hora>=12 && hora<18){
        //boa tarde
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#E58E47'
    }else{
        //boa noite
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#24497C'
    }
}