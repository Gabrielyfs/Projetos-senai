const login = document.querySelector('#login')

login.addEventListener('click', () => {
  window.location.href = "./login.html"
})

const botao1 = document.getElementById("direita-botao");
const botao2 = document.getElementById("esquerda-botao");


botao1.addEventListener('click', () => {
  const elementoAtivo = document.getElementsByClassName("ativo"); 

  const ele = document.getElementById(elementoAtivo[0].id);
  ele.className = "item current-item";

  // restaurante 1
  if(Number(ele.id.slice(11, 12)) == 6) {
    const proximoElemento = document.getElementById('restaurante1');
    proximoElemento.className = "item current-item ativo"; 
  } else {
    var valor = Number(ele.id.slice(11, 12)) + 1;

    const proximoElemento = document.getElementById('restaurante' + valor);
  
    proximoElemento.className = "item current-item ativo";
    console.log(proximoElemento)  
  }
});
const sobre = document.getElementById('sobre')
sobre.addEventListener('click', () => {
  window.location.href = './sobre.html'
})

