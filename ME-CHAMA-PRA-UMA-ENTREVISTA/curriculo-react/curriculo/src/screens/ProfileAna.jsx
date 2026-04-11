import "./Style.css";
import HeaderCV from "../components/HeaderCV";
import SectionCV from "../components/SectionCV";

export default function ProfileAna() {
  const identificacao = {
    nome: "ANA JULIA REIS DE MATTOS",
    titulo: "Estudante de Backend | C#, .NET & MySQL",
    img: "ana.jpg",
    descricao: "24 anos | Barra Bonita-SP | Solteira | (14)920044824",
  };
  const redesSociais = {
    emailPrincipal: "anareismattos.dev@gmail.com",
    emailSecundario: "anajuliamattos02@gmail.com",
    github: "github.com/najumattos/",
    linkedin: "linkedin.com/in/anajuliamattos/",
  };
  const objetivo =
    "Desenvolvedora focada em arquitetura de sistemas e qualidade de código (SOLID, Testes Unitários). Responsável por pela API Connectamente com implementação de autenticação JWT, integração de Docker e fluxos de CI/CD via GitHub Actions. Experiência prática em React e Metodologias Ágeis (Kanban). Minha vivência anterior no comércio e como líder de turma me proporcionou soft skills diferenciadas em comunicação, liderança e resolução de problemas.";
  const experiencias = [
    {
      titulo: "Lojas Silva (Estágio)",
      periodo: "08/2025 - 12/2025",
      descricao:
        "Contato com sistemas de PDV (Ponto de Venda), gestão de estoque, utilização de softwares de gestão, controle de caixa e curadoria de redes sociais.",
    },
    {
      titulo: "Lojas Algodão Doce",
      periodo: "11/2024 - 07/2025",
      descricao:
        "Desenvolvimento de habilidades aprendidas no curso de Marketing como, trabalho em equipe, organização e comunicação interpessoal",
    },
    {
      titulo: "Upper Consultoria (Estágio)",
      periodo: "11/2022 - 05/2023",
      descricao:
        "Atuei no desenvolvimento de projetos Web e Mobile com Angular e Flutter, participando desde a manutenção de sistemas até a estruturação de novas aplicações do zero. Essa vivência foi fundamental para consolidar meu entendimento sobre o ciclo de vida de software e a importância de equipes organizadas, despertando meu interesse prático por Arquitetura de Sistemas.",
    },
  ];
  const formacoes = [
    {
      titulo: "Técnico em Desenv. de Sistemas",
      periodo: "02/2025 - 07/2026",
      descricao: "ETEC Comendador João Rays",
    },
    {
      titulo: "Auxiliar em Marketing",
      periodo: "02/2024 - 07/2024",
      descricao: "ETEC Comendador João Rays",
    },
  ];
  const estudos = [
    {
      titulo: "O Programador Pragmático",
      periodo: "Em andamento",
      descricao: "leitura do livro e bla bla bla",
    },
    {
      titulo: "Código Limpo",
      periodo: "Em andamento",
      descricao: "leitura do livro e bla bla bla",
    },
  ];

  return (
    <>
      <header>
        <HeaderCV profile={identificacao} redeSocial={redesSociais}></HeaderCV>
      </header>
      <main>

        <section>
          <div className="title">
            <h2 className="objective-title">OBJETIVO</h2>
          </div>
          <p className="objective-text">{objetivo}</p>
        </section>

        <section>
          <div className="title">
          <h2 className="objective-title">EXPERIÊNCIA</h2>
          </div>
          <SectionCV itens={experiencias} />
        </section>

        <section className="formacao-estudos">

          <section>
            <div className="title">
            <h2 className="objective-title">FORMAÇÃO</h2>
            </div>
            <SectionCV itens={formacoes} />
          </section>

          <section>
            <div className="title">
            <h2 className="objective-title">ESTUDOS COMPLEMENTARES</h2>
            </div>
            <SectionCV itens={estudos} />
          </section>
        </section>
      </main>
    </>
  );
}
