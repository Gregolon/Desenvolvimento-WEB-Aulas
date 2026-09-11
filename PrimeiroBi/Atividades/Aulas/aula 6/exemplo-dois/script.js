function adicionar(evento) {
    evento.preventDefault(); // Evita o comportamento padrão do formulário
    
    if (evento.target[0].value === '') {
        alert("Vacilo! Informe nome produto");
        return; // Sai da função se algum campo estiver vazio
    }
    if (evento.target[1].value === '') {
        alert("Vacilo! Informe a quantidade");
        return; // Sai da função se algum campo estiver vazio
    }
    

    const produto = 'Produto: ' + evento.target[0].value;
    const quantidade = 'Quantidade: ' + evento.target[1].value;

    console.log(evento.target); // Exibe o elemento que disparou o evento
    console.log(evento.target[0].value); // Exibe o valor do primeiro campo do formulário
    console.log(evento.target[1].value); // Exibe o valor do segundo campo do formulário

    const li = document.createElement("li");
    li.textContent = produto + ' - ' + quantidade;

    li.addEventListener("click", () => remover(li));

    const ul = document.querySelector(".container");

    ul.appendChild(li);

    evento.target
}

function remover(elemento){
    console.log(elemento)
    elemento.remove();

}

