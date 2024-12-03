create database transporte;
use transporte;

create table motoristas (
id_motorista int primary key auto_increment not null,
nome varchar(200),
numero_carteira int,
telefone varchar(20)
);

create table veiculos(
id_veiculo int primary key auto_increment not null,
placa varchar(20),
modelo varchar(20),
ano date
);

create table rotas (
id_rota int primary key auto_increment not null,
origem varchar(200),
destino varchar(200),
distancia varchar(20)
);

create table entregas (
id_entrega int primary key auto_increment not null,
id_motorista int,
foreign key (id_motorista) REFERENCES motoristas(id_motorista),
id_veiculo int,
foreign key (id_veiculo) REFERENCES veiculos(id_veiculo),
id_rota int,
foreign key (id_rota) REFERENCES rotas(id_rota),
data_entrega date,
status_entrega varchar(200)
);

insert into motoristas (nome, numero_carteira, telefone)
values ('Kolosso', 5437, '(11)95678-4567'), ('Nivaldo', 3456, '(21)93452-3456'), ('Jucelino', 9876, '(65)95674-4321');

insert into veiculos (placa, modelo, ano)
values ('VYS56S8', 'Siena', '2016-03-21'), ('GHJ45L9', 'Civic', '2020-07-04'), ('JSB28I4', 'HR-V', '2021-04-23');

insert into rotas (origem, destino, distancia)
values ('Xique-Xique - BA', 'Belo Horizonte - MG', '70.000 km'), ('Moçambique', 'Fim do Mundo', '4567.057 km'), ('Casa da Mãe Joana', 'Natal', '87386.132 km');

insert into entregas (id_motorista, id_veiculo, id_rota, data_entrega, status_entrega)
values (2, 1, 3, '2012-03-30', 'Entregue'), (1, 2, 1, '1902-12-25', 'Pendente'), (3, 3, 2, '1432-01-27', 'Em trânsito'), (2, 1, 3, '1082-02-12', 'Pendente'), (2, 3, 1, '1029-12-12', 'Entregue');

select * from entregas where status_entrega = 'Pendente'
and id_motorista = 2;

set autocommit = 0;

UPDATE entregas
SET status_entrega = 'Entregue'
WHERE id_motorista = 2;

ROLLBACK;

SELECT * FROM entregas;