CREATE DATABASE IF NOT EXISTS funilaria_celio;
use funilaria_db;
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(100) NOT NULL,
    CPF VARCHAR(11) UNIQUE NOT NULL,
    data_cadastro DATE,/*pode ser anterior a data criacao*/
    telefone VARCHAR(15),    
    tipo_usuario ENUM('Cliente', 'Funcionario', 'Ambos') DEFAULT 'Cliente',
        
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_usuario_alterado
    
    CONSTRAINT fk_usuario_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id)    
);

CREATE TABLE Funcionario (
    id_usuario INT PRIMARY KEY, -- fk_funcionario_usuario relação 1:1
    data_contratacao DATE, /*pode ser anterior a data criacao*/
    tipo_funcionario ENUM('Funileiro', 'Pintor') NOT NULL,
    
    certificado_funileiro VARCHAR(100) null,
    especialidade_pintor ENUM('Automotivo', 'Industrial', 'Geral') NULL,
    
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_funcionario_alterado
    
    CONSTRAINT fk_funcionario_usuario FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    CONSTRAINT fk_funcionario_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id),
    
    CONSTRAINT chk_atributos_por_tipo CHECK (/*funileiro com certificado || pintor com especialidade*/
    (tipo_funcionario = 'Funileiro' AND certificado_funileiro IS NOT NULL) OR /*todo funileiro tem um certificado 1:1*/
    (tipo_funcionario = 'Pintor' AND especialidade_pintor IS NOT NULL))		  /*todo pintor tem uma especialidade 1:1*/   
    );

 /*Isso faz com que o banco nem olhe para os funcionários demitidos/excluídos durante as buscas comuns.*/    
CREATE INDEX idx_funcionario_ativo ON Funcionario(id_usuario, deletado_em);

CREATE TABLE Veiculo(
	id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) NOT NULL UNIQUE,
    modelo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    ano_fabricacao YEAR, 
    dono_veiculo INT NOT NULL, /* um cliente pode ter n veículos 1:n*/
    
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_funcionario_alterado
	
    CONSTRAINT fk_cliente_usuario FOREIGN KEY (dono_veiculo) REFERENCES Usuario(id),
    CONSTRAINT fk_veiculo_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id)
);
-- Índice para buscar por placa 
CREATE INDEX idx_veiculo_placa ON Veiculo(placa);

CREATE TABLE Servico(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NULL,
    preco_base DECIMAL(10,2) NOT NULL, /*nunca usar FLOAT ou DOUBLE para dinheiro, pois eles podem ter erros de arredondamento*/
    
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_servico_alterado
	    
    CONSTRAINT fk_servico_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id)    
); 

CREATE TABLE OrdemServico(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_veiculo INT NOT NULL, -- fk_OS_veiculo
	descricao_problema VARCHAR(300) NOT NULL,
	data_entrada DATE NOT NULL,
	data_saida DATE NULL,
    status_OS ENUM('Em Aberto', 'Em Andamento', 'Aguardando Peça', 'Concluida', 'Cancelada') DEFAULT 'Em Aberto',
    id_funcionario_abertura INT NOT NULL, -- fk_OS_funcionario_abertura
    id_funcionario_responsavel INT NOT NULL, -- fk_OS_funcionario_responsavel
            
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_OS_alterado
    
	CONSTRAINT fk_OS_veiculo FOREIGN KEY (id_veiculo) REFERENCES Veiculo(id),
    CONSTRAINT fk_OS_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id),
    CONSTRAINT fk_OS_funcionario_abertura FOREIGN KEY (id_funcionario_abertura) REFERENCES Funcionario(id_usuario),
    CONSTRAINT fk_OS_funcionario_responsavel FOREIGN KEY (id_funcionario_responsavel) REFERENCES Funcionario(id_usuario)
);

CREATE TABLE ItemOrdemServico(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_OS INT NOT NULL,           -- fk_item_OS
    id_servico INT NOT NULL,      -- fk_item_servico
    preco_cobrado DECIMAL(10,2) NOT NULL,
   
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alterado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletado_em TIMESTAMP NULL DEFAULT NULL,
    alterado_por INT NULL, -- fk_funcionario_alterado
    
    CONSTRAINT fk_item_alterado FOREIGN KEY (alterado_por) REFERENCES Usuario(id),
    CONSTRAINT fk_item_OS FOREIGN KEY (id_OS) REFERENCES OrdemServico(id),
    CONSTRAINT fk_item_servico FOREIGN KEY (id_servico) REFERENCES Servico(id)
);

/*
Como o id_usuario é ao mesmo tempo a Primary Key e uma Foreign Key, o banco cria automaticamente um índice clusterizado. Isso significa que buscar os dados do funcionário a partir do usuário será extremamente rápido.

Ao remover o AUTO_INCREMENT do ID do funcionário e usar o id_usuario como PRIMARY KEY e FOREIGN KEY ao mesmo tempo, você garante que um usuário só possa ter um perfil de funcionário. Isso é uma prática comum para implementar herança no banco de dados.

deletado_em TIMESTAMP NULL DEFAULT NULL
Essencial para o seu requisito de Exclusão Lógica (Soft Delete).

NULL: Permite que a coluna seja vazia.

DEFAULT NULL: Quando o registro é criado, ele nasce "vivo", ou seja, com o valor nulo.

Como funciona na prática: Quando você quiser "deletar" um cliente, você não usará o comando DELETE. Você usará um UPDATE cliente SET deletado_em = NOW().

Resultado: O dado continua no banco para histórico, mas suas consultas (SELECT) usarão o filtro WHERE deletado_em IS NULL para ignorá-lo, atendendo ao RNF-05.

ON UPDATE CURRENT_TIMESTAMP: Este é o gatilho (trigger) interno. Sempre que você der um UPDATE em qualquer outra coluna dessa linha (como trocar o telefone do cliente), o MySQL atualizará automaticamente esta coluna para o horário exato da alteração.

Resultado: Você tem um log automático de quando o dado foi mexido pela última vez.

DEFAULT CURRENT_TIMESTAMP: No momento em que o registro nasce (INSERT), ele ganha o horário atual.

DEFAULT CURRENT_TIMESTAMP: Isso diz ao MySQL: "Se eu esquecer de passar esse valor no INSERT, pegue o relógio do sistema agora e preencha sozinho".

Resultado: Você nunca mais precisa passar a data de criação manualmente no seu código.
TIMESTAMP: Armazena data e hora. A vantagem sobre o DATETIME é que o TIMESTAMP converte automaticamente para o fuso horário (timezone) do servidor, o que é ótimo para sistemas que podem crescer.
*/