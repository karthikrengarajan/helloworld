FROM library/node:8.1.0-alpine

RUN mkdir /apps && chmod 755 /apps

WORKDIR /apps

COPY helloworld-http.js /apps/helloworld-http.js

ADD entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh

EXPOSE 3000

ENTRYPOINT /entrypoint.sh
