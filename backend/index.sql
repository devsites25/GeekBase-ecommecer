create table canecas(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    preco INT NOT NULL,
    descricao TEXT NOT NULL,
    imagem longblob
);

create table roupas(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    preco INT NOT NULL,
    descricao TEXT NOT NULL,
    imagem longblob
);

create table action_figure(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    preco INT NOT NULL,
    descricao TEXT NOT NULL,
    imagem longblob
);
-- criação das tabelas fietas

select * from canecas;