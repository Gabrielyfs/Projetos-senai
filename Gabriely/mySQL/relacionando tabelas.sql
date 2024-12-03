create database exercicio;
use exercicio;

create table cliente (
id int primary key not null auto_increment,
nome varchar(100),
idade int
);

create table produto (
id int primary key not null auto_increment,
nome varchar(100),
quantidade int
);


create table pedido (
id int primary key not null auto_increment,
id_cliente int,
id_produto int,
foreign key (id_cliente) references cliente(id),
foreign key (id_produto) references produto(id)
);

insert into cliente (nome, idade)
values ('Gabriely', 16), ('Mariani', 17), ('Ana Beatriz', 16), ('Mathias', 17), ('Abelar', 17);

insert into produto (nome, quantidade)
values ('garrafa', 8), ('notebook', 6), ('blusa', 12), ('mouse',23), ('cortina', 21);

select * from cliente;

insert into pedido (id_cliente, id_produto)
values (5,1), (2,3), (1,5), (2,1), (4,4), (3,2), (3,5);

-- todos os clientes que tem um pedido
select cli.nome, cli.idade
from cliente as cli
inner join pedido on cli.id = pedido.id_cliente;

-- todos os produtos que tem um pedido
select pro.nome, pro.quantidade
from produto as pro
inner join pedido on pro.id = produto.id;

select cli.nome, pro.nome
from cliente as cli
inner join pedido on cli.id = pedido.id_cliente
inner join produto as pro on pedido.id_produto = pro.id;