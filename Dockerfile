#Build Steps
FROM --platform=linux/arm/v7 node:15-alpine as build-step

#RUN mkdir /app
WORKDIR /app
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

COPY package.json /app


RUN npm install
COPY . /app

RUN npm run build

#Run Steps
FROM nginx:1.19.8-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
