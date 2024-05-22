
# Chatiee

Chatiee is a real-time chat application that allows users to communicate with each other through instant messaging. This project includes a server-side built with Node.js, Express, MongoDB, and Socket.io, and a client-side built with React and Vite.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- User Authentication (Sign Up, Sign In, Sign Out)
- Real-time messaging using Socket.io
- User Profile with profile pictures
- Online user tracking
- Responsive design with Tailwind CSS

## Installation

### Prerequisites

- Node.js (v18.12.0)
- MongoDB
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/AbdeIkader/Chatiee.git
cd chatiee
```

### Server Setup

1. Navigate to the `Server` directory:

```bash
cd Server
```

2. Install server dependencies:

```bash
npm install
```

3. Create a `.env` file in the `Server` directory and add the following variables:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret
LOCAL_FRONTEND_URL=http://localhost:5173
```

4. Start the server:

```bash
npm run server
```

### Client Setup

1. Navigate to the `Client` directory:

```bash
cd ../Client
```

2. Install client dependencies:

```bash
npm install
```

3. Start the client:

```bash
npm run dev
```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up or log in to start using Chatiee.
3. Start a conversation with another user and enjoy real-time messaging.

## Project Structure

```plaintext
chatiee/
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── Server/
│   ├── DB/
│   │   ├── models/
│   │   └── dbConnection.js
│   ├── middleware/
│   ├── modules/
│   │   ├── Auth/
│   │   ├── Message/
│   │   └── User/
│   ├── utils/
│   ├── Socket/
│   │   └── socket.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── ...
├── README.md
└── ...
```

## Environment Variables

The project requires the following environment variables:

### Server

- `PORT`: The port number on which the server will run (e.g., 5000).
- `MONGO_URI`: The MongoDB connection string.
- `NODE_ENV`: The environment in which the server is running (e.g., development).
- `JWT_SECRET`: The secret key for JSON Web Tokens.
- `LOCAL_FRONTEND_URL`: The local URL of the frontend (e.g., http://localhost:5173).

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Additional Instructions

1. First, go to the main folder, install the dependencies for the backend:

```bash
npm install
npm run server
```

2. Then, go to the client folder, install the dependencies, and start the client:

```bash
cd Client
npm install
npm run dev
```
