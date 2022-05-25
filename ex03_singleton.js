let numero = 1
let num = 1

function exibirProximo() {
  console.log(numero++)
}

function exibirProximo2() {
  console.log(num++)
}

module.exports = { exibirProximo, exibirProximo2 }