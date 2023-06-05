const dados = document.querySelector("#dados");
const f_id = document.querySelector("#f_id");
const statusd = document.querySelector("#status");
const btn_cancelar_popup3 = document.querySelector("#btn_cancelar_popup3");
const btn_gravar_popup3 = document.querySelector("#btn_gravar_popup3");

btn_cancelar_popup3.addEventListener("click", (evt)=>{
    fundopopup3.classList.add("ocultar");
});

const preencherdvg = ()=>{
    dados.innerHTML = "";

    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        
        res.forEach(el => {
            if(el.n_status_contato == 1){
                const linha = document.createElement("div");
                linha.setAttribute("class", "linhadados");

                const c0 = document.createElement("div");
                c0.setAttribute("class", "coluna c0");
                c0.innerHTML = el.n_contato_contato;
                linha.appendChild(c0);

                const c11 = document.createElement("div");
                c11.setAttribute("class", "coluna c11");
                c11.innerHTML = el.n_horario_contato;
                linha.appendChild(c11);

                const c1 = document.createElement("div");
                c1.setAttribute("class", "coluna c1");
                c1.innerHTML = el.s_nome_contato;
                linha.appendChild(c1);

                const c2 = document.createElement("div");
                c2.setAttribute("class", "coluna c2");
                c2.innerHTML = el.s_wpp_contato;
                linha.appendChild(c2);

                const c22 = document.createElement("div");
                c22.setAttribute("class", "coluna c22");

                const status = document.createElement("div");
                status.setAttribute("class", "coluna status");
                status.innerHTML = el.n_status_contato;
                linha.appendChild(status);

                const imgDelete = document.createElement("img");
                imgDelete.setAttribute("src","/public/icons/delete.svg");
                imgDelete.setAttribute("class","iconeop");
                imgDelete.addEventListener("click", (evt)=>{
                    fundopopup3.classList.remove("ocultar");

                    const dados2 = [...evt.target.parentNode.parentNode.childNodes]; 
                    const statusd = dados2[4].innerHTML;
                    const id = dados2[0].innerHTML;

                    f_nome.value = dados2[2].innerHTML
                    f_horario.value = dados2[1].innerHTML

                    btn_gravar_popup3.addEventListener("click", (evt)=>{
                        fundopopup3.classList.add("ocultar");
                        atualizarContato(id, statusd);
                        location.reload(true);
                    });
    
                });

                c22.appendChild(imgDelete);
                linha.appendChild(c22);
                
                dados.appendChild(linha);
            }

        });
    })

};

const atualizarContato = (id, statusd)=>{
    const endpoint = `http://127.0.0.1:1880/atualizarstatus/${id}/${statusd}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status == "200"){
            preencherdvg();
        }
    })
};

preencherdvg();
