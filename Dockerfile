FROM node:14

WORKDIR /srv
COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
ENV HOST="0.0.0.0" PORT=3000

CMD ["npm", "start"]