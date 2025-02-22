async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo : titulo,
            descricao : `${descricao} mil visualizações`,
            url : url,
            imagem : imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function buscarVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos`)
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscarVideo
}

