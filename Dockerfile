# Use the official Node.js 20 Alpine image as the base image
FROM node:20-alpine

# Add a group and a user named 'app' to run the application
RUN addgroup app && adduser -S -G app app

# Set the user context to 'app' for subsequent commands
USER app

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if exists) from the local directory to /app in the container
COPY package*.json ./

# Switch back to root user temporarily to execute commands that require root access
USER root

# Change ownership of all files and directories in the /app directory to the 'app' user and group
RUN chown -R app:app .

# Switch back to 'app' user
USER app

# Install dependencies defined in package.json using npm
RUN npm install

# Copy all files and directories from the local directory to /app in the container
COPY . .

# Expose port 5173 to allow external connections to the application
EXPOSE 5173

# Define the default command to run the development server when the container starts
CMD npm run dev
