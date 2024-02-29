function parimp(n){
    if (n%2 == 0){
        return "Esse número é par"
    } else {
        return "Esse número é impar"
    }
}
console.log(parimp(8)) //imprimir na tela sem variável

let res = parimp(64)
console.log(res) // imprimir na tela com variável

