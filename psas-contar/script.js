function contar(){
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById('res')

    if (ini.ariaValueMax.lenght == 0 || fim.ariaValueMax.lenght == 0 || ipasso.ariaValueMax.lenght == 0 ){
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            for(let c = i; c <= f; c+=p) {
                res.innerHTML += `${c} \u{1F92B}`
            }
            res.innerHTML += `\u{1F911}`
 
        } else {
            for(let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} `
            }

        }

    }
}