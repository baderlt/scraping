FROM ghcr.io/puppeteer/puppeteer:22.6.0

USER root

# Create a non-root user and group
RUN useradd -ms /bin/bash myuser

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory
WORKDIR /usr/src/app

# Ensure the 'files' directory exists and set permissions
RUN mkdir -p /usr/src/app/files && chown -R myuser:myuser /usr/src/app/files && chmod -R 777 /usr/src/app/files



COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install

# Switch to the non-root user
USER myuser

COPY . .

CMD [ "node", "index.js" ]
