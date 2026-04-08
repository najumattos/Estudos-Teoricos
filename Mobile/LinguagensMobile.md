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

<h3>  *Swift* | Para Desenvolvimento Nativo IOS</h3>

Em Swift moderno, utilizamos o SwiftUI. O código é muito limpo e focado no que deve aparecer na tela.

```ts
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .padding()
            .font(.largeTitle)
    }
}
```

<h3>*Kotlin* | Para Desenvolvimento Nativo Android</h3>
No Android moderno, usamos o Jetpack Compose. Note como ele usa a anotação @Composable para definir que aquela função gera um elemento visual.

```ts
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable

@Composable
fun HelloWorld() {
    Text(text = "Hello, World!")
}
```

<h3> *Dart* | Para Desenvolvimento Cross-Platform</h3>
O Flutter (Dart) é conhecido por ser "tudo é um widget". O código é um pouco mais extenso porque ele define toda a estrutura da aplicação.

```ts
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

<h3> *React (expo)* | Para Desenvolvimento Cross-Platform</h3>
No React Native puro, você é responsável por gerenciar as pastas android e ios do projeto. No Expo, o código do componente é o mesmo, mas o ponto de entrada é simplificado. O Expo abstrai as configurações nativas.

```ts
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World (Expo)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
