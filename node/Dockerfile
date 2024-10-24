# Dockerfile de Desenvolvimento
FROM node:latest

WORKDIR /usr/src/app

# Instalar wget e Dockerize
RUN apt-get update && apt-get install -y wget

# Instalar Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copiar package.json para instalar dependências (usando cache)
COPY ./package*.json ./

# Instalar dependências usando o registro público explicitamente
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
