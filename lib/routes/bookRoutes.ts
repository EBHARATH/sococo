import {Request,Response} from "express";
import {BookController} from '../controllers/bookController'

export class Routes{

    public bookController:BookController=new BookController();

    public routes(app):void{

        app.route('/')
        .get(this.bookController.getBooks);


        app.route('/book')

            // Get all Books
            .get(this.bookController.getBooks)

            //create a new book
            .post(this.bookController.addNewBook);


        //get single book details
        app.route('/book/:boodId')
            .get(this.bookController.getBookWithID)

            //update a book with bookId
            .put(this.bookController.updateBook)

            //delete a book with BookId
            .delete(this.bookController.deleteBook)
    }
}