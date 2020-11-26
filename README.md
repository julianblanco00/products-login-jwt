# products-login-jwt

## REST API with authentication. It uses Node, JWT, MongoDB, Async/Await, Babel, bcrypt and Express.
#### The users can signin, signup, have roles and CRUD products.

##### You can specify the roles, for example:
`{
    "username": "Johnn Doe",
    "email": "john@doe.com",
    "password": "password",
    "roles": ["admin", "moderator"]
}`
##### If you don't specify any role, it will be `user`
##### Depending of your role, you will be able to get, update, create or delete products from DB

### Run `npm i` and init MongoDB. Then run `npm run dev`.
