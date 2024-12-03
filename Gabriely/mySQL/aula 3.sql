create database nike;
use nike;
create table produtos (
	id int primary key auto_increment not null,
    nome varchar(60),
    preco int
);

insert into produtos (nome, preco)
values 
	('Air jordan 1', 1200),
    ('Nike Traviss Scott', 6000),
    ('Dunk Low', 700);
    
select * from produtos where preco > 5000;
-- selecione os produtos onde o preço é maior que 5000
select * from produtos where preco > 500 and preco < 2000;
-- selecione os produtos onde o preço é menor que 2000 e maior que 500

select sum(preco) from produtos;
-- somar produtos

select avg(preco) from produtos;
-- saber a média dos produtos

create table pedidos(
id int primary key auto_increment not null,
idProduto int,
quantidade int,
endereco varchar(200),
foreign key (idProduto) references Produtos(id)
);

insert into pedidos(idProduto, quantidade, endereco)
value (1, 4, '955, Rua direita, Cotia');

alter table produtos
-- aleterar tabela
add column quantidade int;
-- add column -> adicionar coluna

alter table produtos
drop column quantidade;
-- deletar coluna

alter table produtos
modify column preco int;
-- alterar uma coluna

alter table produtos
rename column preco to valor;
-- renomear coluna

select count(*) from produtos;
-- contar a quantidade de dados dentro de uma tabela

