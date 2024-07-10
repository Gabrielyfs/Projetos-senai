// eye icon
let bnt = document.querySelector('#verSenha')
let bntConfirm = document.querySelector('#verConfirmSenha')

// chamando o input
let nome = document.querySelector('#nome')
// chamando a label
let labelNome = document.querySelector('#labelNome')
// variável boolean: false, prque os campos não estão preenchidos
let validNome = false;

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false;

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

// validações do campo
// keyup: evento ao digitar
nome.addEventListener('keyup', ()=>{
  // nome.valor.tamanho(quantidade de caractéres)
  if(nome.value.length <= 2){
    // mudar a cor se não cumprir a length
    labelNome.setAttribute('style', 'color: red')
    // mensagem na label
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caractéres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    // após preencher, a boolean se torna true
    validNome = true;
  }
})

usuario.addEventListener('keyup', ()=>{
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caractéres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false;
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true;
  }
})

senha.addEventListener('keyup', ()=>{
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caractéres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true;
  }
})

confirmSenha.addEventListener('keyup', ()=>{
  // se as senhas forem diferentes
  if(confirmSenha.value != senha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false;

  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true;
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha ){
    //cadastrando no banco de dados do navegador
    //JSON.parse transforma as coisas do localStorage em JSON
    //se tiver uma lista existente: incremente, se não tiver: crie um array vazio
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    //array de objetos
    //push: adiciona valores a um array
    listaUser.push(
      {
        //nomeCad: variável recém criada; nome.value: valor do input
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
      }
    )

    //salvar a lista no localStorage
    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block') //para aperecer a mensagem na tela
    msgSuccess.innerHTML = "<strong>Cadastrando usuário...</strong>"
    //para as duas mensagens não aparecerem juntas
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(()=>{
      //ao cadastrar, será direcionado ao login, com delay de 2 segundos
      window.location.href = '../html/login.html'
    }, 2000)   
  } else { //else da primeira parte do if
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = "<strong>Preencha todos os campos corretamente </strong>"
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

//função do botão eye icon
// click: evento ao clicar
bnt.addEventListener('click', ()=> {
  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

bntConfirm.addEventListener('click', ()=> {
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})