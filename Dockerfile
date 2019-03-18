FROM tfindelkind/gpio-ui-base
#FROM node:8

COPY . .

EXPOSE 8080
EXPOSE 9090

CMD [ "npm", "start" ]
