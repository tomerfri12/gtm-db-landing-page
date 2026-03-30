# Static site for Railway (nginx respects $PORT)
FROM nginx:alpine

COPY nginx/templates/default.conf.template /etc/nginx/templates/default.conf.template
COPY index.html styles.css main.js /usr/share/nginx/html/
COPY docs/ /usr/share/nginx/html/docs/

ENV PORT=8080
EXPOSE 8080
