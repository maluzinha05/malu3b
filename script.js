const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está jogando um jogo de aventura e encontra uma espada mágica. O que você faz?",
        alternativas: [
            {
                texto: "Pegar a espada mágica.",
                afirmacao: "Você agora possui uma poderosa espada mágica!"
            },
            {
                texto: "Deixar a espada onde está.",
                afirmacao: "Você decide que a espada pode estar amaldiçoada e continua sua jornada sem ela."
            }
        ]
    },
    {
        enunciado: "Enquanto explora, você encontra um misterioso personagem que oferece uma missão. O que você faz?",
        alternativas: [
            {
                texto: "Aceitar a missão.",
                afirmacao: "Você aceita a missão e ganha uma pista importante para a aventura."
            },
            {
                texto: "Recusar a missão.",
                afirmacao: "Você decide continuar sua própria jornada sem desvios."
            }
        ]
    },
    {
        enunciado: "Você chega a uma encruzilhada com dois caminhos. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "O caminho da direita, que parece seguro.",
                afirmacao: "Você escolheu o caminho seguro e encontrou um tesouro escondido."
            },
            {
                texto: "O caminho da esquerda, que parece perigoso.",
                afirmacao: "Você enfrenta perigos, mas descobre segredos valiosos."
            }
        ]
    },
    {
        enunciado: "Você encontra um dragão guardando uma caverna. O que você faz?",
        alternativas: [
            {
                texto: "Tentar passar furtivamente pelo dragão.",
                afirmacao: "Você consegue passar pelo dragão sem ser notado."
            },
            {
                texto: "Enfrentar o dragão em batalha.",
                afirmacao: "Você derrota o dragão e ganha uma recompensa incrível."
            }
        ]
    },
    {
        enunciado: "No final da sua jornada, você encontra o chefe final. Como você se prepara?",
        alternativas: [
            {
                texto: "Revisar suas armas e itens.",
                afirmacao: "Você está bem preparado para a batalha final."
            },
            {
                texto: "Treinar suas habilidades de combate.",
                afirmacao: "Você está no auge de suas habilidades para enfrentar o chefe final."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da aventura!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta()
