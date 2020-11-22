FROM node:10

LABEL io.k8s.description="The base docker container for frontend" \
      io.k8s.display-name="default-container" \
      io.openshift.expose-services="" \
      io.openshift.tags="default" \
      maintainer="Casey Wylie"

ARG theme

ENV REACT_APP_THEME=$(theme)

USER 1001  

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]