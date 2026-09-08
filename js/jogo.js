/* =========================================================
   CAÇA AOS ELEMENTOS

   MECÂNICA PRINCIPAL DO JOGO

   RESPONSÁVEL POR:

   - Criar a Tabela Periódica
   - Aplicar categorias e cores
   - Selecionar elementos
   - Remover elementos
   - Limpar seleção
   - Verificar resposta
   - Mostrar modal
   - Gerar gráfico
   - Avançar níveis
========================================================= */


/* =========================================================
   VARIÁVEIS PRINCIPAIS
========================================================= */

let nivelAtual = 1;

let ligaAtual = null;

let elementosEscolhidos = [];

let graficoAtual = null;

let ligasUtilizadas = [];


/* =========================================================
   CORES DO GRÁFICO
========================================================= */

const coresGrafico = [

    "#00b8e6",
    "#ffb703",
    "#8ac926",
    "#ff595e",
    "#9b5de5",
    "#f72585",
    "#4cc9f0"

];


/* =========================================================
   TABELA PERIÓDICA

   numero
   simbolo
   nome
   grupo
   periodo
========================================================= */

const elementosTabela = [

    /* =====================================================
       PERÍODO 1
    ===================================================== */

    { numero: 1, simbolo: "H", nome: "Hidrogênio", grupo: 1, periodo: 1 },

    { numero: 2, simbolo: "He", nome: "Hélio", grupo: 18, periodo: 1 },


    /* =====================================================
       PERÍODO 2
    ===================================================== */

    { numero: 3, simbolo: "Li", nome: "Lítio", grupo: 1, periodo: 2 },

    { numero: 4, simbolo: "Be", nome: "Berílio", grupo: 2, periodo: 2 },

    { numero: 5, simbolo: "B", nome: "Boro", grupo: 13, periodo: 2 },

    { numero: 6, simbolo: "C", nome: "Carbono", grupo: 14, periodo: 2 },

    { numero: 7, simbolo: "N", nome: "Nitrogênio", grupo: 15, periodo: 2 },

    { numero: 8, simbolo: "O", nome: "Oxigênio", grupo: 16, periodo: 2 },

    { numero: 9, simbolo: "F", nome: "Flúor", grupo: 17, periodo: 2 },

    { numero: 10, simbolo: "Ne", nome: "Neônio", grupo: 18, periodo: 2 },


    /* =====================================================
       PERÍODO 3
    ===================================================== */

    { numero: 11, simbolo: "Na", nome: "Sódio", grupo: 1, periodo: 3 },

    { numero: 12, simbolo: "Mg", nome: "Magnésio", grupo: 2, periodo: 3 },

    { numero: 13, simbolo: "Al", nome: "Alumínio", grupo: 13, periodo: 3 },

    { numero: 14, simbolo: "Si", nome: "Silício", grupo: 14, periodo: 3 },

    { numero: 15, simbolo: "P", nome: "Fósforo", grupo: 15, periodo: 3 },

    { numero: 16, simbolo: "S", nome: "Enxofre", grupo: 16, periodo: 3 },

    { numero: 17, simbolo: "Cl", nome: "Cloro", grupo: 17, periodo: 3 },

    { numero: 18, simbolo: "Ar", nome: "Argônio", grupo: 18, periodo: 3 },


    /* =====================================================
       PERÍODO 4
    ===================================================== */

    { numero: 19, simbolo: "K", nome: "Potássio", grupo: 1, periodo: 4 },

    { numero: 20, simbolo: "Ca", nome: "Cálcio", grupo: 2, periodo: 4 },

    { numero: 21, simbolo: "Sc", nome: "Escândio", grupo: 3, periodo: 4 },

    { numero: 22, simbolo: "Ti", nome: "Titânio", grupo: 4, periodo: 4 },

    { numero: 23, simbolo: "V", nome: "Vanádio", grupo: 5, periodo: 4 },

    { numero: 24, simbolo: "Cr", nome: "Cromo", grupo: 6, periodo: 4 },

    { numero: 25, simbolo: "Mn", nome: "Manganês", grupo: 7, periodo: 4 },

    { numero: 26, simbolo: "Fe", nome: "Ferro", grupo: 8, periodo: 4 },

    { numero: 27, simbolo: "Co", nome: "Cobalto", grupo: 9, periodo: 4 },

    { numero: 28, simbolo: "Ni", nome: "Níquel", grupo: 10, periodo: 4 },

    { numero: 29, simbolo: "Cu", nome: "Cobre", grupo: 11, periodo: 4 },

    { numero: 30, simbolo: "Zn", nome: "Zinco", grupo: 12, periodo: 4 },

    { numero: 31, simbolo: "Ga", nome: "Gálio", grupo: 13, periodo: 4 },

    { numero: 32, simbolo: "Ge", nome: "Germânio", grupo: 14, periodo: 4 },

    { numero: 33, simbolo: "As", nome: "Arsênio", grupo: 15, periodo: 4 },

    { numero: 34, simbolo: "Se", nome: "Selênio", grupo: 16, periodo: 4 },

    { numero: 35, simbolo: "Br", nome: "Bromo", grupo: 17, periodo: 4 },

    { numero: 36, simbolo: "Kr", nome: "Criptônio", grupo: 18, periodo: 4 },


    /* =====================================================
       PERÍODO 5
    ===================================================== */

    { numero: 37, simbolo: "Rb", nome: "Rubídio", grupo: 1, periodo: 5 },

    { numero: 38, simbolo: "Sr", nome: "Estrôncio", grupo: 2, periodo: 5 },

    { numero: 39, simbolo: "Y", nome: "Ítrio", grupo: 3, periodo: 5 },

    { numero: 40, simbolo: "Zr", nome: "Zircônio", grupo: 4, periodo: 5 },

    { numero: 41, simbolo: "Nb", nome: "Nióbio", grupo: 5, periodo: 5 },

    { numero: 42, simbolo: "Mo", nome: "Molibdênio", grupo: 6, periodo: 5 },

    { numero: 43, simbolo: "Tc", nome: "Tecnécio", grupo: 7, periodo: 5 },

    { numero: 44, simbolo: "Ru", nome: "Rutênio", grupo: 8, periodo: 5 },

    { numero: 45, simbolo: "Rh", nome: "Ródio", grupo: 9, periodo: 5 },

    { numero: 46, simbolo: "Pd", nome: "Paládio", grupo: 10, periodo: 5 },

    { numero: 47, simbolo: "Ag", nome: "Prata", grupo: 11, periodo: 5 },

    { numero: 48, simbolo: "Cd", nome: "Cádmio", grupo: 12, periodo: 5 },

    { numero: 49, simbolo: "In", nome: "Índio", grupo: 13, periodo: 5 },

    { numero: 50, simbolo: "Sn", nome: "Estanho", grupo: 14, periodo: 5 },

    { numero: 51, simbolo: "Sb", nome: "Antimônio", grupo: 15, periodo: 5 },

    { numero: 52, simbolo: "Te", nome: "Telúrio", grupo: 16, periodo: 5 },

    { numero: 53, simbolo: "I", nome: "Iodo", grupo: 17, periodo: 5 },

    { numero: 54, simbolo: "Xe", nome: "Xenônio", grupo: 18, periodo: 5 },


    /* =====================================================
       PERÍODO 6
    ===================================================== */

    { numero: 55, simbolo: "Cs", nome: "Césio", grupo: 1, periodo: 6 },

    { numero: 56, simbolo: "Ba", nome: "Bário", grupo: 2, periodo: 6 },

    { numero: 57, simbolo: "La", nome: "Lantânio", grupo: 3, periodo: 6 },

    { numero: 72, simbolo: "Hf", nome: "Háfnio", grupo: 4, periodo: 6 },

    { numero: 73, simbolo: "Ta", nome: "Tântalo", grupo: 5, periodo: 6 },

    { numero: 74, simbolo: "W", nome: "Tungstênio", grupo: 6, periodo: 6 },

    { numero: 75, simbolo: "Re", nome: "Rênio", grupo: 7, periodo: 6 },

    { numero: 76, simbolo: "Os", nome: "Ósmio", grupo: 8, periodo: 6 },

    { numero: 77, simbolo: "Ir", nome: "Irídio", grupo: 9, periodo: 6 },

    { numero: 78, simbolo: "Pt", nome: "Platina", grupo: 10, periodo: 6 },

    { numero: 79, simbolo: "Au", nome: "Ouro", grupo: 11, periodo: 6 },

    { numero: 80, simbolo: "Hg", nome: "Mercúrio", grupo: 12, periodo: 6 },

    { numero: 81, simbolo: "Tl", nome: "Tálio", grupo: 13, periodo: 6 },

    { numero: 82, simbolo: "Pb", nome: "Chumbo", grupo: 14, periodo: 6 },

    { numero: 83, simbolo: "Bi", nome: "Bismuto", grupo: 15, periodo: 6 },

    { numero: 84, simbolo: "Po", nome: "Polônio", grupo: 16, periodo: 6 },

    { numero: 85, simbolo: "At", nome: "Astato", grupo: 17, periodo: 6 },

    { numero: 86, simbolo: "Rn", nome: "Radônio", grupo: 18, periodo: 6 },


    /* =====================================================
       PERÍODO 7
    ===================================================== */

    { numero: 87, simbolo: "Fr", nome: "Frâncio", grupo: 1, periodo: 7 },

    { numero: 88, simbolo: "Ra", nome: "Rádio", grupo: 2, periodo: 7 },

    { numero: 89, simbolo: "Ac", nome: "Actínio", grupo: 3, periodo: 7 },

    { numero: 104, simbolo: "Rf", nome: "Rutherfórdio", grupo: 4, periodo: 7 },

    { numero: 105, simbolo: "Db", nome: "Dúbnio", grupo: 5, periodo: 7 },

    { numero: 106, simbolo: "Sg", nome: "Seabórgio", grupo: 6, periodo: 7 },

    { numero: 107, simbolo: "Bh", nome: "Bóhrio", grupo: 7, periodo: 7 },

    { numero: 108, simbolo: "Hs", nome: "Hássio", grupo: 8, periodo: 7 },

    { numero: 109, simbolo: "Mt", nome: "Meitnério", grupo: 9, periodo: 7 },

    { numero: 110, simbolo: "Ds", nome: "Darmstádtio", grupo: 10, periodo: 7 },

    { numero: 111, simbolo: "Rg", nome: "Roentgênio", grupo: 11, periodo: 7 },

    { numero: 112, simbolo: "Cn", nome: "Copernício", grupo: 12, periodo: 7 },

    { numero: 113, simbolo: "Nh", nome: "Nihônio", grupo: 13, periodo: 7 },

    { numero: 114, simbolo: "Fl", nome: "Fleróvio", grupo: 14, periodo: 7 },

    { numero: 115, simbolo: "Mc", nome: "Moscóvio", grupo: 15, periodo: 7 },

    { numero: 116, simbolo: "Lv", nome: "Livermório", grupo: 16, periodo: 7 },

    { numero: 117, simbolo: "Ts", nome: "Tenessino", grupo: 17, periodo: 7 },

    { numero: 118, simbolo: "Og", nome: "Oganessônio", grupo: 18, periodo: 7 },


    /* =====================================================
       LANTANÍDEOS

       LINHA 8
       COMEÇA NA COLUNA 4
    ===================================================== */

    { numero: 58, simbolo: "Ce", nome: "Cério", grupo: 5, periodo: 8 },

    { numero: 59, simbolo: "Pr", nome: "Praseodímio", grupo: 6, periodo: 8 },

    { numero: 60, simbolo: "Nd", nome: "Neodímio", grupo: 7, periodo: 8 },

    { numero: 61, simbolo: "Pm", nome: "Promécio", grupo: 8, periodo: 8 },

    { numero: 62, simbolo: "Sm", nome: "Samário", grupo: 9, periodo: 8 },

    { numero: 63, simbolo: "Eu", nome: "Európio", grupo: 10, periodo: 8 },

    { numero: 64, simbolo: "Gd", nome: "Gadolínio", grupo: 11, periodo: 8 },

    { numero: 65, simbolo: "Tb", nome: "Térbio", grupo: 12, periodo: 8 },

    { numero: 66, simbolo: "Dy", nome: "Disprósio", grupo: 13, periodo: 8 },

    { numero: 67, simbolo: "Ho", nome: "Hólmio", grupo: 14, periodo: 8 },

    { numero: 68, simbolo: "Er", nome: "Érbio", grupo: 15, periodo: 8 },

    { numero: 69, simbolo: "Tm", nome: "Túlio", grupo: 16, periodo: 8 },

    { numero: 70, simbolo: "Yb", nome: "Itérbio", grupo: 17, periodo: 8 },

    { numero: 71, simbolo: "Lu", nome: "Lutécio", grupo: 18, periodo: 8 },


    /* =====================================================
       ACTINÍDEOS

       LINHA 9
       COMEÇA NA COLUNA 4
    ===================================================== */

    { numero: 90, simbolo: "Th", nome: "Tório", grupo: 5, periodo: 9 },

    { numero: 91, simbolo: "Pa", nome: "Protactínio", grupo: 6, periodo: 9 },

    { numero: 92, simbolo: "U", nome: "Urânio", grupo: 7, periodo: 9 },

    { numero: 93, simbolo: "Np", nome: "Netúnio", grupo: 8, periodo: 9 },

    { numero: 94, simbolo: "Pu", nome: "Plutônio", grupo: 9, periodo: 9 },

    { numero: 95, simbolo: "Am", nome: "Amerício", grupo: 10, periodo: 9 },

    { numero: 96, simbolo: "Cm", nome: "Cúrio", grupo: 11, periodo: 9 },

    { numero: 97, simbolo: "Bk", nome: "Berquélio", grupo: 12, periodo: 9 },

    { numero: 98, simbolo: "Cf", nome: "Califórnio", grupo: 13, periodo: 9 },

    { numero: 99, simbolo: "Es", nome: "Einstênio", grupo: 14, periodo: 9 },

    { numero: 100, simbolo: "Fm", nome: "Férmio", grupo: 15, periodo: 9 },

    { numero: 101, simbolo: "Md", nome: "Mendelévio", grupo: 16, periodo: 9 },

    { numero: 102, simbolo: "No", nome: "Nobélio", grupo: 17, periodo: 9 },

    { numero: 103, simbolo: "Lr", nome: "Laurêncio", grupo: 18, periodo: 9 }

];


