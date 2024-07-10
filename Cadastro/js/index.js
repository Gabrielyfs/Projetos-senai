//caso o usuario entre ser fazer login
if(localStorage.getItem('token') == null){
    alert('Voce precisa estar logado para acessar esta página')
    window.location.href = '../html/login.html'
}

//aparecer: Olá 'fulano'
let userLogado = JSON.parse(localStorage.getItem('userLogado')) 
let logado = document.querySelector('#logado')
logado.innerHTML = `Olá ${userLogado.nome}`

//clicando no botão sair, o token será apagado e voltará à tela de login
function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = '../html/login.html'

}