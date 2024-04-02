FROM ghcr.io/puppeteer/puppeteer:22.6.0

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Create a non-root user and group
RUN addgroup -S nodejs && adduser -S -G nodejs nodejs

# Set the working directory and permissions
WORKDIR /usr/src/app
RUN chown -R nodejs:nodejs /usr/src/app

USER nodejs

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index.js" ]
