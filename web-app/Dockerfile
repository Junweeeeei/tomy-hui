# Step 1: Build Stage
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source files to the container
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Production Stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output and server.js file to the production stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/server.js .

# Install Express in the production image
RUN npm install express

# Expose port 8080 for Google Cloud Run
EXPOSE 8080

# Start the Express server
CMD ["node", "server.js"]