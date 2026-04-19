
Analisar requisito com calma
-   **RNF-04:**  A especialidade do pintor deve ser restrita aos valores definidos no RF-03.
#
* Tabela Cliente
IdClienteCPF
NomeCompleto
Telefone
ListaVeiculosVinculados

* Tabela Veiculo
IdVeiculoPlaca
Marca
Modelo
AnoFabricacao
DonoVeiculo(FK)

* Tabela Funcionario
IdFuncionarioCPF
NomeCompleto
DataContratacao
TipoFuncionario(funileiros  e pintores)

>O funileiro possui uma certificação técnica obtida no SENAI. O pintor possui uma especialidade (automotivo, industrial ou geral). Todo funcionário é de um desses dois tipos — não existe funcionário sem tipo definido.
>

Tabela OrdemServiço
IdOS
Veiculo(FK)
DescricaoProblema
DataEntrada
DataSaida
StatusEnum(Aberta, Em Andamento, Aguardando Peça, Concluída ou Cancelada).
ListaServicosRealizados
FuncionarioQueAbriuOS(FK)
FuncionarioResponsavel(FK)
> FuncionarioQueAbriuOS e FuncionarioResponsavel podem ou não ser a mesma pessoa — ambos devem ser registrados explicitamente.
>

Tabela Servico
idServico
Nome
PrecoBase
PrecoCobrado
>Ao incluir um serviço em uma OS, o sistema deve registrar o **valor efetivamente cobrado**, pois pode haver desconto em relação ao preço padrão.

Tabela Auditoria
idTabelaAuditada
CriadoEm
AlteradoEm
AlteradoPor
DeletadoEm (começa null)


estudo de caso completo:https://github.com/DSM-Fatec-Jahu/Banco-de-Dados-Relacional-IBD015/blob/main/atividades/Avaliacao_P1_IBD015.md