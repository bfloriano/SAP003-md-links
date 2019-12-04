# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Considerações gerais](#2-considerações-gerais)
* [3. Instalação](#3-instalação)
* [4. Como utilizar](#4-como-utilizar)
* [5. Valor de retorno](#5-valor-de-retorno)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação muito popular entre os programadores. 
É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional `README.md`).

Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão quebrados, ou que já não são válidos e isso prejudica muito o valor da informação que está ali.

Durante o bootcamp da Laboratória, foi proposto criar uma ferramenta, usando [Node.js](https://nodejs.org/), que leia e analise arquivos no formato `Markdown`, para verificar os arquivos que contenham links e mostrar algumas estatísticas.

## 2. Considerações gerais

* A biblioteca e script executável (ferramenta de linha de comando - CLI) foram implementados em JavaScript para serem executadas com Node.JS. 

* Foram executados testes unitários utilizando o [Jest](https://jestjs.io/) para cobrir os _statements_, _functions_, _lines_ e _branches_. 

## 3. Instalação

* Para usar esta biblioteca, você deve ter instalado os Node.js no seu computador.

* O módulo é instalável executando o seguinte comando no terminal:

  `npm install -g bfloriano/SAP003-md-links`. 

## 4. Como utilizar

Ao instalar a biblioteca, é possível utilizá-la pelo arquivo _executável_ que pode ser chamado por linha de comando:
  
  `mdLinks <path-to-file>`

  ```
  $ mdLinks ./some/example.md
  ```

  ## 5. Valor de retorno

A função retorna promessa (Promise) com uma array de objetos, em que cada objeto representa um link e contém as seguintes propriedades:

```
(Title) text: Texto dentro do markdown.

(URL) href: URL do link encontrado.
```