/* =========================================================
   DADOS COMPLEMENTARES PARA AS SÉRIES INFERIORES

   La E Ac PRECISAM APARECER TAMBÉM NAS LINHAS
   DE LANTANÍDEOS E ACTINÍDEOS.
========================================================= */

const elementosSeries = [

    {
        numero: 57,
        simbolo: "La",
        nome: "Lantânio",
        grupo: 4,
        periodo: 8
    },

    {
        numero: 89,
        simbolo: "Ac",
        nome: "Actínio",
        grupo: 4,
        periodo: 9
    }

];


/* =========================================================
   CLASSIFICAÇÃO QUÍMICA

   ESTA FUNÇÃO É A RESPONSÁVEL POR ATRIBUIR
   AS CLASSES DE COR AOS ELEMENTOS.
========================================================= */

function obterCategoria(simbolo) {


    /* =====================================================
       HIDROGÊNIO
    ===================================================== */

    if (simbolo === "H") {

        return "hidrogenio";

    }


    /* =====================================================
       METAIS ALCALINOS
    ===================================================== */

    const alcalinos = [

        "Li",
        "Na",
        "K",
        "Rb",
        "Cs",
        "Fr"

    ];


    if (alcalinos.includes(simbolo)) {

        return "alcalino";

    }


    /* =====================================================
       METAIS ALCALINO-TERROSOS
    ===================================================== */

    const alcalinoTerrosos = [

        "Be",
        "Mg",
        "Ca",
        "Sr",
        "Ba",
        "Ra"

    ];


    if (alcalinoTerrosos.includes(simbolo)) {

        return "alcalino-terroso";

    }


    /* =====================================================
       LANTANÍDEOS
    ===================================================== */

    const lantanideos = [

        "La",
        "Ce",
        "Pr",
        "Nd",
        "Pm",
        "Sm",
        "Eu",
        "Gd",
        "Tb",
        "Dy",
        "Ho",
        "Er",
        "Tm",
        "Yb",
        "Lu"

    ];


    if (lantanideos.includes(simbolo)) {

        return "lantanideo";

    }


    /* =====================================================
       ACTINÍDEOS
    ===================================================== */

    const actinideos = [

        "Ac",
        "Th",
        "Pa",
        "U",
        "Np",
        "Pu",
        "Am",
        "Cm",
        "Bk",
        "Cf",
        "Es",
        "Fm",
        "Md",
        "No",
        "Lr"

    ];


    if (actinideos.includes(simbolo)) {

        return "actinideo";

    }


    /* =====================================================
       GASES NOBRES
    ===================================================== */

    const gasesNobres = [

        "He",
        "Ne",
        "Ar",
        "Kr",
        "Xe",
        "Rn",
        "Og"

    ];


    if (gasesNobres.includes(simbolo)) {

        return "gas-nobre";

    }


    /* =====================================================
       HALOGÊNIOS
    ===================================================== */

    const halogenios = [

        "F",
        "Cl",
        "Br",
        "I",
        "At",
        "Ts"

    ];


    if (halogenios.includes(simbolo)) {

        return "halogenio";

    }


    /* =====================================================
       METALOIDES
    ===================================================== */

    const metaloides = [

        "B",
        "Si",
        "Ge",
        "As",
        "Sb",
        "Te"

    ];


    if (metaloides.includes(simbolo)) {

        return "metaloide";

    }


    /* =====================================================
       NÃO METAIS
    ===================================================== */

    const naoMetais = [

        "C",
        "N",
        "O",
        "P",
        "S",
        "Se"

    ];


    if (naoMetais.includes(simbolo)) {

        return "nao-metal";

    }


    /* =====================================================
       METAIS PÓS-TRANSIÇÃO
    ===================================================== */

    const posTransicao = [

        "Al",
        "Ga",
        "In",
        "Tl",
        "Sn",
        "Pb",
        "Bi",
        "Po",
        "Nh",
        "Fl",
        "Mc",
        "Lv"

    ];


    if (posTransicao.includes(simbolo)) {

        return "pos-transicao";

    }


    /* =====================================================
       METAIS DE TRANSIÇÃO

       TODO O RESTANTE É CLASSIFICADO AQUI.
    ===================================================== */

    return "transicao";

}


