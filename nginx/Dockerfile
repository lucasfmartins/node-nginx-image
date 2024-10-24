FROM nginx:latest

# COPIO a pasta html do meu computador para imagem
COPY html /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
