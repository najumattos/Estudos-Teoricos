# Linguagens Mobile
Para o desenvolvimento mobile, cada abordagem possui uma linguagem de "primeira classe" (mais recomendada e suportada pelas donas das plataformas).

## Comparativo Geral

| | Linguagem | Explicação|
| :-----|--------: |:--------------:|
|**Nativo IOS**| Swift |É moderna, rápida e substituiu o antigo Objective-C. Para a interface, utiliza-se o framework SwiftUI.|
||
|**Nativo Android** | Kotlin | Embora o Java ainda seja muito usado em sistemas legados, o Google recomenda o Kotlin ("Kotlin-first"). Para a interface moderna, utiliza-se o Jetpack Compose.|
||
|**Cross-platform** |Flutter(Dart); React Native(js e tsx); MAUI/Xamarin(C# .net); KMP | Aqui a linguagem depende do Framework que você escolher, pois cada um utiliza uma base diferente para "traduzir" o código para ambos os sistemas|
||
| **PWA** |HTML, CSS, JS e frameworks| Como o PWA é essencialmente um site com funcionalidades de aplicativo, ele utiliza as tecnologias padrão da web. O diferencial do PWA é o uso de Service Workers (scripts em JavaScript que rodam em segundo plano) para permitir o funcionamento offline e notificações.|


## Hello World Entre Linguagens Mobile

###  *Swift* | Para Desenvolvimento Nativo IOS
Em Swift moderno, utilizamos o SwiftUI. O código é muito limpo e focado no que deve aparecer na tela.
```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .padding()
            .font(.largeTitle)
    }
}
```
É uma linguagem "açucarada". Ela tenta ser o mais parecida possível com a leitura humana. Exemplo: func buscarUsuario(id: Int). Usa modificadores encadeados (ex: .font().color()) que reduzem linhas de código. A linguagem é fácil, mas o ecossistema da Apple (Xcode, certificados, padrões de design) é bem rigoroso e exige adaptação.
##
### *Kotlin* | Para Desenvolvimento Nativo Android
No Android moderno, usamos o Jetpack Compose. Note como ele usa a anotação @Composable para definir que aquela função gera um elemento visual.
```kotlin
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun HelloWorld() {
    Text(text = "Hello, World!")
}
```
Muito parecida com o C# moderno. É concisa e elimina muito do "barulho" do Java antigo (não precisa de ponto e vírgula, por exemplo). Focada em funções. Você escreve o que quer, e não como o sistema deve desenhar.

##
### *Dart* | Para Desenvolvimento Cross-Platform
O Flutter (Dart) é conhecido por ser "tudo é um widget". O código é um pouco mais extenso porque ele define toda a estrutura da aplicação.
```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const Center(
      child: Text(
        'Hello, World!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```
É o "meio do caminho" entre Java e JavaScript. Para quem conhece C#, o Dart parece um primo muito próximo, sendo muito fácil de ler. Como "tudo é um widget", você acaba criando árvores gigantescas de parênteses e chaves.

##
### *React (expo)* | Para Desenvolvimento Cross-Platform

No React Native puro, você é responsável por gerenciar as pastas android e ios do projeto. No Expo, o código do componente é o mesmo, mas o ponto de entrada é simplificado. O Expo abstrai as configurações nativas.
```ts
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World (Expo)</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```
Mistura lógica de programação com algo que parece HTML. A estrutura é simples, mas a estilização (CSS-in-JS) costuma ocupar muitas linhas de código.

##
