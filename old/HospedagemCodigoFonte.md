## Plataformas de hospedagem de código-fonte voltadas para empresas
A empresas quase nunca usam plataformas como o GitHub da mesma forma que nós usamos para nossos projetos de estudo. O cenário muda completamente quando envolve segredo industrial e dados de clientes. 
Muito se fala da importância de versionamento de código, a importância de dominar Git, que muitas vezes é atrelado erroneamente ao Github como se ambos fossem uma coisa só e apesar do Github ser a maior plataforma de hospedagem de código fonte ela não é a única. Nem mesmo o GIT é a única opção para versionamento.

### 1. O Paradigma Corporativo: Do Git ao ALM

Diferente dos projetos de estudo, onde o foco é apenas salvar o código, no ambiente corporativo o versionamento é parte de um ecossistema de **ALM (Application Lifecycle Management)**. Aqui, o código precisa ser seguro, auditável e automatizado.

### 2. O Desafio da Segurança e o Fator Humano

O ser humano é o elo mais frágil da corrente. A automação (CI/CD) surge para eliminar erros manuais, mas introduz um novo desafio: a **Concentração de Privilégios**.

-   **Risco:** Se o "robô" da automação tem as chaves do servidor, o pipeline se torna um alvo crítico.
    
-   **Solução:** Implementação de **Pipelines Imutáveis** e **Segredos Injetados** (ex: Azure Key Vault), garantindo que senhas nunca fiquem expostas em arquivos de texto ou logs.
### 3. Ecossistemas de Hospedagem e Governança

Embora o Git seja o padrão, as plataformas de hospedagem variam conforme a estratégia da empresa:

-   **GitHub Enterprise:** Foco em colaboração e segurança nativa.   _Diferencial:_ **Segurança Avançada** (escaneamento de segredos) e **SSO** (controle de acesso centralizado).
        
-   **Azure DevOps:** A escolha lógica para o ecossistema **C# / .NET**.  _Diferencial:_ Integração nativa de ponta a ponta (Board, Repos, Pipelines e Artifacts).
        
-   **GitLab:** Preferido por quem busca **soberania de dados**. _Diferencial:_ Versão _Self-hosted_, onde a empresa hospeda seu próprio servidor de código.
        
-   **Bitbucket:** Focado em gestão de projetos. _Diferencial:_ Integração profunda com o ecossistema Atlassian (Jira/Confluence).

###  4. Alternativas Ao Git
Embora o **Git** seja o padrão absoluto da indústria hoje, existem outras ferramentas de controle de versão (VCS - _Version Control Systems_) que operam sob lógicas diferentes. No mundo do desenvolvimento moderno, é raro utilizá-las para projetos web comuns, mas elas ainda brilham em nichos específicos como desenvolvimento de jogos ou sistemas legados de grandes corporações.
Você provavelmente nunca usará Mercurial ou SVN em uma vaga de Backend .NET moderna (Boticário, por exemplo, é 100% Git). O conhecimento dessas alternativas serve mais para entender a teoria de **Gerenciamento de Configuração** e saber escolher a ferramenta certa se um dia você trabalhar com jogos ou arquivos binários gigantes.

**O Papel do Desenvolvedor no DevSecOps** No cenário moderno, a segurança não é um "check" feito apenas no final pelo time de infraestrutura; ela é **Shift-Left**. Isso significa que o desenvolvedor é o primeiro responsável: validando dependências (NuGet), tratando exceções para não vazar _Stack Traces_ em produção e garantindo que o banco de dados (MySQL) opere com o **Princípio do Menor Privilégio** (o usuário da aplicação nunca deve ser o _root_).
