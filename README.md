Student Management System API

A RESTful API built with Node.js, Express.js, and MongoDB for managing students. The API supports user authentication, role-based authorization, and CRUD operations on student records.

Features

- User registration
- User login with JWT authentication
- Password hashing using bcrypt
- Role-based authorization (Admin and Teacher)
- Create, Read, Update, and Delete students
- Student search
- Student pagination
- Input validation
- Global error handling

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv
- express-validator

Installation

1. Clone the repository:

git clone https://github.com/glentonagutu22-creator/authapi.git

2. Navigate to the project folder:

cd authapi

3. Install dependencies:

npm install

4. Create a ".env" file and add your environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

5. Start the server:

npm start

or

node server.js

API Endpoints

Authentication

- POST "/api/auth/register"
- POST "/api/auth/login"

Students

- GET "/api/students"
- GET "/api/students/:id"
- POST "/api/students"
- PUT "/api/students/:id"
- DELETE "/api/students/:id"

Author

Developed by Glenton Agutu.
