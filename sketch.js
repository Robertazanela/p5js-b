ostas1, costas2;
let quieto, farra1, farra2;
let olhando, gameover;

let situacao = "olhando";
let proximaAlteracao = 0;

let giz, grito;

const CADEIRAS_Y = 460;

function preload() {
  // Carregando as imagens do prof
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg");

  // Carregando as imagens dos estudantes
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");

  // Carregando os áudios do jogo
  giz = loadSound("giz.mp3");
  giz.setLoop(true)
  grito = loadSound("grito.mp3");
  grito.setLoop(true)
}

function setup() {
  createCanvas(1024, 576);
}

function troca() {
  if (situacao === "olhando") {
    situacao = "não olhando";
    giz.play();
  } else {
    situacao = "olhando";
    giz.pause();
  }
  proximaAlteracao = millis() + random(2500, 7000);
}

function draw() {
  if (millis() > proximaAlteracao) {
    troca();
  }

  if (situacao === "olhando") {
    image(olhando, 0, 0);
  } else {
    let tempo = millis() % 1000;
    if (tempo > 5