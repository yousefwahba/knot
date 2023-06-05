## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file in the root directory of the project and set the following environment variables:

```plaintext
DB_URI=your_mongodb_uri_here
JWT_SECRET=your_secret_key_here
JWT_EXPIRES=3d
```

1. move to back-end folder `cd back-end/`
2. Start the application using `npm run start:dev`
3. go to `http://localhost:4000`

## Features

This project includes the following features (just until now):

- User registration
- User login
- JWT-based authentication and authorization
- User profile retrieval

## Technologies Used

This project uses the following technologies:

- Nest.js
- MongoDB
- JWT

## API Endpoints

### Register a new user

```
POST /auth/register
```

Registers a new user with the provided details.

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

### Get user by ID

```
Get /user/:id
```

get specific user with it's id

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
