# Simple Dockerfile for the Node.js Express app
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package manifests first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Expose port (Render uses $PORT env)
ENV PORT 3000
EXPOSE 3000

# Start the app using the PORT env var
CMD ["sh", "-c", "node server.js"]
