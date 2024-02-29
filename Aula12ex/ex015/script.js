function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[Erro] Verifique os dados e tente novamente')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')
            if (fsex[0].checked) {
                gênero = 'homem'
                if (idade >=0 && idade<5 ){
                    img.setAttribute('src', 'bebe-menino.jpg')
                } else if (idade <18) {
                    img.setAttribute('src', 'crianca-menino.jpg')
                } else if (idade <50){
                    img.setAttribute('src', 'adulto-homem.jpg')
                } else {
                    img.setAttribute('src', 'idoso-homem.jpg')
                }
            } else if (fsex[1].checked) {
                gênero = 'mulher'
                if (idade >=0 && idade<10 ){
                    img.setAttribute('src', 'bebe-menina.jpg')
                } else if (idade <18) {
                    img.setAttribute('src', 'crianca-menina.jpg')
                } else if (idade <50){
                    img.setAttribute('src', 'adulto-mulher.jpg')
                } else {
                    img.setAttribute('src', 'idoso-mulher.jpg')
                }
            } 
            res.style.textAlign = 'center'
            res.innerHTML = `Estamos em ${data.getFullYear()}, identificamos ${gênero} com ${idade} anos`
            res.appendChild(img)
        }
    }