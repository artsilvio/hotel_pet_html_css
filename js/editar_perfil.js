
// Obtém o formulário de edição do perfil.
const formEditarPerfil = document.getElementById("form-editar-perfil");

// Detecta quando o formulário é enviado.
formEditarPerfil.addEventListener("submit", function (evento) {

    // Impede o envio padrão do formulário.
    evento.preventDefault();

    // Informa que o perfil foi editado.
    alert("Perfil editado com sucesso!");

    // Retorna para a tela de perfil.
    window.location.href = "editar_perfil.html";
});
