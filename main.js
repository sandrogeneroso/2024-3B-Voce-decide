const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Carlos é um estudantede pele  negra do ensino medio isso faz ele sofrer ameaças como Carlos deveria agir com a situação",
        alternativas: [
            {
                texto:"chamar os monitores e resolver de forma pacífica",
                afirmacao: "O garoto levou a mãe na escola e os pais dos alunos forão chamados tudo foi resolvido com uma suspenção"
            },
            {
                texto:"levar armas e causar um grande conflito",
                afirmacao: "Carlos leva armas para escola mas é pego e foi expulso"
            }   
        ]
    },
    {
        enunciado: "Um mes se passa com tudo resolvido querendo acabar com essas situação Carlos resolve ter uma ideia",
        alternativas: [
            {
                texto: "fazer um protesto queimando pneu",
                afirmacao: "querendo resolver a situação cria um protesto em frente a escola mas acaba baleado"
            },
            {
                texto: "criar uma pagina na internet dedicado a pessoas que sofrem raçismo",
                afirmacao: "voçe cria uma pagina para combater o raçismo a pagina estoura ganhando milhares de seguidores"
            }
        ]
    },
    {
        enunciado: "andando na rua uma reporte resolve fazer umas pergunta para esclarecer toda essas mudanças em sua vida",
        alternativas: [
            {
                texto: "xingar a reporter de racista batendo nela",
                afirmacao: "voçe acaba batendo na reporte uma multidão corre atras de voçe que acaba se escondendo em um beco"
            },
            {
                texto: "fazer a entrevista exclaresendo toda a situação que voçe passou na vida ",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();