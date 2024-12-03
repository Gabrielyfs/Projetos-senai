create database atividadeDBA;
use atividadeDBA;

create table clientes(
id_cliente int primary key auto_increment not null,
nome varchar(200),
email varchar(200),
telefone varchar (200),
endereco varchar(200)
);

create table produtos(
id_produtos int primary key auto_increment not null,
nome varchar(200),
descricao varchar(200),
preco varchar(200),
quantidade int
);

create table pedidos(
id_pedidos int primary key auto_increment not null,
id_cliente int,
foreign key (id_cliente) REFERENCES clientes(id_cliente),
pedidoData date,
pedidoStatus varchar(200)
);

create table itensPedido(
id_itensPedido int primary key auto_increment not null,
id_pedidos int,
id_produtos int,
foreign key (id_pedidos) REFERENCES pedidos(id_pedidos),
foreign key (id_produtos) REFERENCES produtos(id_produtos),
quantidade int,
precoUni varchar(200)
);

insert into clientes (nome, email, telefone, endereco)
values ('Valeria', 'valeria@gmail', '(11) 99999-9999', 'rua direita, 20'), 
('Maria', 'maria@gmail', '(11) 98765-4321', 'rua esquerda, 10');

insert into produtos (nome, descricao, preco, quantidade)
values ('garrafa', 'muito boa', 'R$ 12,50', 90),
('garfo', 'pequeno', 'R$ 6,00', 42),
('bolo', '5 kilos', 'R$ 439,99', 2),
('biscoito', 'biscoito de polvilho', 'R$ 17,20', 26);

insert into pedidos (id_cliente, pedidoData, pedidoStatus)
values (1, '2024-01-03', 'enviado'),
(2, '2023-12-31', 'cancelado'),
(1, '2024-10-29', 'em processamento'),
(2, '1992-05-12', 'entregue');

insert into itensPedido (id_pedidos, id_produtos, quantidade, precoUni)
values (2, 3, 2, 'R$ 19,99'),
(1, 4, 8, 'R$ 30,00'),
(3, 1, 20, 'R$ 51,29'),
(4, 3, 28, 'R$ 82,81');

select * from itensPedido;

select id_cliente, pedidoData, pedidoStatus 
from pedidos
where pedidoStatus = 'enviado' or pedidoStatus = 'em processamento';

create view estoque_acabando as 
select nome, descricao, preco, quantidade from produtos
where quantidade = 10;