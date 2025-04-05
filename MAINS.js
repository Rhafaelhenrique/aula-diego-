document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});
// Função para alternar o contraste de cores
function alternarContraste() {
    const body = document.body;
    if (body.classList.contains("contraste-alto")) {
        body.classList.remove("contraste-alto");
    } else {
        body.classList.add("contraste-alto");
    }
}

// Event listener para o botão
document.getElementById("alterna-contraste").addEventListener("click", alternarContraste);
