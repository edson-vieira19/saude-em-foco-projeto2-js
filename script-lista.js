window.onload = carregarDados();

function carregarDados() {
  for (var i = 0; i < localStorage.length; i++) {
    var chave = localStorage.key(i);

    if (chave !== null && chave !== undefined && typeof chave === "string") {
      var valor = localStorage.getItem(chave);
      var pessoa = JSON.parse(valor);

      const li = document.createElement("li");

      li.innerHTML = `
    <h4>Nome: ${pessoa.nome}</h4>
     e-mail: ${pessoa.email} 
     idade: ${pessoa.idade} 
     saúde: ${pessoa.saude} 
     mensagem: ${pessoa.mensagem}
     <a class="delete-button" onclick="excluir('+ pessoa.nome +')">Excluir</a>
  `;
      document.querySelector("#lista-pessoas").appendChild(li);
    }
  }
}

// function excluir(nome){

//   for (var i = 0; i < localStorage.length; i++) {
//     var chave = localStorage.key(i);
//     if (chave == nome) {
//       localStorage.removeItem(chave);
//     }
//   }
// }