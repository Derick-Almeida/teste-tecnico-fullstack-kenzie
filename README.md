# S3 - Teste Técnico - Fullstack

## Back-end

> siga os passos a seguir para iniciar o backend do projeto

### Instalando Dependências

abra o terminal e instale as dependências com o comando:

```shell
cd ./backend; yarn
```

### Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source
```

### Iniciando o backend

para iniciar o backend utilize o comando:

```
yarn dev
```

Url base: [http://localhost:4000/](http://localhost:4000/) <br/>
Para parar a execução precione `Ctrl + c` no terminal

---

## Front-end

ainda com o backend sendo executado abra outro terminal e siga os proximos passos

### Instalando Dependências

instale as dependências com o comando:

```shell
cd ./frontend; yarn
```

### Inicie a aplicação

para iniciar a plicação utilize o comando:

```
yarn start
```

Com a aplicação iniciada abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

Para parar a execução precione `Ctrl + c` no terminal
