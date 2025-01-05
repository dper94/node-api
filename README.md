# Node API

This is a CRUD API built with Node.js and Express. It allows users to create projects, add updates to those projects, and add update points to the updates.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dper94/node-api.git
   cd node_api
   ```
2. install dependencies
```sh
npm install
```
3. Create a .env file and add your PostgreSQL database URL:
```sh
DATABASE_URL="postgresql://user:password@localhost:PORT/mydatabase?schema=public"
```
4. Setup the database:
```sh
npx prisma migrate dev
```
## Running the API

To start the API server, run:

```sh
npm start
```
The server will be running on http://localhost:3000.

## API Endpoints

### Products

- GET /api/products: Get all products
- GET /api/products/:id: Get a product by ID
- POST /api/products: Create a new product
- PUT /api/products/:id: Update a product by ID
- DELETE /api/products/:id: Delete a product by ID

### Updates

- GET /api/updates: Get all updates
- GET /api/updates/:id: Get an update by ID
- POST /api/updates: Create a new update
- PUT /api/updates/:id: Update an update by ID
- DELETE /api/updates/:id: Delete an update by ID

### Update Points

- GET /api/update-points: Get all update points
- GET /api/update-points/:id: Get an update point by ID
- POST /api/update-points: Create a new update point
- PUT /api/update-points/:id: Update an update point by ID
- DELETE /api/update-points/:id: Delete an update point by ID