const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_inicio = document.querySelector("#btn_inicio");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_agendar = document.querySelector("#btn_agendar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

btn_inicio.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/home/home.html");
});

btn_novo.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/novo/novo.html");
});

btn_pesquisar.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/pesquisar/pesquisar.html");
});

btn_agendar.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/agendar/agendar.html");
});

btn_gestao.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/gestao/gestao.html");
});

btn_sobre.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "/public/src/sobre/sobre.html");
});

const abrirPagina = (el, url)=>{
    const abas = [...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
    window.open(url, "if_principal");
}