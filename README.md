
# ReactJS Authentication Demo Application

This ReactJS demo application showcases a practical implementation of user authentication and routing, providing a solid foundation for modern web applications. The application features include:

- **Page Protection**: Implementing custom routing to protect certain pages and redirect unauthorized users.
- **Registration Form**: A user-friendly registration form to onboard new users.
- **Login Form**: Secure login form with JWT-based authentication.
- **Navigation Bar**: A responsive navigation bar that adapts to the user's authentication state.
- **Authentication Toggle**: A button in the navbar allows users to log in or log out, dynamically updating based on the authentication state.
- **Redux Store**: User authentication data are managed globally using react-redux, ensuring state persistence across the application.

## Technologies Used

This project leverages the following technologies:

- `axios` v1.6.8: For making HTTP requests to the back-end API.
- `react` v18.2.0 & `react-dom` v18.2.0: For building the user interface.
- `react-redux` v9.1.0: For managing application state.
- `reduxjs/toolkit`: For efficient Redux store management.
- `react-router-dom` v6.22.3: For handling routing within the application.
- `react-scripts` v5.0.1: Includes scripts and configuration used by Create React App.

## Backend API

The backend API for this demo can be found at: [GitHub Repository](https://github.com/johndbs/demo-spring-jwt)

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone http://github...
   ```
2. Navigate into the project directory:
   ```bash
   cd reactjs-auth-demo
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
The application will be available at `http://localhost:3000`. Enjoy exploring and extending this demo!


---

For more information and support, please refer to the official documentation of the technologies used.
