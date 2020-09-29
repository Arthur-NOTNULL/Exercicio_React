const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const app        = express();

const PORTA = 8081;

let alunos = [
  {
    "id": 21802254,
    "nome": "Arthur Henrique",
    "imagem": "https://cdn.discordapp.com/attachments/590312865874051102/760301671250133083/IMG-20200811-WA0024.jpg"
  },
  {
    "id": 21802572,
    "nome": "João Miguel",
    "imagem": "https://cdn.discordapp.com/attachments/590312865874051102/760299472277995561/Screenshot_20200303-120801_WhatsApp.jpg"
  },
  {
    "id": 21809999,
    "nome": "NMT Poker",
    "imagem": "https://pbs.twimg.com/profile_images/1300498160679292928/RF5DJ_8Z.jpg"
  }, {
    "id": 21809900,
    "nome": "NMT MelhorAngulo",
    "imagem": "https://cdn.discordapp.com/attachments/590312865874051102/760299363930472518/IMG-20200915-WA0017.jpg"
  },
  {
    "id": 21809990,
    "nome": "NMT ZeroTwo",
    "imagem": "https://pbs.twimg.com/media/DWLKtMIXUAIOQje.jpg"
  },
  {
    "id": 999,
    "nome": "Random que destroi O Compet ",
    "imagem": "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/09/26/150926165742__85730600_monkey2.jpg"
  }
];

app.use(bodyParser.json());
app.use(cors());

app.get("/alunos", (req, resposta) => {
    resposta.send(alunos);
});

app.post("/alunos", (req, res) => {
    const aluno = req.body;
    aluno.id = alunos.length;
    alunos.push(aluno);
    res.sendStatus(201);
});

app.put("/alunos/:id", (req, res) => {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    alunos[id] = { id, nome, imagem };
    res.send(alunos[id]);
});



app.get("/item/:id", (req, res) => {
    const id = req.params.id;

    // busca item do array por id
    const item = items.find(pam => pam.id == id);
    
    if(item) {
        res.send(item);
    } else {
        res.sendStatus(404);
    }
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});
