function contagem(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resposta')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar! Há campos vazios'
    }else{
        res.innerHTML = `Contando: `
        if(Number(passo.value)<=0){
            window.alert('Passo invalido.')
            res.innerHTML = 'Impossivel Contar!'
        }
        if(Number(ini.value)<Number(fim.value)){
            for(let c=Number(ini.value); c<=Number(fim.value) ; c+=Number(passo.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c=Number(ini.value); c>=Number(fim.value) ; c-=Number(passo.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}