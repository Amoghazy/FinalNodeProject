# E-commerce App

This is the README file for the E-commerce App project, which is a small-scale e-commerce application. The app includes various functionalities related to user management, product management, category management, coupon management, cart management, and order processing.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

The E-commerce App aims to provide a platform for users to buy and sell products online. It includes features such as user registration, product listing, category management, coupon management, cart management, and order processing. The app allows users to browse products, add them to their carts, apply coupons, and place orders using either cash on delivery or online payment.

## Features

- **User Management:**

  - User registration with verification
  - User login and password reset
  - User data update (only by admin)
  - User deactivation

- **Product Management:**

  - Add new products
  - Update or delete products (by admin or the creator)
  - Get all products with pagination
  - Get a specific product
  - Get all products in a specific category

- **Category Management:**

  - Add new categories
  - Update or delete categories (by admin or the creator)
  - Get all categories
  - Get a specific category

- **Coupon Management:**

  - Add new coupons
  - Update or delete coupons (by admin or the creator)
  - Get all coupons
  - Apply coupons to products

- **Cart Management:**

  - Create a new cart
  - Update the cart (by admin or the creator)
  - Apply coupons to the cart if not already applied to products

- **Order Processing:**

  - Create orders with cash on delivery

- **Payment:**
  - Integration with online payment paypal system

## Installation

To install and set up the E-commerce App, follow these steps:

1. Clone the repository: `git clone https://github.com/Amoghazy/FinalNodeProject.git`
2. Navigate to the project directory: `cd FinalNodeProject`
3. Install the dependencies: `npm install`
4. Make env file contain database credentials, paypal credentials, and secret key for JWT
5. This is the variable name in .env file [MONGO_URL,
   JWT_SECRET_KEY,
   PAYPAL_CLIENT_KEY,
   PAYPAL_SECRET_KEY,
   PAYPAL_MODE,]
6. After changing .env file, Start the server: `node app.js`

## Usage

To use the E-commerce App, follow these steps:

1. Open the web application in your browser.
2. Sign up or log in to your account.
3. Browse the products and add them to your cart.
4. Apply any available coupons to your cart.
5. Proceed to checkout and choose the desired payment method.
6. Complete the order by providing the necessary information.
7. Receive confirmation of your order and delivery details.

## API Documentation

The API documentation for the E-commerce App is available in the [Postman format](https://documenter.getpostman.com/view/32466610/2s9YywfKaa). Please refer to the provided Postman documentation for detailed information about the available endpoints, request/response formats, and authentication requirements.

- **Note:**
  - This documentation for deployed version is available at [https://e-commerce-app-dkd7.onrender.com](https://e-commerce-app-dkd7.onrender.com)
  - if you are using local version please switch to "http://localhost:3000" instead of "https://e-commerce-app-dkd7.onrender.com"

## Contributing

We welcome contributions to the E-commerce App project. To contribute, please follow these guidelines:

- Submit bug reports or feature requests by opening an issue on GitHub.
- Fork the repository and create a new branch for your contribution.
- Follow the coding style and conventions used in the project.
- Submit a pull request with your changes, explaining the purpose and details of the contribution.

## License

The E-commerce App is released under the [MIT License](LICENSE).

## Deployment

I deployed this project on [onrender site](https://onrender.com) and this is the link [https://e-commerce-app-dkd7.onrender.com ]

## Contact

For any questions, feedback, or collaboration opportunities, please reach out to us via email or our social media profiles:

- Email: [ahmedmoghazy933gmail.com](mailto:ahmedmoghazy933gmail.com)

- LinkedIn: [[ahmed-moghazy](https://www.linkedin.com/in/ahmed-moghazy-1115191aa/)]
