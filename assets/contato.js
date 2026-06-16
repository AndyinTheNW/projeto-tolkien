const form = document.querySelector("#form-contato");
const retorno = document.querySelector("#retorno-formulario");

if (form && retorno) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        retorno.textContent = "Mensagem registrada com sucesso. Obrigado pelo contato!";
        form.reset();
    });
}
