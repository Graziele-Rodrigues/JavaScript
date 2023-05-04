function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = window.document.getElementById('foto')
        if(fsex[0].checked){
            genero = 'homem'
            
        }else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        if(idade>=0 && idade<5){
            imagem.src = 'imagens/bebe.jpg'
        }
        else if(idade>=5 && idade<12){
            imagem.src = 'imagens/criança.jpg'
        }
        else if(idade>=12 && idade<=21){
            imagem.src = 'imagens/jovem.jpg'
        }
        else if(idade>21 && idade<50){
            imagem.src = 'imagens/adulto.jpg'
        }else{
            imagem.src = 'imagens/idoso.jpg'
        }
        
    }
}