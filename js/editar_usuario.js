
// Obtém o formulário de edição de usuário.
const formEditarUsuario = document.getElementById("form-editar-usuario");

// Detecta o envio do formulário.
formEditarUsuario.addEventListener("submit", function (evento) {

    // Impede o recarregamento padrão da página.
    evento.preventDefault();

    // Exibe a mensagem de sucesso.
    alert("Usuário editado com sucesso!");

    // Retorna para a lista de usuários.
    window.location.href = "usuarios.html";
});
