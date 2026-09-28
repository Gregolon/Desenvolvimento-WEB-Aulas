
const campoTarefa = document.getElementById('campo-tarefa');
const botaoAdicionar = document.getElementById('botao-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');


function adicionarTarefa() {
  const texto = campoTarefa.value.trim();

  
  if (texto === '') {
    alert('Digite uma tarefa antes de adicionar!');
    return;
  }

  
  const novoItem = document.createElement('li');


  novoItem.innerHTML = `
    <label>
      <input type="checkbox" class="caixa-marcar">
      <span>${texto}</span>
    </label>
    <button class="botao-remover">Remover</button>
  `;


  listaTarefas.appendChild(novoItem);

  campoTarefa.value = '';
  campoTarefa.focus();
}


botaoAdicionar.addEventListener('click', adicionarTarefa);


listaTarefas.addEventListener('click', function (evento) {
  const elementoClicado = evento.target;

  
  if (elementoClicado.classList.contains('botao-remover')) {
    const itemLi = elementoClicado.closest('li');
    itemLi.remove();
  }

 
  if (elementoClicado.classList.contains('caixa-marcar')) {
    const itemLi = elementoClicado.closest('li');
    itemLi.classList.toggle('concluida');
  }
});