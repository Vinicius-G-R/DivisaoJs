let numer = Number(prompt('Digite o numerador'))
        let denom = Number(prompt('Digite o denominador'))
        
        if(denom == 0){
            alert('Não é possível dividir por zero.')
        }
        else{
            let divisao = (numer / denom)
            alert(`${numer} dividido por ${denom} é ${divisao.toFixed(1)}.`)
        }