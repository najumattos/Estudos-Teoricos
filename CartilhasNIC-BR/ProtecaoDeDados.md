# Fascículo: Proteção de Dados
A proteção de dados pessoais não é apenas uma questão de conformidade legal com a LGPD, mas um compromisso com a privacidade do usuário. No desenvolvimento, isso significa tratar o dado como um ativo de alto risco.

Vazamentos de dados (data leak) ocorrem quando dados são indevidamente acessados, coletados e divulgados na Internet, ou repassados a terceiros. Com a disseminação dos serviços online, seus dados estão cada vez mais expostos e sendo coletados pelos diferentes serviços disponíveis.
Para evitar o vazamento de dados, é necessário tomar medidas desde o desenvolvimento de um software ate seu uso final. E para casos de vazamento medidas devem ser tomadas o quanto antes para minimizar os prejuizos causados pela exposição indevida de danos.

Como Desenvolvedores temos a responsabilidade de manusear qualquer tipo de dado com cautela. A prevenção da exposição de dados começa no ambiente de desenvolvimento.
##
**Principais Origens de Vazamento de Dados**
* Furto de dados por atacantes e códigos maliciosos que exploram vulnerabilidades em sistemas;
* Acesso a contas de usuários, por meio de senhas fracas ou vazadas;
* Ação de funcionários ou ex-funcionários que coletam dados dos sistemas da empresa e os repassam a terceiros;
* Furto de equipamentos que contenham dados sigilosos;
* Erros ou negligência de funcionários, como descartar mídias (discos e pen drives) sem os devidos cuidados.

**Dados que podem vazar**
* Credenciais de acesso, como nomes de usuário e senhas;
* Informações financeiras, como números de contas bancárias e de cartões de crédito;
* Documentos, como CPF, RG e carteira de habilitação;
* Informações de contato, como endereços e números de telefone;
* Registros de saúde, como resultados de exames e prontuários médicos;
* Outros dados, como data de nascimento e nomes de familiares.

**Como dados vazados podem ser usados?**
* Abertura de contas em seu nome;
* Uso de senhas vazadas para invadir outros serviços onde a mesma senha é usada;
* Criação de cartões de crédito, contas bancárias e empréstimos, levando a dívidas ou transações ilícitas em seu nome;
* Informações privadas, como dados médicos ou conversas particulares, podem ficar expostas na Internet;
* Extorsão, onde o atacante faz chantagem para não expor os seus dados;
* Em tentativas de phishing direcionado e personalizado (spear phishing);

#
**Como Desenvoldedores podem proteger os dados para evitar vazamentos?**

Para quem desenvolve sistemas, essas diretrizes não são apenas dicas de usuário, mas **requisitos não funcionais** críticos:
* **Segurança por Design (Privacy by Design):** Ao projetar bancos de dados em buscar aplicar o princípio da **coleta mínima**. Pergunte-se: "Este dado é realmente necessário?"
*  **Tratamento de Credenciais:** Nunca deve armazenar senhas em texto plano no banco de dados. Usar algoritmos de _hash_ e _salt_ para proteger essas credenciais;
* **Implementação de MFA:** Implementação de **verificação em duas etapas**;
* **Prevenção de Vulnerabilidades:** Validar entradas de usuário para evitar ataques como SQL Injection;
* **Criptografia:** O uso de conexões seguras (HTTPS) e criptografia de dados sensíveis em repouso (at-rest).

**O que isso implica na prática?**
* **Não subir `.env` e Connection Strings** : As cartilhas mencionam que vazamentos podem ocorrer por "negligência" ou "acesso a arquivos onde dados foram armazenados". Colocar essas informações diretamente no código (hardcoded) no GitHub é um dos erros mais comuns. Se o repositório for público (ou se um invasor ganhar acesso ao privado), ele terá a "chave da casa" para o seu banco de dados MySQL. Utilize **User Secrets** no ambiente de desenvolvimento do .NET e **Variáveis de Ambiente** ou serviços como **Azure Key Vault** em produção. Sempre adicione o `.env` ao seu `.gitignore`;

* **Uso de DTOs (Data Transfer Objects):** A cartilha de Proteção de Dados fala sobre "coleta não transparente" e "minimizar dados". O DTO serve como um filtro, seu uso garante que, mesmo que a requisição seja interceptada, os dados expostos sao menores do que transitar diretamente com a model;
* **Manter um código organizado:** Um sistema testável é um sistema mais seguro, pois você consegue prever comportamentos anômalos e garantir que as regras de validação de dados funcionem conforme o esperado;
* **Logging e Monitoramento:** A cartilha de vazamentos diz que é preciso "monitorar". Em software, isso significa ter logs de erro e de acessos suspeitos (sem logar dados sensíveis do usuário, o que seria uma violação da LGPD).

## Consequências o desenvolvedor/empresa enfrenta
As repercussões de um vazamento de dados são severas e abrangentes:

* Sanções administrativas e multas: Penalidades aplicadas pela ANPD, que podem chegar a multas pecuniárias elevadas e até o bloqueio ou eliminação do banco de dados.
* Danos à reputação: Perda de confiança dos clientes, impacto negativo na imagem da marca e fuga de usuários para concorrentes.
* Responsabilidade civil: Ações judiciais movidas pelos titulares dos dados afetados ou por entidades de defesa do consumidor, gerando custos com indenizações.
* Custos operacionais: Gastos emergenciais com remediação técnica, auditorias forenses, contratação de consultorias de segurança e campanhas de comunicação.
* Responsabilidade individual: Em casos de negligência grave ou má conduta comprovada, profissionais podem enfrentar processos internos, demissão por justa causa ou até responsabilidades legais diretas.

## Como dados vazados podem ser usados?
Os dados vazados são utilizados para diversas atividades ilícitas, incluindo:
* Fraudes financeiras: Realização de compras não autorizadas, solicitações de empréstimos em nome da vítima ou desvio de fundos.
* Roubo de identidade: Criação de perfis falsos, abertura de contas ou contratação de serviços utilizando os dados pessoais dos titulares.
* Engenharia social e phishing: Utilização de informações específicas (nome de familiares, histórico profissional, contatos) para criar golpes mais convincentes e direcionados.
* Acesso indevido a outros sistemas: Uso de credenciais vazadas em outras plataformas (ataques de credential stuffing), aproveitando-se do hábito de reutilização de senhas.
* Extorsão e chantagem: Utilização de dados sensíveis, como prontuários médicos ou histórico privado, para chantagear indivíduos ou empresas.
