# ecom-jagdeesh eCommerce Store Platform


## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)
- In this project paypal account is not included because i dont have credit or debit card with me right now





You can change the PAGINATION_LIMIT to what you prefer

### Install Dependencies (frontend & backend)

Ensure that Nodemon are installed globally

```
npm install
cd client
npm install
```

### Run

```
# Run frontend
npm start

# Run backend
npm start
```

## Build & Deploy

```
# Create frontend prod build
cd client
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all the data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

jagdeesh@email.com (Admin)
123456

user@email.com (Customer)
123456

```