/* =========================================================
   ELEMENTOS DO HTML
========================================================= */

const tabelaPeriodica =

    document.getElementById(
        "tabelaPeriodica"
    );


const elementosSelecionados =

    document.getElementById(
        "elementosSelecionados"
    );


const nomeLiga =

    document.getElementById(
        "nomeLiga"
    );


const nivelTexto =

    document.getElementById(
        "nivelAtual"
    );


const btnVerificar =

    document.getElementById(
        "btnVerificar"
    );


const btnLimpar =

    document.getElementById(
        "btnLimpar"
    );


const modal =

    document.getElementById(
        "modal"
    );


const btnModal =

    document.getElementById(
        "btnModal"
    );


const modalTitulo =

    document.getElementById(
        "modalTitulo"
    );


const modalMensagem =

    document.getElementById(
        "modalMensagem"
    );


const modalIcone =

    document.getElementById(
        "modalIcone"
    );


const areaGraficoModal =

    document.getElementById(
        "areaGraficoModal"
    );


const legendaGrafico =

    document.getElementById(
        "legendaGrafico"
    );


/* =========================================================
   INICIAR JOGO
========================================================= */

function iniciarJogo() {


    criarTabelaPeriodica();


    gerarNovaLiga();


    atualizarNivel();


    atualizarElementosSelecionados();

}


