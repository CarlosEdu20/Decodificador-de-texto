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
    alert('Texto copiado');
}

function validarTexto(texto){
    let regex =  /^[a-z\s]+$/

    if (regex.test(texto)){
        return true
    }
    else{
        alert("Texto inválido, Digite apenas letras minúsculas, sem pontuação e sem acento")
        return false
    }
}

