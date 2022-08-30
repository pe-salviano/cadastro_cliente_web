// Selecionando os input através do ID (getElementById)

const form = document.getElementById("form"); // pega o formulário no documento HTML atráves do seu ID
const nome__usuario = document.getElementById("nome__usuario");
const data__nascimento = document.getElementById("data__nascimento");
const cpf = document.getElementById("cpf");
const contato__telefone = document.getElementById("contato__telefone");
const email = document.getElementById("email");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const endereco = document.getElementById("endereco");

// Adcionando um evento ao "form" + "Submit" (quando clicar no botão enviar formulário)

const formCadUsuario = document.getElementById("form");
if(formCadUsuario){
  formCadUsuario.addEventListener("submit", async (event) => {
     event.preventDefault(); // (e.preventDefault - não deixa a página recarregar quanto o formulário é enviado)
     verificaInputs(); // chama a função verificaInputs  ao clicar no botao enviar formulario

     //receber os dados do formulario
    const dadosform = new FormData(formCadUsuario);

    // Enviar os dados para o arquivo "cadastrar.php (deve salvar no banco de dados MYSQL"
    const dados = await fetch("cadastrar.php",{
      method:"POST",
      body:dadosform
    })
    const resposta = await dados.json();
    console.log(resposta);

    if(resposta['status']){

    }else{
      document.getElementById("mensagem_alerta").innerHTML = resposta['msg']
    }
   
});

}

// (função verificaInputs) - realiza as verificações nos inputs (separadamente) e depois altera a class do controle__formulario para Erro ou sucesso 
function verificaInputs() {
  const nome__usuarioValue = nome__usuario.value;
  const data__nascimentoValue = data__nascimento.value;
  const cpfValue = cpf.value;
  const contato__telefoneValue = contato__telefone.value;
  const emailValue = email.value;
  const estadoValue = estado.value;
  const cidadeValue = cidade.value;
  const enderecoValue = endereco.value;

  // valida nome de usuário

  if (nome__usuarioValue === "") {
    setErrorFor(nome__usuario, "O nome é obrigatório!"); // (setErrorFor) chama a mensagem de erro 
  } else {
    setSuccessFor(nome__usuario); // (setSuccessFor) chama a mensagem de Sucesso
  }

  // valida data de nascimento (Menor de 18 não pode se cadastrar)

  if (data__nascimentoValue === "") {
    setErrorFor(data__nascimento, "Data de nascimento obrigatória!");
  } else if (!validaData(data__nascimentoValue)) {
    setErrorFor(data__nascimento, "Menores de 18 anos não podem se cadastrar.");
  } else {
    setSuccessFor(data__nascimento);
  }

  // Valida cpf (somente números)

  if (cpfValue === "") {
    setErrorFor(cpf, "CPF é obrigatório!");
  } else if (!validaCPF(cpfValue)) {
    setErrorFor(cpf, "Por favor, verifique o CPF digitado!");
  } else {
    setSuccessFor(cpf);
  }

  // validação telefone

  if (contato__telefoneValue === "") {
    setErrorFor(contato__telefone, "Telefone é obrigatório!");
  } else if (!validaTelefone(contato__telefoneValue)) {
    setErrorFor(contato__telefone, "Por favor, verifique o número digitado!");
  } else {
    setSuccessFor(contato__telefone);
  }

  // validação e-mail
  if (emailValue === ""){
    setErrorFor(email, "E-mail obrigatório!");
  }else if (!validaEmail(emailValue)){
    setErrorFor(email, "Por favor, verifique o E-mail digitado!")
  }else{
    setSuccessFor(email)
  }

  // validação de estado

  if (estadoValue === "") {
    setErrorFor(estado, "O estado é obrigatório!");  
  } else {
    setSuccessFor(estado); 
  }

  // validação de cidade

  if (cidadeValue === "") {
    setErrorFor(cidade, "A cidade é obrigatória!"); // (setErrorFor) chama a mensagem de erro 
  } else {
    setSuccessFor(cidade); // (setSuccessFor) chama a mensagem de Sucesso
  }

  // validação de endereço
  if (enderecoValue === "") {
    setErrorFor(endereco, "O endereço é obrigatório!"); 
  } else {
    setSuccessFor(endereco);
  }
} 




function setErrorFor(input, message) {
  const controle__formulario = input.parentElement; // pega o input que tem dentro da CLASS controle__formulario
  const small = controle__formulario.querySelector("small");

  //adicionar a mensagem de erro
  small.innerText = message;

  // adicionar a classe de erro
  controle__formulario.className = "controle__formulario erro"; // acrescenta a classe erro (controle__formulario erro)
}


function setSuccessFor(input) {
  const controle__formulario = input.parentElement;

  // adicionar a classe de sucesso
  controle__formulario.className = "controle__formulario sucesso"; // acrescenta a classe sucesso (controle__formulario sucesso)
}


// funções de validação

function validaData() {
  let data = document.getElementById("data__nascimento").value; // pega o valor do input

  let hoje = new Date(); // data atual que já fica no sistema
  let nasc = new Date(data); // data que o usuário irá digitar
  let idade = hoje.getFullYear() - nasc.getFullYear(); // pega a data de hoje e subtrai com a data de nascimento
  let media = hoje.getMonth() - nasc.getMonth();

  if (media < 0 || (media === 0 && hoje.getDate() < nasc.getDate())) idade--; 

  if (idade < 12) { // ("SE" idade for menor que 12 retorna "false")
    return false;
  }

  if (idade >= 18 && idade <= 100) { // "SE" idade for maior igual a 18 "E" idade for menor igual a 100 retorna "True"
    return true;
  }

}

function validaCPF(validaCPF) {
  return /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/.test(validaCPF); // [numero de 0 até 9 "3vezes"].[numero de 0 até 9 "3vezes"].[numero de 0 até 9 "3vezes"]-[numero de 0 até 9 "2 vezes"] EX:425.708.268-84 
}



function validaTelefone(contato) {
  return /^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$/.test(contato);
   // Regex (expressão regular) Só aceitará numeros EX:. 11995243121
   
}

function validaEmail(email) {
  return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email); //[^ representa o começo da linha]+[tem que conter .  _ letras de a até z e numeros de 0 até 9]+[depois vem o @]+[letras de a até z e numeros de 0 até 9]+[tem que conter . letras de a até z e numeros de 0 até 9]+[pode conter . letras de a até z][$/ representa final da linha] EX: pedro_s.c@hotmail.com  ou pedro_s.c@hotmail.com.br
}
