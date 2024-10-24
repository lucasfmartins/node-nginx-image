# Dockerfile de Desenvolvimento
FROM node:latest

WORKDIR /usr/src/app

# Instalar wget e Dockerize apenas se for realmente necessário
RUN apt-get update && apt-get install -y wget

# Instalar Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copiar o arquivo .npmrc local para garantir que o NPM use o registro público para este projeto
COPY .npmrc ./

# Copiar package.json para instalar dependências (usando cache)
COPY ./package*.json ./

# Instalar dependências usando o arquivo .npmrc local, mas manter a configuração global
RUN npm install --userconfig .npmrc

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta usada pela aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
