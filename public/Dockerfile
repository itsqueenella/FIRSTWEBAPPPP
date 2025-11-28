# Dockerfile for when Render's Service Root is set to /public
FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package manifests and install production deps
COPY ../package*.json ./
# `npm ci` requires an existing lockfile; use `npm install --omit=dev` so builds
# succeed even when a lockfile isn't present in the checked-out service root.
RUN npm install --omit=dev --no-audit --no-fund

# Copy repo files from the service root (public) context
COPY . ./

ENV PORT 3000
EXPOSE 3000
CMD ["sh","-c","node ../server.js"]
