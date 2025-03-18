


let amigos = [];


function adicionarAmigo() {
    
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); 

    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; 
    }

    
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    
    amigos.push(nome);

    
    alert("O nome '" + nome + "' foi adicionado com sucesso!");

    
    atualizarLista();

    
    nomeInput.value = '';
}


function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    
    
    lista.innerHTML = '';

    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    
    const amigoSorteado = amigos[indiceAleatorio];


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}