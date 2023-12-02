

function validarNome(){

    var nomeInput = document.getElementById('nome')
    var erroNome = document.getElementById('erro-nome');

    if (nomeInput.checkValidity() || nomeInput.value =='') {
        erroNome.style.display = 'none';
      } else {
        erroNome.style.display = 'block';
      }

}

function validarEmail(){

    var emailInput = document.getElementById('email')
    var erroEmail = document.getElementById('erro-email');

    if (emailInput.checkValidity() || emailInput.value =='') {
        erroEmail.style.display = 'none';
      } else {   
        erroEmail.style.display = 'block';
      }
}

function validarIdade(){

    var idadeInput = document.getElementById('idade')
    var erroIdade = document.getElementById('erro-idade');

    var idadeValue = parseInt(idadeInput.value, 10);

    if (isNaN(idadeValue) || idadeValue < 1 || idadeValue > 120) {
        erroIdade.style.display = 'block';
      } else {
        erroIdade.style.display = 'none';
      }
}

function salvarDados() {

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var idade = document.getElementById('idade').value;
  var saude = document.getElementById('saude').value;
  var mensagem = document.getElementById('mensagem').value;

  var dadosFormulario = {
      nome: nome,
      email: email,
      idade: idade,
      saude: saude,
      mensagem: mensagem
  };

  localStorage.setItem(nome.toString(), JSON.stringify(dadosFormulario));

  alert('Formulário enviado com sucesso!');

  window.location.href = 'index.html';
  document.documentElement.scrollTop = 0;

}

function limparCampos(){

  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('idade').value = '';
  document.getElementById('mensagem').value = '';

  alert('campos limpos')

}