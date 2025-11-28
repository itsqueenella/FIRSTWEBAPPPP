# Dockerfile for when Render's Service Root is set to /public
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package manifests and install production deps
## This Dockerfile runs when Render's service root is `/public`.
## Make the `public` directory self-contained by installing from its own package.json.
WORKDIR /usr/src/app

# Copy package.json inside the public context and install
COPY package*.json ./
RUN npm install --omit=dev --no-audit --no-fund

# Copy all public files
COPY . ./

ENV PORT 3000
EXPOSE 3000
# Run the minimal server that lives in /public
CMD ["node", "server.js"]
