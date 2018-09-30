# Sococo Assignment
This is a simple Books Library project using Express, Node, Mongodb and Typescript.

1. Clone the repository.
2. Run "npm install" to install all the dependencies for the project.
3. Install MongoDB locally and change the mongourl in app.ts
4. Run "npm run prod" to run the express server.

Now the server will be running in the port 3000.

Services to get, add, modify and delete book details in books collection.

Use postman or any API tester to test the services

GET Method - http://localhost:3000/book -> to get the list of books

POST Method - http://localhost:3000/book -> to add the book

GET Method - http://localhost:3000/book/:boodId -> get book details using BookID

PUT Method - http://localhost:3000/book/:boodId -> modify the book details using BookID

DELETE Method - http://localhost:3000/book/:boodId -> delete a book using BookID
