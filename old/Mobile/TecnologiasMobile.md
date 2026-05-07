# Tecnologias Mobile
Ao escolher uma ferramenta, levar em consideração custo, desempenho e experiência do usuário (UX)

### Comparativo Geral

|               | Nativo         | Cross-platform  | PWA (Progressive Web Apps) |
| ------------- |:--------------:|:---------------:|:--------------------------:|
| Vantagens     | Melhor performance possível, acesso imediato a todas as APIs do sistema (como sensores e câmeras) e interface 100% fluida.     | Permite escrever um único código que funciona tanto em Android quanto em iOS. Esta é a categoria mais popular no mercado atual. |  Custo baixíssimo, não precisa baixar na App Store/Play Store (acesso via URL) e atualização instantânea. |
||
| Desvantagens  | Custo elevado (é necessário manter dois códigos e, muitas vezes, duas equipes diferentes) e maior tempo de desenvolvimento. | O arquivo final (.apk ou .ipa) costuma ser maior do que um app nativo,  Atraso em Novas Funcionalidades, Dependência de Terceiros | Acesso limitado ao hardware e performance inferior aos apps instalados. |
||
| Utilização    | Apps de alto desempenho como jogos, edição de vídeo, ou apps de bancos que exigem segurança máxima.     | Apps de serviços, e-commerce, redes sociais | E-commerces simples, portais de conteúdo ou MVPs (mínimo produto viável). |
||
| Linguagens    | Swift  Kotlin  Compose  Java C++      | Flutter Dart  React Native JavaScript / TS  Kotlin Multiplatform (KMP) Kotlin  NET MAUI C# | Html, Css, Js |
||
| Manutenção    | Divisão por funcionalidades | Uma única equipe faz o app para os dois sistemas | uma única equipe Web |
##
### Apps feitos Nativamente

|               | IOS   | Android   | Explicação |
| ------------- |-------|-----------|------------|
| **Airbnb**     | Swift / SwiftU | Kotlin / Compose     | Embora tenham tentado o React Native no passado, eles voltaram para o nativo para garantir que a experiência de navegação e os mapas fossem extremamente fluidos e estáveis. |
||
| **LinkedIn**      | Swift / SwiftU | Kotlin / Compose     | O app foi totalmente reconstruído em Swift para ganhar velocidade e facilitar a manutenção de uma base de usuários gigantesca.|
||
| **Google Maps**      | Objective-C++ / Swift | Java / Kotlin / C++ | Um dos apps mais complexos do mundo. Ele exige o máximo do hardware para renderizar mapas 3D e processar dados de sensores em tempo real, por isso é Kotlin puro. |
||
| **Pinterest**      | Swift | Kotlin     | Migrou sua base para Kotlin para reduzir o número de linhas de código e aumentar a estabilidade do app, resultando em menos falhas (crashes). |

### Esses exemplos acima lidam com:

* **Sensores constantes:** GPS, acelerômetro e câmera operando simultaneamente;

* **Multithreading:** Processamento de muitos dados em segundo plano (como o download de mapas) sem travar a tela;

* **Segurança e Biometria:** Apps como WhatsApp Business e apps de Bancos preferem o nativo para ter controle total sobre as APIs de criptografia e leitura de digital/face.

##
### Apps feitos em Cross-platform

|               | IOS e Android | Explicação |
| ------------- |---------------|------------|
| **Instagram & Facebook**     | React Native | A Meta visa entregar funcionalidades rapidamente em ambas as plataformas. |
||
|**Nubank**| Flutter-Dart       |É um dos maiores cases mundiais. Eles escolheram o Flutter para permitir que uma única equipe desenvolvesse funcionalidades para Android e iOS simultaneamente com alta performance.|
||
|**Netflix**|Kotlin Multiplatform (KMP)| Utiliza KMP para gerenciar a lógica de gerenciamento de cache e download de vídeos, garantindo que as regras sejam as mesmas no Android e iOS.|
||
|**McDonald’s**| O app global usa KMP para a lógica de pedidos e promoções. |  Se o app é um e-commerce ou uma rede social, o ganho de performance do nativo não justifica o custo extra.

##

### Quando usar PWA (Progressive Web Apps)?

|               | WEB | Explicação |
| ------------- |---------------|------------|
| **Starbucks**     | JavaScript (React), Service Workers | É extremamente leve (99% menor que o app iOS). Ele permite que o usuário navegue no cardápio, personalize pedidos e adicione itens ao carrinho mesmo sem internet. Quando a conexão volta, o app sincroniza o pedido. |
||
|**Twitter Lite (X)**| JavaScript (React), Node.js | O Twitter foi um dos pioneiros em transformar sua versão mobile web em um PWA. O foco aqui é o consumo de dados. Em países onde a internet é cara ou lenta, o PWA carrega instantaneamente.Ele oferece notificações push e uma experiência de scroll muito próxima do nativo, mas rodando inteiramente dentro do navegador.|
||
|**Uber**| JavaScript (Preact) | A Uber criou um PWA para garantir que qualquer pessoa, com qualquer celular (mesmo os bem antigos com pouca memória), pudesse pedir uma viagem. O app nativo da Uber é pesado. O PWA carrega em menos de 3 segundos em redes 2G. Ele utiliza a API de geolocalização do navegador de forma tão eficiente que parece um app instalado.|
||
|**Pinterest**| JavaScript (React), Redux| O PWA como "Isca" (Aquisição): Quando alguém pesquisa algo no Google e cai no site, essa pessoa não quer baixar um app de 100MB na hora. O PWA permite que ela tenha uma experiência rápida e quase nativa diretamente no navegador, convencendo-a a criar uma conta.|

>Os exemplos acima utilizam uma estratégia híbrida, operando com as duas tecnologias simultaneamente para objetivos diferentes.
Se você não baixar o app e apenas acessar o site pelo navegador, você estará usando o PWA.

##

### Conclusão
O Cross-platform "dá conta" de 80% a 90% dos apps do mercado (apps de serviços, e-commerce, redes sociais). Os os que exigem hardware extremo ou inovações de interface, ainda moram no Nativo. O PWA tem sua importância apesar de ser o mais limitado das tres opções.

**E como fica o backend?**

BFF (Backend For Frontend).
É um padrão de arquitetura muito usado por essas empresas (LinkedIn, Airbnb). Em vez de ter um backend genérico para tudo, você cria uma "camada" de backend específica para o Mobile e outra para a Web. Isso permite que você envie apenas os dados estritamente necessários para o celular, economizando bateria e dados do usuário. O fato de o backend ser único prova que as tecnologias não precisam ser iguais. Você pode ter um backend robusto em C# .NET 9 servindo um frontend feito em Flutter ou Swift sem nenhum conflito.

* Dev iOS: Faz a tela em Swift e consome o endpoint respectivo.
* Dev Android: Faz a mesma tela em Kotlin e consome o mesmo endpoint.

