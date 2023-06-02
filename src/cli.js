import chalk from "chalk";
import fs from 'fs'; 
import pegaArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminho = process.argv; //argv é um array que contém todos os argumentos passados na linha de comando

async function imprimeLista(valida, resultado, identificador = ''){
    if (valida){
        console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        await listaValidada(resultado));
    }else{
        console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        resultado);
    }
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida'; //true ou false
    console.log(valida)

    try{
        fs.lstatSync(caminho);
    }catch(erro){
        if(erro.code === 'ENOENT'){
            console.log(chalk.red('Arquivo ou diretório não encontrado'));
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){ //se for arquivo, imprime o nome do arquivo
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);
    }else if (fs.lstatSync(caminho).isDirectory()){ //se for diretório, imprime o nome dos arquivos do diretório
        const arquivos = await fs.promises.readdir(caminho);//com o comando node src\cli.js arquivos/ no terminal, entra na pasta e imprime o nome dos arquivos do diretório. no caso, texto.md
        arquivos.forEach(async (nomeDoArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDoArquivo}`); //pega o caminho do arquivo e o nome do arquivo	
            imprimeLista(valida, lista, nomeDoArquivo);
        })
       console.log(arquivos)
    }
}

processaTexto(caminho);