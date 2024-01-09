# Book Search Project - Laravel Sanctum Authentication with Typescript React JS

Welcome to the Book Search Project! This project combines the robust features of Laravel 10 with the dynamic capabilities of Typescript React JS, leveraging Laravel Sanctum for secure and flexible authentication. The application utilizes both stateful and stateless request handling, providing a comprehensive authentication mechanism.

## Authentication Mechanism

In stateful requests, the user's authentication state is stored on the server, and a session cookie is used to identify the user. Stateless requests involve sending the API token with each request, and the server verifies the token's validity before responding, ensuring a secure authentication process.

## Key Features of the Backend

- **Laravel 10**: The backend is built on Laravel 10, a powerful PHP framework known for its elegance and developer-friendly syntax.
- **Laravel Sanctum**: The project employs Laravel Sanctum for user authentication. Sanctum provides a simple and effective way to implement Single Page Application (SPA) authentication.
- **Private Route**: this ensure security in the frontend end to ensure that an unauthenticated users does not have access to our secured page. it will return them back to login.

## Key Features of the Frontend

### 1. User Authentication

- **Login:** Users can securely log in using their email and password. The application communicates with the Laravel backend to authenticate users.
- **Registration:** New users can sign up by providing their email and creating a password.

### 2. Book Search

- **Search Bar:** Users can search for books using a search bar. The application sends requests to an API to fetch relevant book information.

### 3. Loading Spinner

- A loading spinner is displayed during API requests to provide visual feedback to users while waiting for data.

### 4. Toast Notifications

- Toast notifications are used to display success messages (e.g., successful login) and error messages (e.g., incorrect password).

### 5. Responsive Design

- The application is designed to be responsive, ensuring a consistent user experience across different devices.

### 6 React Typescript**: The frontend is developed using React JS with Typescript, offering a dynamic and efficient user interface.

   



