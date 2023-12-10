# Express.js Basic API
This is a basic Express.js API for managing user information, student statistics, and articles.

Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project folder: `cd express_task`
3. Install dependencies: `npm install`

# Usage

1. Start the server: `npm run start`
2. The server will run on [http://localhost:3000]

# Routes

# Users

- GET /users: Retrieve a list of all users.
- POST /users: Add a new user.
- GET /users/:email: Retrieve a specific user by their email.
- PUT /users/:email: Update a user's data.
- DELETE /users/:email: Delete a user by their email.

# Students

- GET /students: Retrieve student statistics.
- GET /students/worst-homework: Find students with the worst score for homework.

# Articles

- GET /articles: Retrieve articles.
- POST /articles: Add a new article.
- PUT /articles/:articleName/tags: Update article tags.

# Middleware

- Request Logging: Application-level middleware for request logging.
- Content Validation: Middleware for validating request content.
- Error Handling: Error-handling middleware for handling various errors.

# Optional (Bonus)

Tests for API using a testing framework like Mocha to ensure the correctness of routes and middleware.
