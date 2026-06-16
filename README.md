# Projeto Tolkien

![Capa do Projeto Tolkien](assets/capa.webp)

## Descrição do projeto

Mini site desenvolvido com HTML e CSS, inspirado no universo de J.R.R. Tolkien,
especialmente em elementos da Terra-média, suas histórias, personagens e ambientação fantástica.

## Acesse o projeto

O site está publicado pelo GitHub Pages:

https://andyinthenw.github.io/projeto-tolkien/index.html

## Sobre o projeto

Este projeto foi criado com fins de estudo e prática de desenvolvimento web.
A proposta é apresentar um mini site simples, organizado em páginas HTML interligadas, utilizando
estrutura semântica, navegação, imagens, listas, tabela, formulário e estilização com CSS.

O projeto também inclui pequenas melhorias de acessibilidade, performance e organização, como CSS
compartilhado, carregamento otimizado de imagens e formulário de contato conectado ao FormSubmit.

## Estrutura do site

O projeto contém os seguintes arquivos e pastas:

* `index.html` — página inicial do site
* `sobre.html` — página com informações sobre Tolkien e a Terra-média
* `contato.html` — página com formulário de contato
* `obrigado.html` — página exibida após o envio do formulário
* `assets/styles.css` — arquivo de estilos compartilhado pelas páginas
* `assets/` — pasta com imagens, ícones e outros arquivos visuais

## Tecnologias utilizadas

* HTML5
* CSS3
* FormSubmit
* Git
* GitHub
* GitHub Pages

## Melhorias implementadas

* Centralização dos estilos em um único arquivo CSS
* Remoção de CSS repetido dentro das páginas HTML
* Uso de tags semânticas para organizar o conteúdo
* Melhorias de acessibilidade na navegação e no formulário
* Links externos com `rel="noopener noreferrer"`
* Imagens com `loading="lazy"` e `decoding="async"`
* Tabela com `caption`, `thead`, `tbody` e `scope`
* Formulário com validação HTML e envio real por FormSubmit
* Remoção de imagem pesada que não estava sendo usada no site

## Objetivo

O objetivo principal do projeto é praticar conceitos básicos de desenvolvimento web, como:

* Estruturação de páginas HTML
* Uso de tags semânticas
* Criação de menus de navegação
* Organização de arquivos
* Separação entre HTML e CSS
* Publicação de projeto com GitHub Pages
* Versionamento com Git

## Como visualizar localmente

Para abrir o projeto no computador:

1. Clone o repositório:

```bash
git clone https://github.com/AndyinTheNW/projeto-tolkien.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto-tolkien
```

3. Abra o arquivo `index.html` no navegador.

Também é possível usar a extensão **Live Server** no VS Code para visualizar o site localmente.

## Observação sobre o formulário de contato

O formulário da página de contato usa o FormSubmit para enviar mensagens para:

```text
andersonalmeida1008@gmail.com
```

No primeiro envio, o FormSubmit manda um e-mail de confirmação para ativar o recebimento das
mensagens. Depois dessa confirmação, os próximos envios passam a chegar normalmente no e-mail
configurado.

## Autor

Desenvolvido por **AndyinTheNW**.
