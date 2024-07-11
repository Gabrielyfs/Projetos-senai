const bntSavar = document.querySelector('#salvar')
const campo = document.querySelector('#campo')

const pMensagem = document.createElement('p')

bntSavar.addEventListener('click', ()=>{
    const valor = campo.value

    if(valor.trim() === ''){

        pMensagem.textContent = 'campo obrigatorio'
        campo.insertAdjacentElement('afterend', pMensagem)
        pMensagem.setAttribute('class', 'error')
        return;
    }

    //salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`
    localStorage.setItem(chave, valor);

    //limpar campo
    campo.value = ''
    
    carregarValoresSalvos()
})