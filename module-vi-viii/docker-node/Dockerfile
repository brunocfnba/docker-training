FROM ubuntu:16.04

ENV NODE_HOME /home/node
ENV PORT 8081

RUN cd /home && mkdir node && cd node

RUN apt-get update && apt-get install -y \
 vim \
 nodejs \
 npm

COPY . /home/node/docker-node/

RUN chmod -R 775 /home/node

RUN cd /home/node/docker-node && npm install

EXPOSE 8081

ENTRYPOINT ["nodejs","/home/node/docker-node/server.js"]
