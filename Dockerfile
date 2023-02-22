# syntax=docker/dockerfile:1

# docker build -t webpack .
# docker run -v $(pwd):/usr/src/app -p 8080:8080 --rm -it webpack bash
# npm run code

FROM node:lts

RUN npm install \
    npm@latest \
    npm-check-updates \
    --location=global

RUN chown -R node:node /root/.npm \
    && chmod -R 775 /root/.npm

WORKDIR /usr/src/app
