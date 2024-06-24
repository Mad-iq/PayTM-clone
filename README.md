## A basic PayTM clone application

# Paytm Clone Application

This is a basic Paytm clone application built with React for the frontend and Node.js with Express for the backend. The application allows users to sign up, sign in, view their balance, and transfer money to other users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- User authentication (sign up and sign in)
- View account balance
- Transfer money to other users
- Search for users

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/paytm-clone.git
    cd paytm-clone/backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your-mongodb-connection-string
    JWT_SECRET=your-jwt-secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

    The backend server will be running on `http://localhost:3001`.

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

    The frontend server will be running on `http://localhost:5173`.

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up for a new account or sign in with an existing account.
3. View your account balance on the dashboard.
4. Transfer money to other users using their email address.
5. Search for users to see their details.

## API Endpoints

### Authentication

- **POST** `/api/v1/user/signup` - Create a new user account
- **POST** `/api/v1/user/signin` - Sign in to an existing account

### User Operations

- **PUT** `/api/v1/user` - Update user details (requires authentication)
- **GET** `/api/v1/user/bulk` - Search for users

### Account Operations

- **GET** `/api/v1/account/balance` - Get the account balance (requires authentication)
- **POST** `/api/v1/account/transfer` - Transfer money to another user (requires authentication)

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)



