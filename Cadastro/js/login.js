//função do botão eye icon
//querySelector: procurar a classe
let bnt = document.querySelector('.fa-eye')

bnt.addEventListener('click', ()=> {
  let inputSenha = document.querySelector('#senha')

  // getAttribute: pegar o tipo da variável
  // get: pegar, set: colocar
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text') //trocar o type para texto
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

//função do botão 'entrar'
function entrar(){

  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#userLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []

  //variavel recebendo campos q queremos obter do localStorage
  let userValid = {
    nome: null,
    user: null,
    senha: null
  }

  //implementando a lista com os dados do localStorage
  // localStorage só aceita strings
  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  //forEach: varrer a lista de user item por item
  //item: o que foi cadastrado
  listaUser.forEach((item) => {
    //if: valor do input usuário for igual ao user e senha cadastrado, pegue o userValid e incremente
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad
      }
    }
    //se os valores estiverem corretos, os dados serão auto-preenchidos e o acesso, liberado
  });

  //if: usuário cadastrado = usuário digitado no login e a senha cadastrada = senha digitada
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    //se tudo der certo, será direcionado à página principal
    window.location.href = '../html/index.html'
    
    //gerar um token ao usuário, se for existente no localStorage, garante que o usuário está logado, se não, mande ao login.
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
    //guardar o token
    localStorage.setItem('token', token)

    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    //mesagem caso os campos estejam errados
    msgError.innerHTML = 'Usuário ou senha inválido'
    // ao clicar no botão entrar e estiver errado, o cursor volta ao input do usuário
    usuario.focus()
  }

}