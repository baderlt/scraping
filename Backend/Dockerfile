FROM ghcr.io/puppeteer/puppeteer:22.6.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory
WORKDIR /usr/src/app

# Change permissions of the working directory to allow the node user to write to it
RUN chown -R node /usr/src/app

# Switch to the node user
USER node

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index.js" ]
