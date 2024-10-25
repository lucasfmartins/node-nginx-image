FROM node:20-slim

WORKDIR /usr/src/app

# Copia apenas o package.json para instalar as dependências
COPY package.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para rodar a aplicação
CMD [ "node", "index.js" ]
