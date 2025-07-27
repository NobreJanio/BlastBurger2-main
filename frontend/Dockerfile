# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files from frontend directory
COPY frontend/package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy frontend source code
COPY frontend/ .

# Copy the seed data from parent directory
COPY my-seed-blastburger-api ./my-seed-blastburger-api

# Expose port
EXPOSE 5175

# Start the application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5175"]