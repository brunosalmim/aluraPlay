import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.JS";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value.toLowerCase();
    const busca = await conectaApi.buscarVideo();

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => {
        if(elemento.titulo.toLowerCase().includes(dadosDePesquisa)){
            lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
        }
    })
}
    
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));