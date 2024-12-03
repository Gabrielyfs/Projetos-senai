-- as -> alias -> apelido

-- operador aritimética
select 10 + 5; -- nome da coluna (10 + 5)
select 10 + 5 as soma; -- nome da coluna (soma)
select 10 + 5 as subtracao;
select 10 + 5 as multiplicacao;
select 10 + 5 as divisao;
select 10 + 5 as modulo; -- resto da divisao 10 / 3 = 3; 1

create database sistemausuariossesi;
use sistemausuariossesi;
create table clientes (
id int primary key not null auto_increment,
nome varchar(100),
idade int
);
insert into clientes (nome, idade) value ('valderci', 45),
('valdirleia', 80), ('leticia', 217), ('maicon', 8);

select * from clientes;

select * from clientes where idade > 25; -- maior
select * from clientes where idade < 25; -- menor
select * from clientes where idade <= 25; -- maior igual
select * from clientes where idade >= 25; -- menor igual
select * from clientes where idade != 25; -- diferente

select * from clientes where idade between 10 and 30;
select * from clientes where idade in (22, 37, 45, 51); -- varios valores
select * from clientes where nome like 'arthur%'; -- % de busca
select * from clientes where nome is null; -- nome vazio | nulo

-- operadores logísticos 
select * from clientes where idade > 20 and idade < 50; -- true && false
select * from clientes where idade > 20 or idade < 50; -- false || true
select  * from clientes where not nome = 'arthur'; -- não é 

-- funções de agregação
select count(*) from clientes; -- contar
select sum(idade) from clientes; -- somar
select avg(idade) from clientes; -- média
select min(idade) from clientes; -- minimo
select max(idade) from clientes; -- maximo

-- funções de data e hora
select now(); -- data e hora atual
select curdate(); -- data atual
select curtime(); -- hora atual

-- funões de string
select lower(nome) from clientes; -- letras minusculas 
select upper(nome) from clientes; -- letras maiúsculas
select length(nome) from clientes; -- contar quantidade de letras
select concat(nome, idade) from clientes; -- concatenar 'nome' + '22'
select substring(nome, 5, 10) from clientes; -- cortar, inicio, fim  'Arthur -> rthur

-- funções matemáticas
select abs(-35); -- retornar um valor absoluto de um número
select ceil(43.01); -- (44) arredondar para cima
select ceiling(43.01); -- (44) arredondar para cima
select floor(43.7); -- (43) arredondar para baixo
select round(43.764, 2); -- arredondar com base na casas
select sqrt(144); -- raiz quadrada
select round(45.5, 0); -- arredondar round 45.5 -> 46 || 45.4 -> 45