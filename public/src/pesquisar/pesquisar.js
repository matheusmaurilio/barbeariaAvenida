const btn_pesquisar = document.querySelector("#btn_pesquisar");
const f_txtpesq = document.querySelector("#f_txtpesq");
const dados = document.querySelector("#dados");
const btn_cancelar_popup = document.querySelector("#btn_cancelar_popup");
const f_id = document.querySelector("#f_id");
const f_nome = document.querySelector("#f_nome");
const f_horario = document.querySelector("#f_horario");
const btn_gravar_popup = document.querySelector("#btn_gravar_popup");

btn_cancelar_popup.addEventListener("click", ()=>{
    fundopopup.classList.add("ocultar");
})


btn_pesquisar.addEventListener("click", (evt)=>{
    dados.innerHTML = "";
    const valorPesq = f_txtpesq.value;
    if(valorPesq == ""){
        alert("Informe o nome ou telefone antes de pesquisar");
        f_txtpesq.focus();
        return;
    }

    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesq}`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        
        res.forEach(el => {
            const linha = document.createElement("div");
            linha.setAttribute("class", "linhadados");

            const c0 = document.createElement("div");
            c0.setAttribute("class", "coluna c0");
            c0.innerHTML = el.n_contato_contato;
            linha.appendChild(c0);

            const c1 = document.createElement("div");
            c1.setAttribute("class", "coluna c1");
            c1.innerHTML = el.s_nome_contato;
            linha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class", "coluna c2");
            c2.innerHTML = el.s_wpp_contato;
            linha.appendChild(c2);

            const status = document.createElement("div");
            status.setAttribute("class", "coluna status");
            status.innerHTML = el.n_status_contato;
            linha.appendChild(status);

            const c3 = document.createElement("div");
            c3.setAttribute("class", "coluna c3");
            const imgAgendar = document.createElement("img");
            imgAgendar.setAttribute("src","/public/icons/agendar.svg");
            imgAgendar.setAttribute("class","iconeop");

            imgAgendar.addEventListener("click", (evt)=>{
                fundopopup.classList.remove("ocultar");

                const dados = [...evt.target.parentNode.parentNode.childNodes]
                f_nome.value = dados[1].innerHTML
                f_id.value = dados[0].innerHTML
                
            });

            btn_gravar_popup.addEventListener("click",(evt)=>{
                fundopopup.classList.add("ocultar");
                atualizarStatus(f_id.value, f_horario.value);

            });

            c3.appendChild(imgAgendar);
            linha.appendChild(c3);
            

            dados.appendChild(linha);

        });
    })

});

const atualizarStatus = (id, horario)=>{
    const endpoint = `http://127.0.0.1:1880/atualizarstatus1/${id}/${horario}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status == "200"){
            preencherdvg();
        }
    })
};



