FROM ghcr.io/puppeteer/puppeteer:22.6.0

USER root
# Create a non-root user and group
RUN useradd -ms /bin/bash myuser

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

# Set the working directory and permissions
WORKDIR /usr/src/app

RUN chmod 777 workdir/files



COPY package*.json ./

RUN npm cache clean --force

RUN  npm install

USER myuser

COPY . .

CMD [ "node", "index.js" ]