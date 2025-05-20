// Simulando um "banco de dados"
const produtos = {
  1: {
    nome: "Camiseta Cubo Mágico",
    imagem: "/frontend/imgs/roupas/roupa_geek_cubo_magico.jpg",
    descricao:
      "Uma explosão de cores e nostalgia geek! Esta camiseta estilosa com estampa de cubo mágico é perfeita para quem curte desafios e estilo retrô.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  2: {
    nome: "Caneca Gamer Boy Geek",
    imagem: "/frontend/imgs/canecas/caneca_gamer_boy_geek.jpg",
    descricao:
      "Comece o dia com um boost de energia geek! A Caneca Gamer Boy traz o visual clássico dos consoles portáteis direto para sua mesa.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  3: {
    nome: "Action Figure The Witcher",
    imagem: "/frontend/imgs/action_figures/action_figure_the_witcher.png",
    descricao:
      "Traga o caçador de monstros para sua coleção! Geralt de Rívia em detalhes incríveis, direto do universo de The Witcher.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  4: {
    nome: "roupa geek videogame controle",
    imagem: "/frontend/imgs/roupas/roupa_geek_videgame_controle.jpg",
    descricao:
      "Estilo e nostalgia em uma só peça! Camiseta com controle clássico de videogame para os gamers de coração.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  5: {
    nome: "action figure sasori naruto",
    imagem: "/frontend/imgs/action_figures/action_figure_sasori_naruto.jpg",
    descricao:
      "Para os fãs de Naruto! Uma action figure detalhada de Sasori, membro da Akatsuki, com acabamento fiel ao anime.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  6: {
    nome: "roupa geek cubo magico",
    imagem: "/frontend/imgs/roupas/roupa_geek_cubo_magico.jpg",
    descricao:
      "Leve o visual geek retrô por onde for! Estampa divertida de cubo mágico para quem adora um look inteligente.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  7: {
    nome: "roupa geek evolution",
    imagem: "/frontend/imgs/roupas/roupa_geek_evolution.jpg",
    descricao:
      "Dos 8-bits ao futuro! Camiseta com estampa de evolução geek — perfeita para os amantes de games e tecnologia",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  8: {
    nome: "roupa geek pacman",
    imagem: "/frontend/imgs/roupas/roupa_geek_pacman.jpg",
    descricao:
      "Direto dos fliperamas para o seu guarda-roupa! Camiseta estilosa com estampa de Pac-Man, o clássico dos clássicos.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  9: {
    nome: "roupa geek videogame controle",
    imagem: "/frontend/imgs/roupas/roupa_geek_videgame_controle.jpg",
    descricao:
      "Estilo e nostalgia em uma só peça! Camiseta com controle clássico de videogame para os gamers de coração.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  10: {
    nome: "roupa linha de codigo",
    imagem: "/frontend/imgs/roupas/roupa_linha_de_codigo.jpg",
    descricao:
      "Para os devs de plantão! Uma camiseta com estampa de código fonte — discreta, inteligente e autêntica.",
    categoria: "Roupa",
    preco: "R$ 35,99",
  },
  11: {
    nome: "caneca gamer boy geek",
    imagem: "/frontend/imgs/canecas/caneca_gamer_boy_geek.jpg",
    descricao:
      "Comece o dia com um boost de energia geek! A Caneca Gamer Boy traz o visual clássico dos consoles portáteis direto para sua mesa.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  12: {
    nome: "caneca geek dev",
    imagem: "/frontend/imgs/canecas/caneca_geek_dev.jpg",
    descricao:
      "Código, café e produtividade! Caneca para quem ama programar e precisa de combustível geek pela manhã.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  13: {
    nome: "caneca geek quadrinho",
    imagem: "/frontend/imgs/canecas/caneca_geek_quadrinho.png",
    descricao:
      "Uma explosão pop na sua xícara! Caneca com estampa vibrante de quadrinhos clássicos, perfeita para os heróis do café.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  14: {
    nome: "caneca harry potter geek",
    imagem: "/frontend/imgs/canecas/caneca_harry_potter_geek.jpg",
    descricao:
      "Feita para bruxos e bruxas! Uma caneca mágica com visual inspirado no universo de Harry Potter.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  15: {
    nome: "ceneca geek game over",
    imagem: "/frontend/imgs/canecas/ceneca_geek_game_over.jpg",
    descricao:
      "Comece o dia como um verdadeiro player! Caneca com arte 'Game Over' — ideal para recarregar as energias.",
    categoria: "Caneca",
    preco: "R$ 35,99",
  },
  16: {
    nome: "action figure geek capitao america",
    imagem: "../imgs/imgs/action_figures/action_figure_geek_homem_aranha.jpg",
    descricao:
      "Heróis também colecionam estilo! Action figure do Capitão América com escudo e detalhes incríveis para fãs da Marvel.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  17: {
    nome: "action figure geek homem aranha",
    imagem: "/frontend/imgs/action_figures/action_figure_geek_homem_aranha.jpg",
    descricao:
      "O amigão da vizinhança chegou! Figura do Homem-Aranha com pose dinâmica e acabamento colecionável.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  18: {
    nome: "action figure god of war",
    imagem: "/frontend/imgs/action_figures/action_figure_god_of_war.png",
    descricao:
      "Kratos, o Fantasma de Esparta, pronto para dominar sua estante. Detalhes brutais para fãs de God of War.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  19: {
    nome: "action figure sasori naruto",
    imagem: "/frontend/imgs/action_figures/action_figure_sasori_naruto.jpg",
    descricao:
      "Para os fãs de Naruto! Uma action figure detalhada de Sasori, membro da Akatsuki, com acabamento fiel ao anime.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
  20: {
    nome: "action figure the witcher",
    imagem: "/frontend/imgs/action_figures/action_figure_the_witcher.png",
    descricao:
      "Traga o caçador de monstros para sua coleção! Geralt de Rívia em detalhes incríveis, direto do universo de The Witcher.",
    categoria: "Action figure",
    preco: "R$ 35,99",
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Pega os elementos da página
const nomeProduto = document.getElementById("nome-produto");
const imagemProduto = document.getElementById("imagem-produto");
const categoriaProduto = document.getElementById("categoria-produto");
const precoProduto = document.getElementById("preco-produto");
const descricaoProduto = document.getElementById("descricao");

// Mostra os dados, se o produto existir
if (produtos[id]) {
  nomeProduto.textContent = produtos[id].nome;
  imagemProduto.src = produtos[id].imagem;
  descricaoProduto.textContent = produtos[id].descricao;
  categoriaProduto.textContent = produtos[id].categoria;
  precoProduto.textContent = produtos[id].preco;
} else {
  document.getElementById("produto-container").innerHTML =
    "<p class='information'>Produto não encontrado.</p>";
}
