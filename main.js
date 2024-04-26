function toggleFaq(element) {
    //Abre o elemento div que esta com display "none"
    // Seleciona o elemento de conteúdo dentro da div clicada
    var content = element.querySelector('.content_faq');
    // Alterna a classe 'hidden' para mostrar ou ocultar o conteúdo
    content.classList.toggle('hidden');
}

function toggleFaq(element) {
    //Function para fechar Div apos clicar em outra & trocar o elemento "i"
    // Seleciona o elemento de conteúdo dentro da div clicada
    var content = element.querySelector('.content_faq');
    // Verifica se a seção clicada está atualmente aberta
    var isOpen = !content.classList.contains('hidden');
    // Fecha todas as seções de FAQ
    var faqs = document.querySelectorAll('.container_faq');
    faqs.forEach(function (faq) {
        var faqContent = faq.querySelector('.content_faq');
        if (faqContent !== content) {
            faqContent.classList.add('hidden');
            faq.querySelector('i').classList.remove('fa-minus');
            faq.querySelector('i').classList.add('fa-plus');
        }
    });

    // Alterna a classe 'hidden' para mostrar ou ocultar o conteúdo
    content.classList.toggle('hidden');
    // Alterna entre os ícones "+" e "-" dependendo se a seção está aberta ou fechada
    var icon = element.querySelector('i');
    if (isOpen) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}

//Valor do Select em Media querie 420PX
function alterarValor() {
    var select = document.getElementById("language");
    select.value = "opcao2"; // Altera o valor para "opcao2"
}
function verificarTamanhoTela() {
    var larguraTela = window.innerWidth;
    var select = document.getElementById("language");

    if (larguraTela <= 420) {
        select.value = "opcao2"; // Altera o valor para "opcao2" quando a largura da tela for menor ou igual a 420px
    } else {
        // Lógica de fallback se a largura da tela for maior que 420px
        // Aqui, você pode optar por não fazer nada ou restaurar o valor original do select, se necessário
    }
}
// Adiciona um ouvinte de evento de redimensionamento da janela
window.addEventListener("resize", verificarTamanhoTela);
// Chama a função para verificar o tamanho da tela quando a página carrega
verificarTamanhoTela();