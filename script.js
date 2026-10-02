const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const animal = document.getElementById("animal").value;
    const tipo = document.getElementById("tipo").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    if (
        nome === "" ||
        email === "" ||
        telefone === "" ||
        animal === "" ||
        tipo === "" ||
        servico === ""
    ) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    console.log({
        nome,
        email,
        telefone,
        animal,
        tipo,
        servico,
        mensagem
    });

    window.location.href = "sucesso.html";
});
