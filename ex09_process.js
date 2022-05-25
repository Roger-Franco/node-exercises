process.stdout.write('Está gostando do curso? ') // stdout: saida padrão 
process.stdin.on('data', function (data) { // stdin: entrada padrão 
  process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado!\n`)
  process.exit()
}) 