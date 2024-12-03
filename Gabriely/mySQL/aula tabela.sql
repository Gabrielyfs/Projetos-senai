use bancosesi;
create table professores (
-- identity -> identidade (1, 2, 3, 4, 5)
id int primary key auto_increment not null,
nome varchar(60), -- String -> varchar
idade int,
materia varchar(100)
);

-- executar -> ctrl + shift + enter
insert into professores (nome, idade, materia)
values ('Samuel', 23, 'Banckend'),
	('Giovanni', 22, 'Linguagem de Marcação'),
    ('Arthur', 22, 'Banco de Dados');
    
    -- Visualisando dados
    -- * -> indica selecionar todas as colunas
    select nome, idade from professores;
    select * from alunos;
    -- selecionar
delete from alunos where id = 3;
-- deletar
update alunos set nome = 'Mariani' where id = 3
-- atualizar