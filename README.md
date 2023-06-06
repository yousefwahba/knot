## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. move to back-end folder `cd back-end/`
3. Install the required dependencies using `npm install`.
4. Create a `.env` file in the root directory of the project and set the following environment variables:

```plaintext
DB_URI=your_mongodb_uri_here
JWT_SECRET=your_secret_key_here
JWT_EXPIRES=3d
```

5. Start the application using `npm run start:dev`
6. go to `http://localhost:4000`

## Features (until now)

- Register new users with user details.
- Authenticate users through login functionality.
- Generate and return a token upon successful login.
- Register a new user.
- Authenticate users through login functionality.
- Retrieve user details by ID.
- Update user details.
- Delete a user.
- Create a new product.
- Retrieve product details by ID.
- Retrieve products associated with a specific owner.
- Retrieve products with their associated user.
- Activate or deactivate a product.
- Connect a product to an owner.
- Disconnect a product from its owner.

## Technologies Used

This project uses the following technologies:

- Nest.js
- MongoDB
- JWT

## API Endpoints

## Authentication Endpoints

- **POST `/auth/register`**
  - Description: Register a new user.
- **POST `/auth/login`**
  - Description: Log in an existing user.

## User Endpoints

- **GET `/user/:id`**
  - Description: Retrieve a user by ID.
- **GET `/user/with-products/:id`**
  - Description: Retrieve a user with their associated products.
- **PUT `/user/:id`**
  - Description: Update a user by ID.
- **DELETE `/user/:id`**
  - Description: Delete a user by ID.

## Product Endpoints

- **POST `/product`**
  - Description: Create a new product.
- **GET `/product/:id`**
  - Description: Retrieve a product by ID.
- **GET `/product/by-owner/:ownerId`**
  - Description: Retrieve products by owner ID.
- **GET `/product/with-user/:id`**
  - Description: Retrieve a product with its associated user by product ID.
- **GET `/product/with-user/by-owner/:ownerId`**
  - Description: Retrieve products with their associated user by owner ID.
- **PUT `/product/:id/active`**
  - Description: Activate a product by ID.
- **PUT `/product/:id/deactive`**
  - Description: Deactivate a product by ID.
- **PUT `/product/:id/connect/:ownerId`**
  - Description: Connect a product to an owner by product ID and owner ID.
- **PUT `/product/:id/disconnect`**
  - Description: Disconnect a product from its owner by product ID.

### Register a new user

```
POST /auth/register
```

**Request Body**

```json
{
  "fullName": "yousef wahba",
  "userName": "wahba",
  "bio": "nestjs developer",
  "primaryEmail": "wahba@mail.com",
  "password": "qwrqfew",
  "primaryEmailEnabled": true,
  "primaryPhoneEnabled": true,
  "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
  "phones": ["010008374", "01283884", "01589344"]
}
```

**Response with hash password**

```json
{
  "id": "647d7f09dffca58d6a70b6ee",
  "fullName": "yousef wahba",
  "userName": "wahba",
  "primaryEmail": "wahba@mail.com",
  "password": "$2b$12$LPKc6Hr.Ottbj.YF7zZLCekNV14zhr8ULquugt8R.H2/QT/NsHnRe",
  "bio": "nestjs developer",
  "primaryEmailEnabled": true,
  "primaryPhoneEnabled": true,
  "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
  "phones": ["010008374", "01283884", "01589344"],
  "userType": "INDIVIDUAL",
  "__v": 0
}
```

### Login as an existing user

```
POST /auth/login
```

Login as an existing user with the provided email and password.

**Request Body**

```json
{
  "primaryEmail": "wahba@mail.com",
  "password": "qwrqfew"
}
```

