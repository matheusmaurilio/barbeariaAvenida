const dados = document.querySelector("#dados");

const preencherdvg = ()=>{
    dados.innerHTML = "";

    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
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

            const c3 = document.createElement("div");
            c3.setAttribute("class", "coluna c3");

            const imgEditar = document.createElement("img");
            imgEditar.setAttribute("src","/public/icons/edit.svg");
            imgEditar.setAttribute("class","iconeop");
            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("src","/public/icons/delete.svg");
            imgDelete.setAttribute("class","iconeop");
            
            c3.appendChild(imgEditar);
            c3.appendChild(imgDelete);
            
            linha.appendChild(c3);

            dados.appendChild(linha);

        });
    })

};

preencherdvg();
