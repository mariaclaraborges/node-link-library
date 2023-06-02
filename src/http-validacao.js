function extraiLinks (arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join()) //join() junta os elementos de um array em uma string e retorna esta string. O separador padrão é uma vírgula.
}

async function chacaStatus (listaURLs) {
    const arrStatus = await Promise
    .all(
        listaURLs.map (async (url) => {
            try{
                const response = await fetch(url)
                return response.status //status traz o statuscode da requisição
            }catch (error){
                manejaErros(error);
            }
        
        })
    )
    return arrStatus
}

function manejaErros (error){
    if (error.cause.code === 'ENOTFOUND'){
        return 'link inválido'
    }else{
        return 'ocorreu algum erro'
    }
}

export default async function listaValidada (listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await chacaStatus(links);
    
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
} 