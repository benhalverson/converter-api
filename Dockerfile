FROM node:18-slim

# Change directory so that our commands run inside this new dir
WORKDIR /app
# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm i

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "run", "start:prod"]
