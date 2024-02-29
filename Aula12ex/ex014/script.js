function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `....Bom dia`
        img.src = 'manha.jpg'
        document.body.style.background = '#ffd700'
    } else if (hora >=12 && hora <18) {
        msg.innerHTML += `....Boa tarde`
        img.src = 'tarde.jpg'
        document.body.style.background = '#ffcfc8'
    } else {
        msg.innerHTML += `<h2> Boa noite </h2>`
        img.src = 'noite.jpg'
        document.body.style.background = '#16082f'
    }
}