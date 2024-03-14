function validar() {
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const cpf = document.querySelector("#cpf");
    const senha = document.querySelector("#senha");
    const profissao = document.querySelector("#profissao");
    

    if (nome.value == "") {
        alert ("Erro: nome vazio!")
        return false;
    }
    if (sobrenome.value == "") {
        alert("Erro: sobrenome vazio!")
        return false;
    }
    if (cpf.value == "") {
        alert("Erro: cpf vazio!")
        return false;
    }
    if (senha.value == "") {
        alert("Erro: senha vazio!")
        return false;
    }
    if (profissao.value == "") {
        alert("Erro: profissao vazio!")
        return false;
    }
    alert("Sucesso!")

}