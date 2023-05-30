const btn_pesquisar = document.querySelector("#btn_pesquisar");
const f_txtpesq = document.querySelector("#f_txtpesq");
const dados = document.querySelector("#dados");

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

            const c1 = document.createElement("div");
            c1.setAttribute("class", "coluna c1");
            c1.innerHTML = el.s_nome_contato;
            linha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class", "coluna c2");
            c2.innerHTML = el.s_wpp_contato;
            linha.appendChild(c2);

            dados.appendChild(linha);

        });
    })

});

