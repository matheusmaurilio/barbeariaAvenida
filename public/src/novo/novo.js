const btn_gravar = document.querySelector("#btn_gravar");
const btn_cancelar = document.querySelector("#btn_cancelar");
const f_nome = document.querySelector("#f_nome");
const f_telefone = document.querySelector("#f_telefone");


btn_gravar.addEventListener("click", (evt)=>{
    const dados = {
        "f_nome": f_nome.value,
        "f_telefone": f_telefone.value
    }
    const cabecalho={
        method:'POST',
        body: JSON.stringify(dados) 

    }
    const endpoint = "http://127.0.0.1:1880/addcontatos"

    fetch(endpoint, cabecalho)
    .then(res => {
        if (res.status == "200"){
            reset();
        }else{
            alert("Erro ao gravar novo contato");
        }
    })  
});

btn_cancelar.addEventListener("click", (evt)=>{
    reset();
})

const reset = ()=>{
    f_nome.value = "";
    f_telefone.value = "";
    f_nome.focus();
}



