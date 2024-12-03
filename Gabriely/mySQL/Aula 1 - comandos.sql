-- Criar arquivo: ctrl + T
-- Salvar: ctrl + S
-- CRIANDO DATABASE bancosesi
CREATE DATABASE bancosesi;

-- ctrl + shift + enter = Executa o código selecionado
DROP DATABASE bancosesi;

SHOW GRANTS FOR 'root'@'localhost';

CREATE USER 'novousuario'@'localhost'
IDENTIFIED BY 'senha123';

GRANT
	SELECT,
    INSERT,
    UPDATE
ON sys.sys_config
TO 'novousuario'@'localhost';

REVOKE
	SELECT,
    INSERT,
    UPDATE
ON sys.sys_config
FROM 'novousuario'@'localhost';

DROP USER 'novousuario'@'localhost'