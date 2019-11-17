# Shopping Cart Web

Shopping cart solution where you can create Users, Items and Cart.
Project build with Angular 8.
This project is the front end of the application, to access the back-end methods you need to run the API (https://github.com/priscilaluz/shopping-cart-api)

## Prerequisites

- npm 6.7.0
- node 11.14.0

## Build/Run the APP

#### In the terminal
- Go to the main directory
- Run command "npm install"
- Run command "ng serve"

#### In the navigate
- Access http://localhost:4200/

## Solution
Four Json documents were created in mongoDB:
- The user has an ID, a name, an email and a ShoppingCart.
- ShoppingCart has an ID, a total, and a Shopping list.
- Shopping has an ID, a value and an Item.
- The item has an ID, a name and a value.

In the application there are four pages
- User: CRUD
- Item: CRUD
- Login: Allows login with email and username
- Shopping carts: Add item to logged in user's cart

# Authors

* Priscila Luz