/* =========================================================
   CRIAR UM BOTÃO DE ELEMENTO
========================================================= */

function criarBotaoElemento(elemento) {


    const botao =

        document.createElement(
            "button"
        );


    botao.type = "button";


    /* CLASSE BASE */

    botao.classList.add(
        "elemento"
    );


    /* =====================================================
       ADICIONA A CATEGORIA QUÍMICA

       É ISSO QUE FAZ AS CORES FUNCIONAREM.
    ===================================================== */

    const categoria =

        obterCategoria(
            elemento.simbolo
        );


    botao.classList.add(
        categoria
    );


    /* POSIÇÃO NA TABELA */

    botao.style.gridColumn =

        elemento.grupo;


    botao.style.gridRow =

        elemento.periodo;


    /* IDENTIFICAÇÃO */

    botao.dataset.simbolo =

        elemento.simbolo;


    botao.dataset.numero =

        elemento.numero;


    /* =====================================================
       CONTEÚDO DO ELEMENTO
    ===================================================== */

    botao.innerHTML = `

        <span class="numero-atomico">

            ${elemento.numero}

        </span>


        <span class="simbolo-elemento">

            ${elemento.simbolo}

        </span>


        <span class="nome-elemento">

            ${elemento.nome}

        </span>

    `;


    /* =====================================================
       EVENTO DE CLIQUE
    ===================================================== */

    botao.addEventListener(

        "click",

        () => {

            selecionarElemento(
                elemento.simbolo
            );

        }

    );


    return botao;

}


