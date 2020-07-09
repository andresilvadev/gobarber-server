## Descrição

Como iniciar com projeto GoBarber

## Instalação

- Acessar a pasta do projeto

```bash
$ npm install
```

- Execute o projeto com o Docker usando a flag -d para deixar em background a aplicação:

```bash
$ docker-compose up -d
```

- Acesse http://localhost:8080 para acessar o banco através do admininer

* Selecione o sistema **PostgreSQL**
* Informe o servidor **pgsql2** no caso o nome do container
* Informe o usuário **root**
* Informe a senha **root**
* Informe o banco **gonodemodulo2**

## Criando uma migração

```bash
$ npx sequelize migration:create --name=create-appointments
```

## Rodar as migrações do projeto

- Acesse a pasta do projeto nestjs e rode o comando abaixo

```bash
$ npx sequelize db:migrate
```

- Acesse http://localhost:3000 para acessar o projeto web

```bash
$ npm run start
```

## Dependencias utilizadas

- Sequelize ORM

```bash
$ npm i -g sequelize
```
