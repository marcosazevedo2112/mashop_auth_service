<h1 align="center">Mashop Auth Service</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/marcosazevedo2112/mashop_auth_service?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/marcosazevedo2112/mashop_auth_service?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/marcosazevedo2112/mashop_auth_service?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/marcosazevedo2112/mashop_auth_service?color=56BEB8">
</p>

Status

<h4 align="center"> 
	🚧  Mashop Auth Service 🚀 Em construção...  🚧
</h4> 

<hr>

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#sparkles-funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-pré-requisitos">Pré requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; | &#xa0;
  <a href="#memo-licença">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/marcosazevedo2112" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Um microsserviço que proverá os endpoints de autenticação para o projeto MaShop. A MaShop é um projeto que estou fazendo para melhorar minhas habilidades com NodeJS e meu entendimento de como funciona JWT e a lib Bcrypt. mais informações poderão ser encontradas na wiki que farei com todos microsserviços e o frontend.

## :sparkles: Funcionalidades ##

:heavy_check_mark: Sistema de cadastro e login;\
:heavy_check_mark: Verifica tokens pelo endpoint ```/users?token=[token]```;\
:heavy_check_mark: Senhas seguras usando bcrypt;

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org)
- [MariaDB](https://mariadb.org)

## :white_check_mark: Pré requisitos ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com), [Node](https://nodejs.org/en/) e o [MariaDB](https://mariadb.org) instalados em sua maquina.

## :checkered_flag: Começando ##

```bash
# Clone este repositório
$ git clone https://github.com/marcosazevedo2112/mashop_auth_service

# Entre na pasta
$ cd mashop_auth_service

# Instale as dependências
$ npm install

# Crie o arquivo .env com as seguintes variaveis
$ DB_USER=[YOUR_KEY]
$ DB_PASSWORD=[YOUR_KEY]
$ DB_HOST=[YOUR_KEY]
$ DB_PORT=[YOUR_KEY]
$ JWT_SECRET=[YOUR_KEY]

# Para iniciar o projeto
$ npm run start

# O app vai inicializar em <http://localhost:3000>
```

## :memo: Licença ##

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.


Feito com :heart: por <a href="https://github.com/marcosazevedo2112" target="_blank">Marcos </a>

&#xa0;

<a href="#top">Voltar para o topo</a>