/* =========================================================
   CRIAR TABELA PERIÓDICA
========================================================= */

function criarTabelaPeriodica() {


    tabelaPeriodica.innerHTML = "";


    /* =====================================================
       TABELA PRINCIPAL
    ===================================================== */

    elementosTabela.forEach(

        elemento => {

            const botao =

                criarBotaoElemento(
                    elemento
                );


            tabelaPeriodica.appendChild(
                botao
            );

        }

    );


    /* =====================================================
       SÉRIES INFERIORES

       La
       Ac
    ===================================================== */

    elementosSeries.forEach(

        elemento => {

            const botao =

                criarBotaoElemento(
                    elemento
                );


            tabelaPeriodica.appendChild(
                botao
            );

        }

    );

}


/* =========================================================
   SELECIONAR ELEMENTO
========================================================= */

function selecionarElemento(simbolo) {


    /* NÃO PERMITE DUPLICAÇÃO */

    if (

        elementosEscolhidos.includes(
            simbolo
        )

    ) {

        return;

    }


    /* ADICIONA À RESPOSTA */

    elementosEscolhidos.push(
        simbolo
    );


    atualizarElementosSelecionados();


    atualizarBotoesTabela();

}


/* =========================================================
   ATUALIZAR ELEMENTOS SELECIONADOS
========================================================= */

