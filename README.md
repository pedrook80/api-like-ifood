# API LIKE IFOOD
Projeto que simula uma API de um delivery utilizando em Node.Js

Express para criação de rotas

Bcrypt para segurança de senhas

JWT para utilização de token para o controle de usuario

MongoDB como banco de dados e utilizando o Mongoose como intermedio para conexão
  * A modelagem de banco ficou divida em Users, Adress, Cards, Stores, Products e Carts
  * Users contem usuarios
  * Adress contem o endereço dos usuarios 
  * Cards contem os cartões dos usuarios 
  * Stores contem informações das lojas
  * Products contem os produtos de cada loja
  * Carts são os carrinhos de cada usuario 
 
As rotas estão salvas na pasta RoutesPostman e foi usado o Postman para documentação dessas rotas

## Instalar dependencias 
Necessita ter um gerenciador de pacotes instalado em sua maquina
```js
$ npm install
```

## Banco de dados
Foi utilizado o MongoDB Atlas que é em nuvem utilizando a parte gratuita do mesmo 

## .ENV
Para rodar a API devera ter no seu .ENV as seguintes variaveis MONGO_URI (Do qual é a conexão com o banco em nuvem) e SECRET (Para encriptação de senhas)

## Iniando o sistema

DEV:
```js
$  npm run dev
```

```js
$  npm run start
```
O sistema vai funcionar na seguinte porta:
http://localhost:3333

