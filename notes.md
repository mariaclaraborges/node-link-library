
*BIBLIOTECA NODEJS*

Programa que automatiza um processo de programação
Trabalhar e manipular arrays e objetos
Comandos terminal
Desenvolvimento web
Funções, Libs, API


*O que é o Node?*
Motor de interpretação do JavaScript fora do ambiente do navegador
Runtime: ambiente de execução
Foco em desenvolvimento back-end
Permite que escreva programas em JS que rodem fora do navegador
Package.json: arquivo manifesto de qualquer projeto que use node
npm: gerenciadores de pacotes. repositórios de código voltados para pacotes do node. através dele, podemos instalar todos os pacotes externos que queremos usar no projeto que vão para a pasta node_modules


*CURSO BIBLIOTECA NODE*
Biblioteca conjunto de código que faz uma tarefa específica. Pequenos conjuntos de programas.
Como criar uma biblioteca que acesse arquivos de texto em md, capture links e acesse para ver se ainda estão no ar.


*Uso de bibliotecas:*
Chalk, 
FS(FileSystem) -> FS é uma biblioteca nativa do JavaScript -> Não precisa de npm install

Expressão regular: capturar padrões e sequências específicas em um texto
regex101.com -> documentação mdn

*CLI - Interface de linha de comando*


*isFile - isDirectory*
Uma forma de não passar o caminho de um arquivo por vez, mas sim só informar um diretório -> Existe um método que verifica se um caminho se refere a um diretório ou um arquivo apenas. 

*Validação de Links*
O arquivo "cli.js" está responsável por pegar os argumentos que vêm da linha de comando e processar esses argumentos.

"cli": "node ./src/cli.js ./arquivos/texto.md", : traz a lista sem validação
"cli:valida": "node ./src/cli.js ./arquivos/texto.md --valida" : traz a lista com validação

no JS, existe um método que faz com que consiga extrair algumas informações de um objeto: chave, valores ou o objeto inteiro
em http-validacao precisamos apenas do link

Como saber se o link está online ou não?

*FETCH API* 





**Outras formas de lidar com promises**
//promise com then e catch
// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf8';
//     fs.promises.readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalck.blue(texto))) //se der certo, imprime o texto
//     .catch(trataErro) //se der errado, chama a função trataErro
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf8';
    //terceiro parâmetro é uma função callback; posso utilizar _ para ignorar o primeiro parâmetro
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { 
//         if(erro){ //se acontecer um erro, chama a função trataErro
//             trataErro(erro);
//         }  
//         console.log(chalck.blue(texto))
//     }) 
// }