    let num = document.querySelector('input#fnum')
    let val = document.querySelector('select#flista')
    let res = document.querySelector('div#res')
    let valores = []
    
    function isNumero(n){
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function inNumero(n, l) {
        if(l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
    
    function adicionar() {
        if(isNumero(num.value) && !inNumero(num.value, valores)) {
            res.innerHTML = ' '        
            let n = Number(num.value)
            valores.push(n)
            let item = document.createElement('option')
            item.text = `O valor ${n} foi adicionado`
            val.appendChild(item)
        } else {
            res.innerHTML = ' '  
            window.alert('Valor inválido ou já encontrado na lista')
        }
        num.value = " " //limpar o número digitado anteriormente
        num.focus()        // Ativar o curso para entrada do novo número 
    }

    function finalizar() {
        if (valores.length == 0) {
            window.alert('Nenhum número adicionado, por favor digite um numero!')
        } else {
        valores.sort()
        var media = 0
        var soma = 0
        for (let pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
        }
        media = (soma / valores.length)
        res.innerHTML = `Você digitou ${valores.length} números <br/>`
        res.innerHTML += `O menor valor é ${valores[0]} <br/>`
        res.innerHTML += `O maior valor é ${valores[valores.length-1]} <br/>`
        res.innerHTML += `A soma dos números é ${soma} <br/>`
        res.innerHTML += `A média desses números é ${media}` 
        }      
    }