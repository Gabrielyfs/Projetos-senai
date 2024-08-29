let bnt = document.querySelector('.fa-eye')
let bntEntrar = document.querySelector('#entrar')
let logo = document.querySelector('#logo')

bnt.addEventListener('click', () =>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});

bntEntrar.addEventListener('click', () => {
    window.location.href =  "./home.html"
 } ); 

 logo.addEventListener('click', () => {
    window.location.href =  "./home.html"
});