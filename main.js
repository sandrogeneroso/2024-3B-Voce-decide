const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Enunciado 01",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 02",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostrarPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostrarPerguntas();