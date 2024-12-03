create table clientes (
id int primary key auto_increment not null,
nome varchar(200),
idade int,
saldo int
);

use nike;

insert into clients (nome, idade, saldo) values
('arthur', 22, 2008),
('Samuel', 22, 2012),
('Giovanni', 22, 3000);

drop table pedidos;

create table pedidos(
id int primary key auto_increment not null,
idProduto int,
idCliente int,
foreign key (idProduto) references produtos(id),
foreign key (idCliente) references clientes(id)
);

insert into pedidos (idProduto, idCliente)
values (1, 1);

select * from produtos;