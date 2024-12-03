-- Comando USE para apontar o database que vamos utilizar
USE bancosesi;

-- criando tabela
CREATE TABLE alunos (
	id  INT PRIMARY KEY NOT NULL AUTO_INCREMENT, -- nunca vazio, sempre autoadicionando
    nome VARCHAR(50), -- string -> Varchar (quantidade de caracteres)
    idade INT 
);

INSERT INTO alunos (nome, idade) VALUES 
	('Gabriely', 16),
    ('Marini', 17),
    ('Mathias', 17);

SELECT * FROM alunos;
SELECT * FROM alunos WHERE id=2;
