# The commands in the Dockerfile are run sequential and cached. They will not rebuild
# automatically unless the configuration is changed.

# specify the node base image with your desired version node:<version>
FROM node:14-alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

# Specify our working directory for this container
WORKDIR /usr/src/node-app

# Copy dependencies list from our application to container
COPY ./package.json ./
# Copy the locked versions of dependencies so that dependencies are consistent
COPY ./package-lock.json ./

USER node

# Install dependancies specified in the package.json
RUN npm install

# Copy code from our repo directory to the container
COPY --chown=node:node . .

# Make port 8080 available outside of container
EXPOSE 8080