**Response**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ3ZDdmMDlkZmZjYTU4ZDZhNzBiNmVlIiwiZnVsbE5hbWUiOiJ5b3VzZWYgd2FoYmEiLCJ1c2VyTmFtZSI6IndhaGJhIiwicHJpbWFyeUVtYWlsIjoid2FoYmFAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMiRMUEtjNkhyLk90dGJqLllGN3paTENla05WMTR6aHI4VUxxdXVndDhSLkgyL1FUL05zSG5SZSIsImJpbyI6Im5lc3RqcyBkZXZlbG9wZXIiLCJwcmltYXJ5RW1haWxFbmFibGVkIjp0cnVlLCJwcmltYXJ5UGhvbmVFbmFibGVkIjp0cnVlLCJlbWFpbHMiOlsiaGVsb0BtYWlsLmNvbSIsIndvcmxkQG1haWwuY29tIiwidGVzdDAwMEBnbWFpbC5jb20iXSwicGhvbmVzIjpbIjAxMDAwODM3NCIsIjAxMjgzODg0IiwiMDE1ODkzNDQiXSwidXNlclR5cGUiOiJJTkRJVklEVUFMIiwiX192IjowfSwiaWF0IjoxNjg1OTQ2NDE1LCJleHAiOjE2ODYyMDU2MTV9.QGV430bsm-bNyBlhIDMgPEa4Z1B8zYk1f1EmKngFPMg"
}
```

### Protect Route

If you add the @UseGuards(JwtGuard) decorator to any route of a controller, that route will be protected.

```
Get /user/:id
```

get specific user with it's id from protect route

**Request url**

```json
http://localhost:4000/user/647d7f09dffca58d6a70b6ee
```

**Response Body**

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

### Get user by ID

```
Get /user/:id
```

**Request url**

```json
http://localhost:4000/user/647d7f09dffca58d6a70b6ee
```

**Response Body**

```json
{
  "id": "647d7f09dffca58d6a70b6ee",
  "fullName": "yousef wahba",
  "userName": "wahba",
  "primaryEmail": "wahba@mail.com",
  "password": "$2b$12$LPKc6Hr.Ottbj.YF7zZLCekNV14zhr8ULquugt8R.H2/QT/NsHnRe",
  "bio": "nestjs developer",
  "primaryEmailEnabled": true,
  "primaryPhoneEnabled": true,
  "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
  "phones": ["010008374", "01283884", "01589344"],
  "userType": "INDIVIDUAL",
  "__v": 0
}
```

get user by id with products

- **GET `/user/with-products/:id`**

  **Request URL**

  ```
  /user/with-products/:id
  ```

  ```
  http://localhost:4000/user/with-products/647d231a1b86766432f224bd
  ```

  **Request Body**

  ```json
  No Request Body
  ```

  **Response Body**

  ```json
  {
    "id": "647d231a1b86766432f224bd",
    "userName": "yousefwahba",
    "primaryEmail": "yousefwahba@mail.com",
    "password": "$2b$12$W9iHev/OzcrUkc2iT5SAhe4fet/YHnPgpm/7wx.WA6yqw7Y2aT0Ru",
    "primaryEmailEnabled": true,
    "primaryPhoneEnabled": true,
    "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
    "phones": ["010008374", "01283884", "01589344"],
    "userType": "INDIVIDUAL",
    "__v": 0,
    "products": [
      {
        "_id": "647e68b06f662de8bc319872",
        "type": "CARD",
        "active": true,
        "ownerId": "647d231a1b86766432f224bd",
        "__v": 0
      },
      {
        "_id": "647e78d078717adb77914f57",
        "type": "CARD",
        "active": true,
        "ownerId": "647d231a1b86766432f224bd",
        "__v": 0
      }
    ]
  }
  ```

- **PUT `/user/:id`**

  **Request URL**

  ```
  /user/:id
  ```

  ```
  http://localhost:4000/user/647d7f09dffca58d6a70b6ee
  ```

  **Request Body**

  ```json
  {
    "userName": "yousefWahba",
    "primaryEmail": "yousef@gmail.com",
    "bio": "full stack developer",
    "primaryEmailEnabled": false,
    "primaryPhoneEnabled": false,
    "phones": ["1111111", "222222", "333333"]
  }
  ```

  **Response Body**

  ```json
  {
    "id": "647d7f09dffca58d6a70b6ee",
    "fullName": "yousef wahba",
    "userName": "yousefWahba",
    "primaryEmail": "yousef@gmail.com",
    "password": "$2b$12$LPKc6Hr.Ottbj.YF7zZLCekNV14zhr8ULquugt8R.H2/QT/NsHnRe",
    "bio": "full stack developer",
    "primaryEmailEnabled": false,
    "primaryPhoneEnabled": false,
    "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
    "phones": ["1111111", "222222", "333333"],
    "userType": "INDIVIDUAL",
    "__v": 0
  }
  ```

- **DELETE `/user/:id`**

  **Request URL**

  ```
  /user/:id
  ```

  ```
  http://localhost:4000/user/647d7f09dffca58d6a70b6ee
  ```

  **Request Body**

  ```json
  No
  ```

  **Response Body**

  ```json
  user deleted successfully
  ```

## Product Endpoints

- **POST `/product`**

  **Request URL**

  ```
  /product
  ```

  ```
  http://localhost:4000/product/
  ```

  **Request Body**

  ```json
  {
    "type": "CARD",
    "active": true,
    "ownerId": "60f7c7d7c8d7c7f0d7c7f0d7"
  }
  ```

  **Response Body**

  ```json
  {
    "type": "CARD",
    "active": true,
    "ownerId": "60f7c7d7c8d7c7f0d7c7f0d7",
    "_id": "647e68b06f662de8bc319872",
    "__v": 0
  }
  ```

- **GET `/product/:id`**

  **Request URL**

  ```
  /product/:id
  ```

  ```
  http://localhost:4000/product/647e68b06f662de8bc319872
  ```

  **Request Body**

  ```json
  No
  ```

  **Response Body**

  ```json
  {
    "_id": "647e68b06f662de8bc319872",
    "type": "CARD",
    "active": true,
    "ownerId": "60f7c7d7c8d7c7f0d7c7f0d7",
    "__v": 0
  }
  ```

- **GET `/product/by-owner/:ownerId`**

  **Request URL**

  ```
  /product/by-owner/:ownerId
  ```

  ```
  http://localhost:4000/product/by-owner/647d231a1b86766432f224bd
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  [
    {
      "_id": "647e78d078717adb77914f57",
      "type": "CARD",
      "active": true,
      "ownerId": "647d231a1b86766432f224bd",
      "__v": 0
    }
  ]
  ```

- **GET `/product/with-user/:id`**

  **Request URL**

  ```
  /product/with-user/:id
  ```

  ```
  http://localhost:4000/product/with-user/647e78d078717adb77914f57
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  {
    "_id": "647e78d078717adb77914f57",
    "type": "CARD",
    "active": true,
    "ownerId": {
      "_id": "647d231a1b86766432f224bd",
      "userName": "yousefwahba",
      "primaryEmail": "yousefwahba@mail.com",
      "password": "$2b$12$W9iHev/OzcrUkc2iT5SAhe4fet/YHnPgpm/7wx.WA6yqw7Y2aT0Ru",
      "primaryEmailEnabled": true,
      "primaryPhoneEnabled": true,
      "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
      "phones": ["010008374", "01283884", "01589344"],
      "userType": "INDIVIDUAL",
      "__v": 0
    },
    "__v": 0
  }
  ```

- **GET `/product/with-user/by-owner/:ownerId`**

  **Request URL**

  ```
  /product/with-user/by-owner/:ownerId
  ```

  ```
  http://localhost:4000/product/with-user/by-owner/647d231a1b86766432f224bd
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  [
    {
      "_id": "647e78d078717adb77914f57",
      "type": "CARD",
      "active": true,
      "ownerId": {
        "_id": "647d231a1b86766432f224bd",
        "userName": "yousefwahba",
        "primaryEmail": "yousefwahba@mail.com",
        "password": "$2b$12$W9iHev/OzcrUkc2iT5SAhe4fet/YHnPgpm/7wx.WA6yqw7Y2aT0Ru",
        "primaryEmailEnabled": true,
        "primaryPhoneEnabled": true,
        "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
        "phones": ["010008374", "01283884", "01589344"],
        "userType": "INDIVIDUAL",
        "__v": 0
      },
      "__v": 0
    }
  ]
  ```

- **PUT `/product/:id/active`**

  **Request URL**

  ```
  /product/:id/active
  ```

  ```
  http://localhost:4000/product/647e78d078717adb77914f57/active
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  {
    "_id": "647e78d078717adb77914f57",
    "type": "CARD",
    "active": true,
    "ownerId": "647d231a1b86766432f224bd",
    "__v": 0
  }
  ```

- **PUT `/product/:id/deactive`**

  **Request URL**

  ```
  /product/:id/deactive
  ```

  ```
  http://localhost:4000/product/647e78d078717adb77914f57/deactive
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  {
    "_id": "647e78d078717adb77914f57",
    "type": "CARD",
    "active": false,
    "ownerId": "647d231a1b86766432f224bd",
    "__v": 0
  }
  ```

- **PUT `/product/:id/connect/:ownerId`**
  Connect a product to an owner
  **Request URL**

  ```
  /product/:id/connect/:ownerId
  ```

  ```
  http://localhost:4000/product/647e68b06f662de8bc319872/connect/647d231a1b86766432f224bd
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  {
    "_id": "647e68b06f662de8bc319872",
    "type": "CARD",
    "active": true,
    "ownerId": {
      "_id": "647d231a1b86766432f224bd",
      "userName": "yousefwahba",
      "primaryEmail": "yousefwahba@mail.com",
      "password": "$2b$12$W9iHev/OzcrUkc2iT5SAhe4fet/YHnPgpm/7wx.WA6yqw7Y2aT0Ru",
      "primaryEmailEnabled": true,
      "primaryPhoneEnabled": true,
      "emails": ["helo@mail.com", "world@mail.com", "test000@gmail.com"],
      "phones": ["010008374", "01283884", "01589344"],
      "userType": "INDIVIDUAL",
      "__v": 0
    },
    "__v": 0
  }
  ```

- **PUT `/product/:id/disconnect`**

  **Request URL**

  ```
  /product/:id/disconnect
  ```

  ```
  http://localhost:4000/product/647e68b06f662de8bc319872/disconnect
  ```

  **Request Body**

  ```json

  ```

  **Response Body**

  ```json
  {
    "_id": "647e68b06f662de8bc319872",
    "type": "CARD",
    "active": true,
    "ownerId": null,
    "__v": 0
  }
  ```
