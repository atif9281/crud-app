Welcome to the Book Management App! This application allows you to manage a collection of books with functionalities to add, edit, view, and delete books. Built using React, Node.js, Express, and MongoDB, it provides a user-friendly interface for managing book details.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add New Books**: Add detailed information about new books including title, author, number of pages, and publication date.
- **Edit Books**: Update existing book details.
- **View Books**: Browse through the list of all books.
- **Delete Books**: Remove books from the collection.

## Tech Stack

- **Frontend**: React, React Router, Axios, React Hot Toast
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB

## Installation

To get started with the Book Management App, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- MongoDB instance running locally or remotely

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/book-management-app.git
    cd book-management-app
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    PORT=8000
    MONGODB_URI=your_mongodb_connection_string
    ```

5. **Run the backend server:**
    ```bash
    cd backend
    npm start
    ```

6. **Run the frontend server:**
    ```bash
    cd ../frontend
    npm start
    ```

Your application should now be running at `http://localhost:3000` for the frontend and `http://localhost:8000/api/v1` for the backend.

## Usage

1. **Home Page**: Displays a list of all books in the collection with options to add, edit, or delete books.
2. **Add Book**: Navigate to the add book page to enter new book details.
3. **Edit Book**: Click on the edit icon next to a book to update its details.
4. **Delete Book**: Click on the delete icon next to a book to remove it from the collection.

## API Endpoints

### Base URL
`http://localhost:8000/api/v1`

### Endpoints

- **GET /books**: Retrieve all books
- **GET /books/:id**: Retrieve a single book by ID
- **POST /books**: Add a new book
- **PATCH /books/:id**: Update an existing book by ID
- **DELETE /books/:id**: Delete a book by ID

## Contributing

We welcome contributions to improve the Book Management App! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Book Management App! If you have any questions or feedback, please feel free to open an issue or contact us.
