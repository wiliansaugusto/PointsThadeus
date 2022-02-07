tpForm = "Cadastro de novo";

tipo = document.getElementById("tpform").innerHTML = tpForm;



function salvar() {
    event.preventDefault();

    var form = document.querySelector("#form");
    if (form.pwd1.value == form.pwd2.value) {
        /* 
        console.log("as senhas são coincidentes");
        console.log("senha1" + form.pwd1.value);
        console.log("senha2" + form.pwd2.value);
    */
    } else {
        /*  console.warn("as senhas não coincidem");
        console.log("senha1" + form.pwd1.value);
        console.log("senha2" + form.pwd2.value);
    */
    }

    //variavel util para pegar a data de hoje
    var d = new Date(form.dtNascimento.value);

    idade = Math.floor((Date.now() - d) / (31557600000));
    if (idade > 17 && form.tpUsuario.value == 1) {
        console.warn("Mestre Jedi: " + idade);
    } else {
        console.warn("Você é um padawan: " + idade);
    }
    cpf = form.cpf.value.replace(/[\s.-]*/igm, '');
    var validaCPF = validarCPF(cpf);
    var mensagemCPF = validaCPF == true ? alert("CPF Validado com sucesso") : alert("CPF não é valido");
}

function validarCPF(cpf) {
    var calculo = [];
    var primeiroDigito = 0;
    var segundoDigito = 0;

    //verifica se o cpf é de um formato valido e não é um erro de calculo
    if (
        cpf == 11111111111 ||
        cpf == 22222222222 ||
        cpf == 33333333333 ||
        cpf == 44444444444 ||
        cpf == 55555555555 ||
        cpf == 66666666666 ||
        cpf == 77777777777 ||
        cpf == 88888888888 ||
        cpf == 99999999999 ||
        cpf == 00000000000 ||
        cpf.length > 11 || cpf.length < 11 || !cpf
    ) {
        return false;
    }



    //Calculo do primeiro digito é baseado em multiplicando os valores do cpf por um iterator
    //depois calculando a divisão e o resto da divisão é que forma o digito verificador
    // local da pesquisa url = https://www.calculadorafacil.com.br/computacao/validar-cpf
    for (i = 0; i < 9; i++) {
        calculo.push(cpf[i] * (i + 1));

    }
    for (valor of calculo) {
        primeiroDigito += valor;
    }

    primeiroDigito = primeiroDigito % 11 == 10 ? 0 : primeiroDigito % 11;

    //calculo  semelhante ao primeiro digito

    calculo = [];
    for (i = 1; i < 9; i++) {
        calculo.push(cpf[i] * (i));

    }
    for (valor of calculo) {
        segundoDigito += valor;
    }
    segundoDigito = segundoDigito + (primeiroDigito * 9);
    segundoDigito = segundoDigito % 11 == 10 ? 0 : segundoDigito % 11;

    console.log("primeiro digito: " + primeiroDigito + "-" + cpf[9])
    console.log("Segundo digito: " + segundoDigito + "-" + cpf[10])

    return (cpf[9] == primeiroDigito && cpf[10] == segundoDigito) ? true : false;
}