# MERN Stack CRUD App

A simple CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to manage messages by performing basic CRUD operations.

![Home All Messages](https://github.com/sundas-riasat/mern-crud-app-boilerplate/blob/main/message-list-ui.png)
![Create Messages](https://github.com/sundas-riasat/mern-crud-app-boilerplate/blob/main/create-message.png)
## Features
- Create new messages
- Read and display messages
- Update existing messages
- Delete messages

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone https://github.com/sundas-riasat/mern-crud-app-boilerplate
cd mern-crud-app
```

### Backend Setup
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```sh
   cd ../frontend/challenge
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm run dev
   ```

## API Endpoints
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| GET    | `/api/messages`  | Get all messages |
| POST   | `/api/message`  | Create a new message |
| GET    | `/api/message/:id` | Get a specific message |
| PUT    | `/api/message/:id` | Update a message |
| DELETE | `/api/message/:id` | Delete a message |

## Project Structure
```
mern-crud-app/
├── frontend/  # React frontend
├── backend/  # Express backend
├── README.md
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

