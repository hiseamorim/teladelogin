//Código de validação de formulário de Cadastro
'use restrict'; //Modo restrito

function verificar() {

    let nome = document.getElementById('nome').value;
    let datadeNascimento = document.getElementById('dtnasc').value;
    let cpf = document.getElementById('cpf').value;
    let fone = document.getElementById('fone').value;
    let email = document.getElementById('email').value;
    let confirmaEmail = document.getElementById('confirmaEmail').value;
    let senha = document.getElementById('senha').value;
    let confirmeSenha = document.getElementById('confirmaSenha').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let cep = document.getElementById('cep').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    

    if (!nome || !fone|| !datadeNascimento || !cpf || !email || !senha || !endereco || !numero || !cep  || !complemento || !bairro || !cidade || !estado || !confirmeSenha || !confirmaEmail) {
        alert("Por favor preencher todos os campos corretamente");
    }
    else{
        alert("Campos preenchidos com sucesso!");
    }
}


//Limpar formulário
const limparFormulario = () =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Preenche campos do formulário

const preencherformulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value =endereco.uf;
}

const pesquisarcep = async() =>{
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado')
        }else{
            preencherformulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}


// Adiciona um evento DOM, no input CEP
document.getElementById('cep').addEventListener('focusout', pesquisarcep);
