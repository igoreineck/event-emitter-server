# Backend do Projeto de Redes, chamado Emissor de Eventos

### Configurações

Primeiramente, você deve ter o repositório do projeto baixado em sua máquina.
Caso não possua, pode obtê-lo neste link: https://github.com/igoreineck/event-emitter-server.git

Tendo o repositório, em um terminal, acesse a pasta raiz e execute o seguinte comando para baixar as dependências:
```bash
npm install
```

Para dar continuidade a instalação, é necessário ter o PostgreSQL instalado.

Acesse o arquivo `knexfile.js` e altere as configurações de conexão para integrar com o seu PostgreSQL.

Após as configurações mencionadas acima, é possível então, executar a aplicação.

Primeiramente, para preparar o banco de dados, execute:
```bash
npm run migrate
```

E então, para popular o banco de dados com algumas informações básicas, execute:
```bash
npm run seed
```

Por fim, para rodar a aplicação, basta executar o comando:
```bash
npm start
```

**OBS**: é importante ter a porta `3333` liberada, o server rodará nesta por padrão.
