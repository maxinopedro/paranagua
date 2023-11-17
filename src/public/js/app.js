const { response } = require ("express");

document
  .getElementById("contactForm")
  .addEventListener("submit", sendDataToServer);

function sendDataToServer(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const data = { nome, email, telefone, mensagem };

  fetch("http://localhost:3333/api/cadastros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
/*       }).then((response) =>{
        if(!response.ok) {
            throw new error (´Erro na requisição: ${response.statusText}´)
        }
        return response.json()

    }).then((responseData) => {
        console.log(´Dados enviados com sucesso: ${responseData}´);
    }).catch((error) =>{
        console.error(´Erro ao enviar dados: ${error}´)
    }) */
})};

