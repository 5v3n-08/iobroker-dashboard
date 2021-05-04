#Build Steps
FROM mhart/alpine-node:14 as build-step

RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
