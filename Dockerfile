# Use the official Node.js image
FROM node:21.5.0-slim
 
# Set the working directory in the container
WORKDIR /usr/src/app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install app dependencies
RUN npm install -g npm@latest && npm cache clean --force && npm rm -rf node_modules && rm package-lock.json && npm install
 
# Bundle app source
COPY . .
 
# Expose the port the app runs on
EXPOSE 8080
 
# Define the command to run your app using node
CMD ["node", "app.js"]
