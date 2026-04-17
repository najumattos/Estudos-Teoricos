## O Paradigma Corporativo: Do Git ao ALM

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
