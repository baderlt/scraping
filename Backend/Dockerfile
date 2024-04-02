FROM ghcr.io/puppeteer/puppeteer:22.6.0

# Create a non-root user and group
RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory and permissions
WORKDIR /usr/src/app
RUN chown -R nodejs:nodejs /usr/src/app

USER nodejs

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index.js" ]
