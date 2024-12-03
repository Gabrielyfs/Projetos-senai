create database flor;
use flor;

create table passaro (
id int primary key not null auto_increment,
nome varchar(100),
cor varchar(100),
quantidade int
);

create table arvore (
id int primary key not null auto_increment,
tamanho varchar(100),
idade int,
lugar varchar(100)
);

create table flor (
id int primary key not null auto_increment,
id_passaro int,
id_arvore int,
foreign key (id_passaro) references passaro(id),
foreign key (id_arvore) references arvore(id)
);

insert into passaro (nome, cor, quantidade)
values ('maju', 'verde', 1 ), ('ursa', 'marrom', 3), ('fumaça', 'cinza', 7), ('suze', 'vermelho', 5);

insert into arvore (tamanho, idade, lugar)
values ('10 metros', 4, 'rua marta, 43'), ('1 metro', 6, 'rua direita, 92'), ('30 metros', 20, 'rua paris, 234');

insert into flor (id_passaro, id_arvore)
values (2,3), (1,2), (4,1), (3,2), (2,3), (1,3), (4,1), (3,1);

select * from passaro;

select pas.nome, pas.cor, pas.quantidade
from passaro as pas
inner join flor on pas.id = flor.id_passaro;

select ar.tamanho, ar.idade, ar.lugar
from arvore as ar
inner join flor on ar.id = flor.id_arvore;

select pas.nome, ar.tamanho
from passaro as pas
inner join flor on pas.id = flor.id_passaro
inner join arvore as ar on flor.id_arvore = ar.id;