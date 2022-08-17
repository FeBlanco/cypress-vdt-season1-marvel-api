<h2 align="center">
<img align="center"  height="120" width="120" src="https://raw.githubusercontent.com/cypress-io/cypress-icons/e61b554695b28267a1387a839f816c73e7a7e95e/src/logo/cypress-io-logo.svg"> Viver de Teste 1.ª Temporada
</h2>

## Marvel API

Projeto feito no curso da Qacademy utilizando o cypress para automatizar a API da Marvel

![cypress-api-marvel](https://user-images.githubusercontent.com/43914674/185012638-ba29a336-689e-4e96-b1d1-9972639d3c31.gif)


## Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Express] - framework onde a API foi construída
- [Cypress] - framework de testes automatizados
- [MongoDB] - Banco de dados (Não relacional)

## 🔖 Requisitos funcionais

### Cadastro de Personagens

- [x] Deve poder cadastrar um personagem com as características conforme tabela abaixo:
- [x] Deve retornar o id do personagem ao realizar o cadastro
- [x] Não deve cadastrar personagem com nome duplicado
- [x] Com exceção da idade, todos os campos são obrigatórios

| campos | descrição                             | tipo     | obrigatório |
| ------ | :------------------------------------ | -------- | ----------- |
| name   | nome do personagem                    | texto    | sim         |
| age    | idade                                 | inteiro  | não         |
| alias  | codinome                              | texto    | sim         |
| team   | afiliações (vingadores, x-men, etc..) | lista    | sim         |
| active | se o personagem está ativo ou não     | booleano | sim         |

### Busca de Personagens

- [x] Deve retornar uma lista de personagens cadastrados
- [x] Deve poder buscar personagem por nome
- [x] Deve poder buscar personagem pelo id
- [x] Deve retornar 404 ao buscar por id não cadastrado

### Remover Personagem

- [x] Deve poder remover por id, um personagem cadastrado
- [x] Deve retornar não encontrado ao remover por id não cadastrado

