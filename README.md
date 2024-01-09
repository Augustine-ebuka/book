# Book Search Project - Laravel Sanctum Authentication with Typescript React JS

Welcome to the Book Search Project! This project allow a user to search for their favorite book by name or they can search for all the book available in the third party api, the result is displayed in a nicely formated cards. This project combines the robust features of Laravel 10 with the dynamic capabilities of Typescript React JS, leveraging Laravel Sanctum for secure and flexible authentication. The application utilizes both stateful and stateless request handling, providing a comprehensive authentication mechanism.

## Authentication Mechanism

In stateful requests, the user's authentication state is stored on the server, and a session cookie is used to identify the user. Stateless requests involve sending the API token with each request, and the server verifies the token's validity before responding, ensuring a secure authentication process.

## Key Features of the Backend

- **Laravel 10**: The backend is built on Laravel 10, a powerful PHP framework known for its elegance and developer-friendly syntax.
- **Laravel Sanctum**: The project employs Laravel Sanctum for user authentication. Sanctum provides a simple and effective way to implement Single Page Application (SPA) authentication and ensure scalability when request increase.
- **Private Route**: this ensure security in the frontend end to ensure that an unauthenticated users does not have access to our secured page. it will return them back to login.
- **A well written test of the features**: 
- **user input valiadation and sanitation** error code related to user error was also implemented: 
- **Maintain security of Env. variables** error code related to user error was also implemented: 

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

### 6. React Typescript**: 
- The frontend is developed using React JS with Typescript, offering a dynamic and efficient user interface.
### 7. Nice looking interface **:
- The frontend is developed using React JS with Typescript, offering a dynamic and efficient user interface.
### 8. Caching system **: 
- This allow to reduce overhead or bottleneck in the request. when a user wants to search an already fetched data, the system utilize the power of localstorage.

## Note
- I have not implemented the the Phone number verification features due to unavailability of free API that offer phone number verification.(sendchimp and other API plateform are paid)

   
![passnotcorrect](https://github.com/Augustine-ebuka/book/assets/78606987/ec6e403b-60be-40f6-a47c-d9e6fdc0e570)

![userexist](https://github.com/Augustine-ebuka/book/assets/78606987/746785b5-c464-486e-be0d-fd7ff49547d2)

![verify](https://github.com/Augustine-ebuka/book/assets/78606987/c6bc75e8-4604-4628-86af-a21ef192b5ba)

![home](https://github.com/Augustine-ebuka/book/assets/78606987/b48a87db-bfd4-4aaf-8875-850a08969c4c)
![single](https://github.com/Augustine-ebuka/book/assets/78606987/0c2a9d6e-c9ee-475f-873c-264f443000d9)
