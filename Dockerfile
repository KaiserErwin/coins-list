FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm i --silent --focer

COPY . ./

CMD ["npm", "run clear"]

CMD ["npm", "run prod"]

CMD ["npm", "start"] 