function atualizarElementosSelecionados() {


    elementosSelecionados.innerHTML = "";


    /* =====================================================
       QUANDO NÃO HÁ ELEMENTOS
    ===================================================== */

    if (

        elementosEscolhidos.length === 0

    ) {


        elementosSelecionados.innerHTML = `

            <p class="mensagem-vazia">

                Selecione os elementos

            </p>

        `;


        return;

    }


    /* =====================================================
       CRIAR OS CARTÕES
    ===================================================== */

    elementosEscolhidos.forEach(

        simbolo => {


            const elemento =

                elementosTabela.find(

                    item =>

                        item.simbolo === simbolo

                );


            if (!elemento) {

                return;

            }


            const cartao =

                document.createElement(
                    "div"
                );


            cartao.classList.add(
                "elemento-selecionado"
            );


            cartao.innerHTML = `

                <button
                    class="remover-elemento"
                    type="button"
                    title="Remover elemento"
                >

                    ×

                </button>


                <div class="simbolo">

                    ${elemento.simbolo}

                </div>


                <div class="nome">

                    ${elemento.nome}

                </div>

            `;


            const botaoRemover =

                cartao.querySelector(
                    ".remover-elemento"
                );


            botaoRemover.addEventListener(

                "click",

                () => {

                    removerElemento(
                        simbolo
                    );

                }

            );


            elementosSelecionados.appendChild(
                cartao
            );

        }

    );

}


/* =========================================================
   REMOVER ELEMENTO
========================================================= */

function removerElemento(simbolo) {


    elementosEscolhidos =

        elementosEscolhidos.filter(

            item =>

                item !== simbolo

        );


    atualizarElementosSelecionados();


    atualizarBotoesTabela();

}


/* =========================================================
   ATUALIZAR BOTÕES DA TABELA
========================================================= */

function atualizarBotoesTabela() {


    const botoes =

        document.querySelectorAll(
            ".elemento"
        );


    botoes.forEach(

        botao => {


            const simbolo =

                botao.dataset.simbolo;


            if (

                elementosEscolhidos.includes(
                    simbolo
                )

            ) {


                botao.classList.add(
                    "selecionado"
                );


            } else {


                botao.classList.remove(
                    "selecionado"
                );

            }

        }

    );

}


/* =========================================================
   GERAR NOVA LIGA
========================================================= */

