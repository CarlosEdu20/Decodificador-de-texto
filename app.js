let textInput = document.querySelector("#input-text");
let outInput = document.querySelector("#conteudo__saida__inicial");

function criptografar() {
    let texto = textInput.value;

    if(validarTexto(texto)){
        let textCript = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        outInput.innerHTML = `<h2 id="output-text">${textCript}</h2><button class="btn-copiar" onclick="copiar()">Copiar</button>`;
    }
}

function descriptografar() {
    let texto = textInput.value;

    if(validarTexto(texto)){
        let textDescript = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        outInput.innerHTML = `<h2 id="output-text">${textDescript}</h2><button class="btn-copiar" onclick="copiar()">Copiar</button>`;

    }
}

function copiar() {
    let textoCopiar = document.getElementById("output-text");
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(textoCopiar);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');

    let mensagem_copy = "Mensagem copiada!";
    
    // Adiciona a mensagem abaixo do texto criptografado
    let mensagemElemento = document.createElement("h2");
    mensagemElemento.textContent = mensagem_copy;
    mensagemElemento.style.marginTop = "10px"; // Ajuste o espaçamento conforme necessário

    let MensagemExiste = document.getElementById("mensagem-copy")

    if (MensagemExiste){

        MensagemExiste.remove()
        
    }
    // Adiciona a mensagem com um ID para futura referência
    mensagemElemento.id = "mensagem-copy";
    outInput.appendChild(mensagemElemento);
    }

function validarTexto(texto){
    let regex =  /^[a-z\s]+$/

    if (regex.test(texto)){
        return true
    }
    else{
        let Texto = textInput.value
        let textaviso =  Texto
        textaviso =  "Texto Inválido! <br> Apenas letras minúsculas, sem pontuação e acento "
        outInput.innerHTML = `<h3 id="output-text">${textaviso}</h3>`;
        return false
    }
}

