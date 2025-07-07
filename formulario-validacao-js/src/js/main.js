'use strict'

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("name");
const campoEmail = document.getElementById("email");
const campoTextArea = document.getElementById("textarea");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function () {

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const textArea = campoTextArea.value.trim();

    mensagem.textContent = "";
    campoNome.classList.remove("erro");
    campoEmail.classList.remove("erro");
    campoTextArea.classList.remove("erro");

    let erro = false;

    if (!nome || Number(nome)) {
        campoNome.classList.add("erro");
        erro = true;
    }

    if (!email) {
        campoEmail.classList.add("erro");
        erro = true;
    }

    if (!textArea) {
        console.log("Textarea vazio, aplicando classe erro.");
        campoTextArea.classList.add("erro");
        erro = true;
    }

    if (erro) {
        mensagem.textContent = "Todos os campos do formulário precisam ser preenchidos."
        mensagem.style.color = "red";
    } else {
        mensagem.innerHTML = `Obrigado pelo contato, <strong>${nome}</strong>! Responderemos em breve no e-mail <strong>${email}</strong>.`
        mensagem.style.color = "green";
        formulario.reset();
    }

});



