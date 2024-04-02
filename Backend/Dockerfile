FROM ghcr.io/puppeteer/puppeteer:22.6.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Create a directory for the application and set permissions
RUN mkdir -p /usr/src/app && chown -R node /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Switch to the node user
USER node

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index.js" ]
