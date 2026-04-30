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
É a base de muitos frameworks modernos como ASP.NET Core MVC e Spring Boot.
* Foco Principal: Separação de Preocupações (Interface vs. Dados).
* O Problema que resolve: Evita que o código de interface (HTML/CSS) fique misturado com a lógica de acesso ao banco de dados.
* Uso ideal: Aplicações web tradicionais e CRUDs, onde a facilidade de desenvolvimento e o suporte do framework são prioridades.
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
* Foco Principal: Independência Tecnológica e Testabilidade.
* O Problema que resolve: O "acoplamento" com frameworks ou bancos de dados. Se o SQL Server sair de linha e você precisar usar MongoDB, o seu "Core" (regras de negócio) permanece intacto.
* Uso ideal: Sistemas complexos que precisam durar muitos anos e onde as regras de negócio são o ativo mais valioso da empresa.
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
* Foco Principal: Isolamento do Mundo Externo.
* O Problema que resolve: Facilita a entrada e saída de dados por múltiplos meios. Você pode testar sua lógica via Console, via Teste Unitário ou via API Web usando o mesmo "buraco" (porta).
* Uso ideal: Quando o sistema precisa interagir com muitos serviços externos (vários bancos, APIs de terceiros, sistemas de mensageria).
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
* Foco Principal: Escalabilidade de Times e Autonomia.
* O Problema que resolve: O "Monolito de Barro". Em sistemas gigantes, um erro em uma parte derruba tudo e 50 desenvolvedores mexendo no mesmo código geram conflitos constantes.
* Uso ideal: Grandes empresas (Netflix, Uber) onde diferentes equipes precisam entregar funcionalidades de forma independente e escalar apenas partes específicas (ex: escalar o login sem escalar o carrinho).

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
* Foco Principal: Assincronismo e Desacoplamento Total.
* O Problema que resolve: A dependência de "respostas imediatas". Em vez de um sistema travar esperando o outro, ele apenas emite um "aviso" (evento) e continua seu trabalho.
* Uso ideal: Sistemas de rastreamento, notificações em tempo real e processamento de grandes volumes de dados que não precisam ser instantâneos.
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
* Foco Principal: Eficiência de Custos e Zero Gerenciamento de Infra.
* O Problema que resolve: O desperdício de pagar por um servidor ligado 24h quando você só precisa processar algo de vez em quando.
* Uso ideal: Tarefas esporádicas, como redimensionar uma imagem após o upload, enviar um e-mail de boas-vindas ou APIs com tráfego muito instável.
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

