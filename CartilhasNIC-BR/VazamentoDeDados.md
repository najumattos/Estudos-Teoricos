# Fascículo: Vazamento de Dados

Prevenir o vazamento de informações é uma prioridade absoluta no ciclo de vida de qualquer aplicação, pois dados expostos podem comprometer a privacidade dos usuários e causar prejuízos financeiros severos. No entanto, a segurança perfeita é um alvo em constante movimento; por isso, além de construir barreiras robustas, é vital saber como reagir de forma técnica e ética quando um incidente ocorre
Para um desenvolvedor, essas cartilhas funcionam como um guia de requisitos não funcionais e boas práticas de arquitetura voltadas para a segurança e conformidade (LGPD). Em vez de apenas "dicas de usuário", elas representam vulnerabilidades que você deve prever no código e na infraestrutura.


## 1. Como Proteger o Software?
Na Cartilha de Proteção de Dados foi explicada a importância de proteger os dados durante o desenvolvimento, mas o software deve fornecer camadas de defesa que dificultem o acesso indevido desde o desenvolvimento até a utilização do software em produção

-   **Criptografia:** Não é opcional; deve ser aplicada tanto em dados em repouso (banco de dados e mídias) quanto em trânsito (uso de conexões seguras/TLS). Uso de protocolos HTTPS para tráfego web, criptografia AES-256 para volumes de banco de dados e hashing de senhas com algoritmos
    
-   **Autenticação Robusta:** O sistema deve suportar senhas fortes e, idealmente, oferecer Verificação em Duas Etapas (2FA) e notificações de login para o usuário.
    
-   **Gerenciamento de Sessão:** Implementar funções de _logout_ eficientes e garantir que os dados de navegação (cookies) sejam limitados ao estritamente necessário para o funcionamento da sessão.
-   **Permissões de App:** Ao desenvolver mobile, peça apenas as permissões essenciais para a funcionalidade (ex: não pedir acesso aos contatos se o app for apenas um teste de velocidade).
    
-   **Minimização de Dados:** No backend, questione a necessidade de cada campo no cadastro e o tempo de retenção desses dados
- **Estratégia de Backup:** O sistema de backup deve ser regular, testado periodicamente e possuir ao menos uma versão _off-line_ para garantir a recuperação em caso de invasão total.
- **Manutenção:** Atualizar sistemas e bibliotecas (dependências) é uma tarefa de segurança crítica
- **Resposta a Vazamentos:** Em caso de incidentes em que a base de dados seja exposta por terceiros, a arquitetura deve permitir identificar quais titulares foram afetados para cumprir a obrigação legal de notificação via ANPD

## 2. O que fazer em caso de vazamentos?
-   **Avaliação interna:** Identificar a natureza do incidente, quais dados foram expostos e o nível de risco para os titulares.
    
-   **Comunicação à ANPD:** A instituição deve notificar a Autoridade Nacional de Proteção de Dados sobre o ocorrido.
    
-   **Notificação aos titulares:** É obrigatório informar às pessoas afetadas, detalhando quais dados foram vazados e o que a empresa está fazendo para mitigar os riscos.
    
-   **Transparência e auxílio:** Fornecer orientações claras aos usuários sobre como eles podem se proteger após o incidente.
- Para evitar que o problema se repita ou se agrave, o fluxo de trabalho técnico geralmente envolve:

-   **Isolamento:** Identificar o ponto de entrada da invasão (vulnerabilidade no código, falha de configuração ou credencial exposta) e "estancar" o vazamento.
    
-   **Auditoria de logs:** Analisar os rastros deixados para entender a extensão do acesso não autorizado.
    
-   **Refatoração de segurança:** Implementar as correções necessárias, como reforçar o hashing de senhas ou revisar as permissões de acesso ao banco de dados.
