const dados = document.querySelector("#dados");
const fundopopup = document.querySelector("#fundopopup");
const btn_gravar_popup = document.querySelector("#btn_gravar_popup");
const btn_cancelar_popup = document.querySelector("#btn_cancelar_popup");
const btn_deletar_popup2 = document.querySelector("#btn_deletar_popup2");
const f_id = document.querySelector("#f_id");
const f_nome = document.querySelector("#f_nome");
const f_telefone = document.querySelector("#f_telefone");

btn_gravar_popup.addEventListener("click", (evt)=>{
    fundopopup.classList.add("ocultar");
    const endpoint = `http://127.0.0.1:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_telefone.value}`;
    console.log(endpoint);
    fetch(endpoint)
    .then(res=>{
        if (res.status == "200"){
            alert("Dados atualizados!")
            preencherdvg();
        }else{
            alert("Erro ao atualizar dados")
        }
    })
});

btn_cancelar_popup.addEventListener("click", (evt)=>{
    fundopopup.classList.add("ocultar");
});


const preencherdvg = ()=>{
    dados.innerHTML = "";

    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
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

            const c3 = document.createElement("div");
            c3.setAttribute("class", "coluna c3");

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("src","/public/icons/edit.svg");
            imgEditar.setAttribute("class","iconeop");
            imgEditar.addEventListener("click", (evt)=>{
                fundopopup.classList.remove("ocultar");

                const dados = [...evt.target.parentNode.parentNode.childNodes];
                f_id.value = dados[0].innerHTML;
                f_nome.value = dados[1].innerHTML;
                f_telefone.value = dados[2].innerHTML;
               
            })

            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("src","/public/icons/delete.svg");
            imgDelete.setAttribute("class","iconeop");
            imgDelete.addEventListener("click", (evt)=>{
                deletarContato(evt.target.parentNode.parentNode.firstChild.innerHTML);
            })
            
            c3.appendChild(imgEditar);
            c3.appendChild(imgDelete);
            
            linha.appendChild(c3);

            dados.appendChild(linha);

        });
    })

};

preencherdvg();

const deletarContato = (id)=>{
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
    .then(res=>{
        if(res.status == "200"){
            preencherdvg();
        }
    })
};