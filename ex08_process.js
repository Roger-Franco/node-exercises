// console.log(process.argv);

function temParam(param) {
  return process.argv.indexOf(param) !== -1 // significa que existe.
}

if (temParam('--producao')) {
  console.log('Atenção total!'); // ex: node ex08_process --producao
} else {
  console.log('Tranquilo!'); // ex: node ex08_process (qualquer um menos --producao)
}