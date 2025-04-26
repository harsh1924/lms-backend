# User Management Server

Welcome! 👋  
This project is a backend server built with **Express.js** and **MongoDB**, designed to manage user data and handle user management events through webhooks.

## Features

- **Basic Express Server**  
  A simple server setup including a health check endpoint to verify server status.

- **Webhook Endpoint**  
  An endpoint to listen and respond to user management events from external systems.

- **MongoDB Integration**  
  Connects to a MongoDB database and uses a Mongoose model to store user data efficiently.

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root of your project with the following content:

```env
MONGODB_URI=your-mongodb-connection-string
PORT=3000
```

> Replace `your-mongodb-connection-string` with your actual MongoDB URI.

### 4. Run the Development Server
```bash
npm run dev
```

The server should now be running at [http://localhost:3000](http://localhost:3000).

---

## Tech Stack

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
