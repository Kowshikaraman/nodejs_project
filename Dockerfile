FROM node:18

WORKDIR workspace/app/

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

CMD ["npm","start"]

EXPOSE 3200