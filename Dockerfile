# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code to the container
COPY . .

# Expose the port that the Metro bundler will run on
EXPOSE 8081

# Command to start the Metro bundler when the container runs
CMD ["npm", "start"]
