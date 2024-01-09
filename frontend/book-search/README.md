
## Book Search Project - Laravel Sanctum Authentication with React JS
## Welcome to the Book Search Project!

# Note:
# the project is suppoesd to perform a phone number verification but because the API provided and oother APIs online are not paid, the feature wasnt implemented.

# This project combines the power of Laravel 10 with React JS and leverages Laravel Sanctum for robust authentication. The application # incorporates both stateful and stateless request handling to provide a secure and flexible authentication mechanism.

## Authentication Mechanism
# In stateful requests, the user's authentication state is stored on the server, and a session cookie is utilized to identify the user. On the other hand, stateless requests involve sending the API token with each request. The server verifies the token's validity before responding, ensuring a secure authentication process.

## Key Features
# Laravel 10: The backend of the project is built on Laravel 10, a powerful PHP framework known for its elegance and developer-friendly syntax.

# React Typescript : The frontend is developed using React JS, providing a dynamic and efficient user interface.

# Laravel Sanctum: The project employs Laravel Sanctum for handling user authentication. Sanctum offers a simple and effective way to implement Single Page Application (SPA) authentication.

## How to Run the Project
# Clone the repository to your local machine.


# git clone <repository_url>
# Navigate to the project directory.


# cd book-search-project
# Install backend dependencies using Composer.


# composer install
# Copy the .env.example file to create a new .env file.

# php artisan key:generate
# Configure your database settings in the .env file.

# Run migrations to set up the database.


# php artisan migrate
# Install frontend dependencies using npm.


# you can test using postman

# php artisan serve
# Now, you can access the application by navigating to http://localhost:8000 in your browser.


## Additional Notes
# Ensure that you have a proper development environment set up, including PHP, Composer, Node.js, and npm.
# Customize the project as per your requirements and explore the capabilities of Laravel Sanctum for secure SPA authentication.