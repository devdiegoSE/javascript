
let num = [5, 8, 4, 9]
console.log(`Esse é o meu vetor ${num}`)
num[4] = 6
num.push(7) // inserir na ultima posição do vetor
num.sort()
let pos = num.indexOf(6) // indice onde se encontra o número 6. Se não encontrado o resultado é -1
if (pos == -1) {
    console.log('O valor não foi encontado.')
} else {
    console.log(`Dentre os ${num.length} números do vetor, o solicitado está na posição ${pos}`)
}

/*
let num = [5, 9, 4, 7]
console.log(`O início do vetor é ${num} com tamanho ${num.length}. Em ordem crescente temos ${num.sort()}`)
for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
    }
 */

/*  FOR mais simplificado, somente para variaveis compostas(vetores) e objetos.
let num = [5, 9, 4, 7]
for (let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/

