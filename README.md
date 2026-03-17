# 🎨 Random Color Generator

ANTES | ESTADO ATUAL DO APP
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ea2f3d4e-9084-4ee0-8065-0e0bdb7166d3" />


Um gerador de cores aleatórias simples e interativo feito com **HTML, CSS e JavaScript puro**.  
A ferramenta permite gerar cores aleatórias, visualizar a cor em tempo real, copiar o código hexadecimal e manter um histórico das últimas cores geradas.

Este projeto foi criado como prática de **manipulação de DOM, eventos e lógica em JavaScript**, além de organização de layout com **CSS Grid**.

---

## ✨ Funcionalidades

- 🎲 **Gerar cor aleatória** com um clique
- 🔍 **Preview da cor** exibido em um círculo
- 📋 **Copiar código HEX** da cor atual
- 🧠 **Histórico das últimas 9 cores geradas**
- 🖱️ **Clique nas cores do histórico para copiar**
- 🖱️ **Clique no preview para copiar a cor**
- 💬 **Feedback visual quando uma cor é copiada**
- 🧩 Layout organizado em **grid 3×3**

---

## 🖼️ Interface

A aplicação possui três áreas principais:

1. **Controles**
   - Botão para gerar nova cor
   - Botão para copiar o código HEX

2. **Preview**
   - Um círculo que mostra a cor atual gerada

3. **Histórico de cores**
   - Grid 3×3 com as últimas cores geradas
   - Cada cor pode ser clicada para copiar o HEX

---

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
  - Flexbox
  - CSS Grid
- **JavaScript (Vanilla JS)**
  - DOM Manipulation
  - Event Listeners
  - Clipboard API (`navigator.clipboard`)

---

## 📂 Estrutura do projeto


random-color-generator
│
├── index.html
├── script.js
├── styles/
│ └── style.css
│
└── assets/
└── icons / cursor / imagens


---

## 🚀 Como usar

1. Clone o repositório:


git clone https://github.com/seu-usuario/random-color-generator.git


2. Entre na pasta do projeto:


cd random-color-generator


3. Abra o arquivo abaixo no navegador:


index.html


Nenhuma instalação adicional é necessária.

---

## 📌 Como funciona

A cor é gerada usando:

```javascript
Math.random()

O valor aleatório é convertido para hexadecimal, produzindo códigos como:

#3FA9F5
#FF6A00
#2ECC71

Essas cores são armazenadas em um array de histórico, que mantém apenas as 9 cores mais recentes.

💡 Possíveis melhorias futuras

Algumas ideias para evolução do projeto:

⌨️ Gerar cor pressionando barra de espaço

💾 Salvar histórico usando localStorage

🏷️ Mostrar o HEX ao passar o mouse

🎨 Gerar paletas de cores

📱 Melhorar responsividade para mobile

🌙 Adicionar modo escuro

🎯 Cursor estilo conta-gotas

🎯 Objetivo do projeto

Este projeto foi desenvolvido como prática de:

lógica em JavaScript

manipulação de elementos no DOM

controle de estado com arrays

criação de interfaces simples com CSS

👨‍💻 Autor

Desenvolvido por Victor Aviz durante seus estudos de desenvolvimento web.
