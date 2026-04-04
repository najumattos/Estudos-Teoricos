
# Comunicação cliente/API/Banco de Dados

Esse documento tem o objetivo de explicar a importancia do uso de APIs para o bom relacionamento entre cliente/servidor
   ```bash
               cliente <------> Senha.Cofre
Connectamente.FRONT <------> Segurança.bancoDeDados 
   ```

**A API é a Portaria do Banco de Dados**

Manipular(CONSULTAR, ADICIONAR, EDITAR, EXCLUIR) qualquer informação do banco de dados é um processo que envolve ***troca de informações sigilosas***. Essa troca de informações precisa ser feita de forma segura para que o connectamente não seja um risco de segurança de dados para o banco de dados.

   ```bash
               cliente <-----------------------> senha.Cofre
               cliente <----AgenciaBancaria----> Senha.Cofre
Connectamente.FRONT <-----------------------> Segurança.bancoDeDados
Connectamente.FRONT <---Connectamente.API---> Segurança.bancoDeDados
   ```
A Api é um gerenciador de dados. Na vida real, onde sistemas tem que ser seguros, não existe Frontend consumindo uma base de dados diretamente sem uma API pra gerenciar.

**Como deve ocorrrer a comunicação entre Interface e Banco?**
  ```bash
FRONT <---API---> BANCO
 O FRONT se comunica com a API pelos metodos dos Controllers
 A API gerencia as requisições com os metodos dos Services
          O CONTROLLER se comunica com o SERVICE pela Interface
   A API se comunica com o BANCO pelo AppDbContext

PROCESSO de Envio de Requisição
     FRONT.AtualizarProntuario(dadosProntuarioDTO, idQuemAtualizou, idProntuario) ----------------------------------> Front.Envia uma requisição
     API.AtualizarProntuario("idQuemAtualizou quer atualizar algum dado do prontuario.idProntuario") ---------------> API.Processa a requisicao(Faz todas as verificações necessarias e envia para o banco os dados a serem atualizados)
     BANCO.AdicionarProntuarioAoBanco(INSERT INTO) -----------------------------------------------------------------> Banco.Altera as informações REQUISITADAS 

PROCESSO de Resposta
     BANCO.AdicionarProntuarioAoBanco(codMensagem) -----------------------------------------------------------------> Banco.Responde com um código. Estudar sobre codigos HTTP
     API.AtualizarProntuario("Seu prontuario foi atualizado com sucesso ou nao") -----------------------------------> API.Processa o codigo de erro. Monta uma mensagem amigavel para o front mostrar pro usuario.
     FRONT.AtualizarProntuario("O Prontuario foi atualizado ou nao") -----------------------------------------------> Front.Exibe pro usuario uma mensagem. O front tem que verificar SEMPRE se os dados digitados sao validos. para nao fazer uma requisição ATOA 
   ```
   **Caminho que a requisição percorre**
   ```bash
   RESUMINDO o bate e volta...
CLIENTE <------AgenciaBancaria.Recepcao------> Cofre
FRONT   <----------------API-----------------> Cofre

POR DENTRO DA API
FRONT   <-----------API.Controllers---API.Services---API.AppDbContext------------> BANCO
BANCO   <-----------API.AppDbContext---API.Services---API.Controllers------------> FRONT
   ```

## **Métodos HTTP**

   ```bash
cliente <------AgenciaBancaria.Recepcao------> Cofre
front   <-----------API.Controllers----------> Cofre
   ```
São através desses metodos que a comunicação entre FRONT(interface) e API é realizada.
Os metodos presentes nos controlles são a portaria da API, eles que dizem "O front quer atualizar o prontuario". Todo metodo do Controller retorna alguma coisa para o front. As vezes é um texto de "Cadastro Atualizado" ou um objeto complexo como DTO

**O que são DTOs?**

DTOs são formularios, é o "cesto" os dados são transportados transitam pelas requisições
   ```bash
      // Utiliza-se PUT e POST (Para atualizar, cadastrar)
      Cliente ENVIA um formulario -> A API PROCESSA o formulario, valida os dados -> Banco de Dados atualiza os campos com os dados do DTO

      //Utiliza-se GET(Para VisualizarLista(), VisualizarItemDaLista())
      Cliente QUER um formulario -> A API PROCESSA o pedido, verifica se quem ta pedindo tem permissão  -> Banco de Dados atualiza os campos com os dados do DTO

   GET GENÉRICO                                                          GET DETALHADO
Se o usuario quer uma LISTA o DTO pode ser generico. Ou seja,         Se o usuario quer VisualizarProntuarioInfantil(), não tem como exibir informações genericas
MÉTODOS VisualizarTodos() A API vai responder com                     pois o usuario está querendo visualizar DETALHES do formulario.
IEnumerable<ProntuarioBasicoDto>                                      Metodos de VisualizarPerfil(), VisualizarProntuarioCompleto() a API vai responder com
pois os dados exibidos em uma lista são poucos.                       DTO especifico como por exemplo ProntuarioCompletoDto
Não tem a necessidade da API retornar um prontuario especifico
se as informações basicas de todos prontuarios são iguais.

   ```

**METODOS PUT E POST**
     Geralmente ***recebe DTO***
   ```bash
FRONTEND  faz uma requisição - e envia um DTO preenchido           Atualizar(formularioDTO)
BACKEND   responde           - com uma mensagem de sucesso/erro    Atualizar("Prontuario atualizado ou nao HAHAHA")
   ```

**METODOS GET** Geralmente ***retorna DTO***
   ```bash
FRONTEND faz uma requisição - que pode ou nao enviar parâmetros 
BACKEND  responde           - com a resposta pra requisição
   ```
   ```bash
EXEMPLO GET sem parâmetro

CLIENTE:             lanche ComerLanche() = "Me da um lanche"
FRONT:               <listaProntuarioDto> VisualizarTodosProntuarios() = "Me da uma lista de todos Prontuários"          

    
EXEMPLO GET com parâmetro

CLIENTE.Ana:         EspecialComBacon PedirLanche(cliente, lanche, acrescimo) = "eu sou a cliente.Ana, eu quero um lanche.especial com acrescimo.bacon 
          
FRONT.coordenadora:  <listaProntuariosDto> VisualizarTodosProntuarios(tipoPerfil, aluno) = "Eu sou tipoPerfil.coordenadora e quero ver todos os prontuários de aluno.Tainara"              
FRONT.estudante:     <listaProntuarios> VisualizarTodosProntuarios(tipoPerfil, aluno) = "Eu sou tipoPerfil.estudante e quero ver todos os prontuários de aluno.Tainara"   

FRONT.tantoFaz:      <listaProntuariosDto> VisualizarTodosProntuariosPorAluno(aluno) = "Eu sou tipoPerfil.estudante e quero ver todos os meus prontuários"     
FRONT.tantoFaz:      <listaProntuariosDto> VisualizarTodosProntuariosPorAluno(aluno) = "Eu sou tipoPerfil.coordenador e quero ver todos os prontuários de aluno.Tainara"    
   ```

```
Repositorio Completo: https://github.com/najumattos/AtividadeJavascript.git
```
