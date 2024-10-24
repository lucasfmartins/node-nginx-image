FROM nginx:latest

# COPIO a pasta html do meu computador para imagem
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]