function gerarNovaLiga() {


    /*
       Verificação de segurança caso o arquivo
       dadosLigas.js não tenha sido carregado.
    */

    if (

        typeof ligasMetalicas === "undefined"

    ) {

        console.error(

            "O arquivo dadosLigas.js não foi carregado."

        );

        return;

    }


    /* =====================================================
       REINICIA QUANDO TODAS AS LIGAS FORAM UTILIZADAS
    ===================================================== */

    if (

        ligasUtilizadas.length >=
        ligasMetalicas.length

    ) {

        ligasUtilizadas = [];

    }


    /* =====================================================
       FILTRA LIGAS DISPONÍVEIS
    ===================================================== */

    const ligasDisponiveis =

        ligasMetalicas.filter(

            liga =>

                !ligasUtilizadas.includes(
                    liga.nome
                )

        );


    /* =====================================================
       ESCOLHE UMA LIGA ALEATÓRIA
    ===================================================== */

    const indiceAleatorio =

        Math.floor(

            Math.random() *
            ligasDisponiveis.length

        );


    ligaAtual =

        ligasDisponiveis[
            indiceAleatorio
        ];


    /* REGISTRA A LIGA */

    ligasUtilizadas.push(
        ligaAtual.nome
    );


    /* ATUALIZA A PERGUNTA */

    nomeLiga.textContent =

        ligaAtual.nome;


    /* LIMPA A RESPOSTA */

    elementosEscolhidos = [];


    atualizarElementosSelecionados();


    atualizarBotoesTabela();

}


/* =========================================================
   VERIFICAR RESPOSTA
========================================================= */

function verificarResposta() {


    /* =====================================================
       NÃO DEIXA VERIFICAR SEM ELEMENTOS
    ===================================================== */

    if (

        elementosEscolhidos.length === 0

    ) {


        mostrarModalErro(

            "⚠",

            "ATENÇÃO!",

            "Selecione pelo menos um elemento antes de verificar."

        );


        return;

    }


    /* =====================================================
       RESPOSTA CORRETA
    ===================================================== */

    const respostaCorreta =

        [...ligaAtual.elementos]
            .sort();


    /* =====================================================
       RESPOSTA DO JOGADOR
    ===================================================== */

    const respostaJogador =

        [...elementosEscolhidos]
            .sort();


    /* COMPARA QUANTIDADE */

    const mesmaQuantidade =

        respostaCorreta.length ===
        respostaJogador.length;


    /* COMPARA ELEMENTOS */

    const mesmosElementos =

        respostaCorreta.every(

            (elemento, indice) =>

                elemento ===
                respostaJogador[indice]

        );


    /* =====================================================
       RESULTADO
    ===================================================== */

    if (

        mesmaQuantidade &&
        mesmosElementos

    ) {


        respostaCorretaAcertada();


    } else {


        respostaIncorreta();

    }

}


/* =========================================================
   RESPOSTA CORRETA
========================================================= */

function respostaCorretaAcertada() {


    /* ÍCONE */

    modalIcone.textContent =

        "✓";


    modalIcone.style.background =

        "#0e9f70";


    /* TÍTULO */

    modalTitulo.textContent =

        "CORRETO!";


    /* MENSAGEM */

    modalMensagem.textContent =

        `Parabéns! Você descobriu os elementos que formam ${ligaAtual.nome}.`;


    /* =====================================================
       MOSTRA O GRÁFICO NO MODAL
    ===================================================== */

    areaGraficoModal.classList.add(
        "ativo"
    );


    /* BOTÃO */

    btnModal.textContent =

        "PRÓXIMO NÍVEL";


    btnModal.dataset.correto =

        "true";


    /* ABRE O MODAL */

    modal.classList.add(
        "ativo"
    );


    /*
       Pequeno atraso para garantir que
       o canvas esteja visível.
    */

    setTimeout(

        () => {

            gerarGrafico();

        },

        100

    );

}


/* =========================================================
   RESPOSTA INCORRETA
========================================================= */

function respostaIncorreta() {


    mostrarModalErro(

        "✕",

        "AINDA NÃO!",

        "Essa combinação não forma a liga solicitada. Tente novamente!"

    );

}


/* =========================================================
   MOSTRAR MODAL DE ERRO
========================================================= */

