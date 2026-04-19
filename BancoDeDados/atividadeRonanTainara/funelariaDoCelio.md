
* Tabela Usuario
        IdUsuario
        CPF
        NomeCompleto
        Telefone   
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)   
        TipoUsuario(Funcionario, Cliente, ambos)

* Tabela Funcionario
        idFuncionario(usuarioFK)        
        DataContratacao

        Certificacao nullable (true se TipoFuncionarioEnum.funileiro)
        
        EspecialidadeEnum nullable(automotivo, industrial ou geral) (notnull se TipoFuncionarioEnum.pintor)
        
        TipoFuncionarioEnum(funileiro, pintor)
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)

* Tabela Veiculo
        IdVeiculo
        Placa
        Marca
        Modelo
        AnoFabricacao
        DonoVeiculo(usuarioFK)
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)

* Tabela OrdemServico
        IdOS
        Veiculo(veiculoFK)
        DescricaoProblema
        DataEntrada
        DataSaida
        StatusEnum(Aberta, Em Andamento, Aguardando Peça, Concluída ou Cancelada)
        FuncionarioQueAbriuOS(funcionarioFK)
        FuncionarioResponsavel(funcionarioFK)
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)

* Tabela Servico
        idServico
        Nome
        PrecoBase
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)

* ItemOrdemServico
        IdOS (OrdemServiçoFK)
        ValorCobrado
        CriadoEm
        AlteradoEm
        AlteradoPor(usuarioFK)
        DeletadoEm (começa null)


estudo de caso completo:https://github.com/DSM-Fatec-Jahu/Banco-de-Dados-Relacional-IBD015/blob/main/atividades/Avaliacao_P1_IBD015.md