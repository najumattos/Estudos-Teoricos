# MVC X DDD
Enquanto a **Arquitetura** define as fronteiras (as paredes da casa), a **Metodologia de Design** define como os moradores (as regras de negócio) se comportam e se comunicam.

## Sumário

- [Arquiteturas mais relevantes](#arquiteturas-mais-relevantes)
	- [MVC](#mvc)
	- [Clean Architecture](#clean-architecture)
	- [Hexagonal Architecture](#hexagonal-architecture)
	- [Microservices](#microservices)
	- [Event-Driven Architecture](#event-driven-architecture)
	- [Serverless Architecture](#serverless-architecture)
- [Metodologia de design](#metodologia-de-design)
	- [DDD](#ddd)
	- [Data-Driven Design](#data-driven-design)
	- [Transaction Script](#transaction-script)
	- [Anemic Domain Model](#anemic-domain-model)
	- [Event Storming / Event Sourcing](#event-storming-event-sourcing)

## Arquiteturas mais relevantes
# MVC X DDD
Enquanto a **Arquitetura** define as fronteiras (as paredes da casa), a **Metodologia de Design** define como os moradores (as regras de negócio) se comportam e se comunicam.

## Sumário

- [Arquiteturas mais relevantes](#arquiteturas-mais-relevantes)
	- [MVC](#mvc)
	- [Clean Architecture](#clean-architecture)
	- [Hexagonal Architecture](#hexagonal-architecture)
	- [Microservices](#microservices)
	- [Event-Driven Architecture](#event-driven-architecture)
	- [Serverless Architecture](#serverless-architecture)
- [Metodologia de design](#metodologia-de-design)
	- [DDD](#ddd)
	- [Data-Driven Design](#data-driven-design)
	- [Transaction Script](#transaction-script)
	- [Anemic Domain Model](#anemic-domain-model)
	- [Event Storming / Event Sourcing](#event-storming-event-sourcing)

## Arquiteturas mais relevantes

### MVC
É um padrão de arquitetura de software que foca na separação da interface do usuário (UI) da lógica de dados. É a base de muitos frameworks modernos como ASP.NET Core MVC e Spring Boot.
**Vantagem:** Facilita a manutenção da interface sem bagunçar a lógica e permite que diferentes desenvolvedores trabalhem no "visual" e no "comportamento" simultaneamente.

 ```mermaid
sequenceDiagram

Usuario->>View: Preenche nome, email e senha
View->>Controller: POST /cadastro (dados)
Controller->>Model: cadastrarUsuario(nome, email, senha)
Model-->>Controller: cadastrado | erro
Controller-->>View: sucesso | erro
View-->>Usuario: Exibe tela inicial | mensagem de falha

 ```
 
### Clean Architecture
Popularizada por Robert C. Martin (Uncle Bob), o objetivo aqui é a independência total. O núcleo da aplicação (regras de negócio) não deve saber se os dados vêm de um banco SQL, de uma API externa ou se a interface é Web ou Mobile.

Vantagem: Altamente testável e fácil de trocar tecnologias sem quebrar o sistema.

Conceito chave: Dependências apontam sempre para dentro (para as regras de negócio).
 ```mermaid
sequenceDiagram

Usuario->>View: Preenche nome, email e senha
View->>Controller: POST /cadastro (dados)
Controller->>UseCase: cadastrarUsuario(nome, email, senha)
UseCase->>Repository: salvarUsuario(dados)
Repository-->>UseCase: cadastrado | erro
UseCase-->>Controller: sucesso | erro
Controller-->>View: sucesso | erro
View-->>Usuario: Exibe tela inicial | mensagem de falha

 ```
### Hexagonal Architecture
Muito similar à Clean Architecture. Ela visualiza a aplicação como um núcleo cercado por "portas" (interfaces) onde você conecta "adaptadores" (implementações como banco de dados, serviços de e-mail, etc.).

-   **Vantagem:** Facilita o uso de múltiplos "drivers" (ex: você pode disparar a mesma lógica via terminal ou via requisição HTTP).

 ```mermaid
sequenceDiagram

Usuario->>Interface: Preenche nome, email e senha
Interface->>Porta de Entrada: POST /cadastro (dados)
Porta de Entrada->>Aplicacao: cadastrarUsuario(nome, email, senha)
Aplicacao->>Adaptador de Saida: salvarUsuario(dados)
Adaptador de Saida-->>Aplicacao: cadastrado | erro
Aplicacao-->>Porta de Entrada: sucesso | erro
Porta de Entrada-->>Interface: sucesso | erro
Interface-->>Usuario: Exibe tela inicial | mensagem de falha

 ```

### Microservices
Em vez de um único projeto gigante (**Monolito**), você divide a aplicação em vários serviços pequenos e independentes que se comunicam via rede (HTTP, gRPC ou filas).

-   **Vantagem:** Permite que diferentes times trabalhem em partes diferentes usando tecnologias diferentes.
    
-   **Desafio:** Aumenta muito a complexidade de rede, monitoramento e deploys.

 ```mermaid
sequenceDiagram

Usuario->>API Gateway: Preenche nome, email e senha
API Gateway->>Serviço de Cadastro: POST /cadastro (dados)
Serviço de Cadastro->>Serviço de Usuários: cadastrarUsuario(nome, email, senha)
Serviço de Usuários-->>Serviço de Cadastro: cadastrado | erro
Serviço de Cadastro-->>API Gateway: sucesso | erro
API Gateway-->>Usuario: Exibe tela inicial | mensagem de falha

 ```

### Event-Driven Architecture
O fluxo do sistema é determinado por eventos (ex: "PedidoCriado", "PagamentoConfirmado"). Os componentes reagem a esses eventos de forma assíncrona.

-   **Vantagem:** Excelente para sistemas que precisam processar muita informação em paralelo e de forma desacoplada.

 ```mermaid
sequenceDiagram

Usuario->>API: Preenche nome, email e senha
API->>Publicador de Eventos: POST /cadastro (dados)
Publicador de Eventos->>Broker: publicar UsuarioCadastrado
Broker->>Consumidor: entregar evento
Consumidor->>Servico de Usuarios: salvarUsuario(dados)
Servico de Usuarios-->>Consumidor: cadastrado | erro
Consumidor-->>API: sucesso | erro
API-->>Usuario: Exibe tela inicial | mensagem de falha

 ```

### Serverless Architecture
Você foca apenas no código da função (ex: AWS Lambda) e o provedor de nuvem gerencia toda a infraestrutura e escalabilidade automaticamente.

-   **Vantagem:** Você só paga pelo tempo que o código está executando.

 ```mermaid
sequenceDiagram

Usuario->>API Gateway: Preenche nome, email e senha
API Gateway->>Function: POST /cadastro (dados)
Function->>Database: salvarUsuario(dados)
Database-->>Function: cadastrado | erro
Function-->>API Gateway: sucesso | erro
API Gateway-->>Usuario: Exibe tela inicial | mensagem de falha

 ```

## Metodologia de design

### DDD

### Data-Driven Design

### Transaction Script

### Anemic Domain Model

<a id="event-storming-event-sourcing"></a>

### Event Storming / Event Sourcing

### MVC

### Clean Architecture

### Hexagonal Architecture

### Microservices

### Event-Driven Architecture

### Serverless Architecture

## Metodologia de design

### DDD

### Data-Driven Design

### Transaction Script

### Anemic Domain Model

<a id="event-storming-event-sourcing"></a>

### Event Storming / Event Sourcing
