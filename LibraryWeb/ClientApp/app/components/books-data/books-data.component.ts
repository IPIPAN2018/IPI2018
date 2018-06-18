import { Component, OnInit } from '@angular/core';
import { BookService } from '../app/services/book.service';

@Component({
    selector: 'app-books-data',
    templateUrl: './books-data.component.html',
    styleUrls: ['./books-data.component.css']
})
/** books-data component*/
export class BooksDataComponent implements OnInit {
    books: any;
    selectedBook: any = {};
    /** books-data ctor */
    constructor(private bookService: BookService) {
        
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = books
        });

        this.selectedBook.title = "";
    }

    submit() {
        this.bookService.create(this.selectedBook).subscribe(x => console.log("..."));
    }

    onBookChange() {

    }

}