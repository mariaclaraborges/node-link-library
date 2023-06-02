import chalck from 'chalk';
import fs from 'fs';


function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]; // matchAll retorna um iterador 
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return resultados.length === 0 ? 'Não há links no arquivo' : resultados;
}
//retorna um array com um objeto para cada ocorrência

function trataErro(erro){
    throw new Error(chalck.red(erro.code, 'não há arquivo no diretório')); //lança um erro no terminal
}

//promise com async e await
async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding); //await espera a promise ser resolvida
        return extraiLinks(texto);
    }catch(erro){ //captura a exceção (erro) caso ocorra dentro do try e trata o erro
        trataErro(erro);
    }
    //finally{
    //     console.log(chalck.yellow('Operação concluída.'))
    // }
} 


export default pegaArquivo; // ao invés de chamar a função pegaArquivo no global(index.js), exporta ela para ser usada em outro arquivo (cli.js)
//pegaArquivo('./arquivos/texto.md'); //acessou o arquivo texto.md e imprimiu o conteúdo no console
// pegaArquivo('./arquivos/'); 