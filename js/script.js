function validar() {
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const ano_nasc = document.querySelector("#ano_nasc");
    const profissao = document.querySelector("#profissao");
    const matutino = document.querySelector("#matutino");
    const vespertino = document.querySelector("#vespertino");
    const noturno = document.querySelector("#noturno");

    if (nome.value == "") {
        alert("Erro: nome vazio!");
        nome.focus(); // Definindo o foco no campo nome
        return false;
    }
    if (sobrenome.value == "") {
        alert("Erro: sobrenome vazio!");
        sobrenome.focus(); // Definindo o foco no campo sobrenome
        return false;
    }
    if (ano_nasc.value == "") {  
        alert("Erro: ano de nascimento vazio!");
        ano_nasc.focus(); // Definindo o foco no campo ano_nasc
        return false;
    }

    const anoNascimento = parseInt(ano_nasc.value);

    if (isNaN(anoNascimento)) {
        alert("Erro: ano de nascimento inválido!");
        ano_nasc.focus(); // Definindo o foco no campo ano_nasc
        return false;
    }
    
    if (anoNascimento > 2009) {  
        alert("Erro: ano de nascimento inválido!");
        ano_nasc.focus(); // Definindo o foco no campo ano_nasc
        return false;
    }
    
    if (profissao.value == "") {
        alert("Erro: profissao vazio!");
        profissao.focus(); // Definindo o foco no campo profissao
        return false;
    }

    if (!matutino.checked && !vespertino.checked && !noturno.checked) {
        alert("Erro: nenhum turno selecionado!");
        matutino.focus(); // Definindo o foco no primeiro turno (pode ser ajustado conforme necessário)
        return false;
    }

    alert("Sucesso!");
}