function mostrarModalErro(

    icone,

    titulo,

    mensagem

) {


    modalIcone.textContent =

        icone;


    modalIcone.style.background =

        "#c73b4d";


    modalTitulo.textContent =

        titulo;


    modalMensagem.textContent =

        mensagem;


    /* ESCONDE O GRÁFICO */

    areaGraficoModal.classList.remove(
        "ativo"
    );


    /* CONFIGURA O BOTÃO */

    btnModal.textContent =

        "TENTAR NOVAMENTE";


    btnModal.dataset.correto =

        "false";


    /* ABRE O MODAL */

    modal.classList.add(
        "ativo"
    );

}


/* =========================================================
   BOTÃO DO MODAL
========================================================= */

btnModal.addEventListener(

    "click",

    () => {


        const acertou =

            btnModal.dataset.correto ===
            "true";


        /* FECHA O MODAL */

        modal.classList.remove(
            "ativo"
        );


        /* =================================================
           SE ACERTOU
        ================================================= */

        if (acertou) {


            /* AVANÇA O NÍVEL */

            nivelAtual++;


            atualizarNivel();


            /* GERA NOVA LIGA */

            gerarNovaLiga();

        }

    }

);


/* =========================================================
   ATUALIZAR NÍVEL
========================================================= */

function atualizarNivel() {


    nivelTexto.textContent =

        nivelAtual;

}


/* =========================================================
   BOTÃO LIMPAR
========================================================= */

btnLimpar.addEventListener(

    "click",

    () => {


        elementosEscolhidos = [];


        atualizarElementosSelecionados();


        atualizarBotoesTabela();

    }

);


/* =========================================================
   BOTÃO VERIFICAR
========================================================= */

btnVerificar.addEventListener(

    "click",

    verificarResposta

);


/* =========================================================
   GERAR GRÁFICO
========================================================= */

function gerarGrafico() {


    const canvas =

        document.getElementById(
            "graficoLiga"
        );


    if (!canvas) {

        return;

    }


    const contexto =

        canvas.getContext(
            "2d"
        );


    /* =====================================================
       DESTRUIR GRÁFICO ANTERIOR
    ===================================================== */

    if (graficoAtual) {

        graficoAtual.destroy();

    }


    /* =====================================================
       DADOS
    ===================================================== */

    const simbolos =

        Object.keys(
            ligaAtual.proporcoes
        );


    const valores =

        Object.values(
            ligaAtual.proporcoes
        );


    /* =====================================================
       CRIAR GRÁFICO
    ===================================================== */

    graficoAtual =

        new Chart(

            contexto,

            {

                type: "pie",


                data: {

                    labels:

                        simbolos,


                    datasets: [

                        {

                            data:

                                valores,


                            backgroundColor:

                                coresGrafico.slice(
                                    0,
                                    simbolos.length
                                ),


                            borderColor:

                                "#07131f",


                            borderWidth:

                                3

                        }

                    ]

                },


                options: {

                    responsive: true,

                    maintainAspectRatio: false,


                    plugins: {

                        legend: {

                            display: false

                        },


                        tooltip: {

                            callbacks: {

                                label:

                                    function(context) {

                                        return (

                                            context.label +

                                            ": " +

                                            context.raw +

                                            "%"

                                        );

                                    }

                            }

                        }

                    }

                }

            }

        );


    criarLegendaGrafico();

}


/* =========================================================
   CRIAR LEGENDA DO GRÁFICO
========================================================= */

function criarLegendaGrafico() {


    legendaGrafico.innerHTML = "";


    const proporcoes =

        Object.entries(
            ligaAtual.proporcoes
        );


    proporcoes.forEach(

        (

            [simbolo, porcentagem],

            indice

        ) => {


            const elemento =

                elementosTabela.find(

                    item =>

                        item.simbolo ===
                        simbolo

                );


            /* SEGURANÇA */

            if (!elemento) {

                return;

            }


            const cor =

                coresGrafico[
                    indice %
                    coresGrafico.length
                ];


            const item =

                document.createElement(
                    "div"
                );


            item.classList.add(
                "item-legenda"
            );


            item.innerHTML = `

                <span>

                    <span
                        class="cor-legenda"
                        style="background: ${cor};"
                    ></span>

                    ${elemento.nome}

                    (${simbolo})

                </span>


                <strong>

                    ${porcentagem}%

                </strong>

            `;


            legendaGrafico.appendChild(
                item
            );

        }

    );

}


/* =========================================================
   INICIAR SISTEMA
========================================================= */

iniciarJogo();