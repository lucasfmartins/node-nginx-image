# Desafio: NGINX como Proxy Reverso com Node.js e MySQL
Este projeto implementa um ambiente de contêineres utilizando Docker e Docker Compose para executar um serviço Node.js que se comunica com um banco de dados MySQL e é exposto ao usuário via um proxy reverso NGINX. O Node.js registra nomes em uma tabela do MySQL e exibe esses nomes em uma página HTML acessível via NGINX.

### Tecnologias Utilizadas
- Node.js: Servidor de aplicação para lidar com as requisições e a lógica de negócio.
- MySQL: Banco de dados relacional para armazenar os registros.
- NGINX: Proxy reverso para encaminhar as requisições HTTP para o servidor Node.js.
- Docker: Para criar e gerenciar os contêineres.
- Docker Compose: Para orquestrar os serviços.

### Como Funciona
O NGINX atua como um proxy reverso. Ele recebe as requisições HTTP e as redireciona para o servidor Node.js.
O servidor Node.js insere um nome na tabela people no banco de dados MySQL sempre que uma requisição é feita à raiz (/).
O Node.js, então, recupera todos os nomes armazenados no banco de dados e os exibe junto com uma mensagem "Full Cycle Rocks!" em uma lista HTML.

Todo o ambiente é gerenciado por meio de contêineres Docker, definidos no docker-compose.yml.

### Como Executar o Projeto

Clone o repositório:

```sh
git clone [<url-do-repositorio>](https://github.com/lucasfmartins/node-nginx-image)
cd node-nginx-image
```

Inicie os contêineres: Execute o comando abaixo para subir os serviços:

```sh
sudo docker-compose up -d
```

ou

```sh
sudo docker-compose up --build -d
```

Acessar a aplicação: A aplicação estará disponível no navegador no seguinte endereço:

```sh
http://localhost:8080
```

Cada vez que a página for acessada, um novo nome será inserido na tabela people e listado na resposta.

### Exemplo de Resposta
Acessando localhost:8080, a resposta será algo assim:

```sh
<h1>Full Cycle Rocks!</h1>
<ul>
  <li>Full Cycle Rocks! 123</li>
  <li>Full Cycle Rocks! 456</li>
</ul>
```

### Comandos Úteis
Parar os contêineres:

```sh
sudo docker-compose down
```

Verificar logs de um serviço:

```sh
sudo docker-compose logs <nome-do-serviço>
```
Recriar e reiniciar os contêineres:

```sh
sudo docker-compose up --build -d
```
