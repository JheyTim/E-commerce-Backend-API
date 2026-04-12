# Use lightweight Node.js image
FROM node:24.14.1-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire project
COPY . .

# Expose port 5000
EXPOSE 5000

# Start app using dev script (nodemon)
CMD [ "npm", "run", "dev" ]