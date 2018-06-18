import { Component, OnInit } from '@angular/core';
import { BookService } from '../app/services/book.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
/** details component*/
export class DetailsComponent implements OnInit {
    books;
    selectedBook: any;
    /** details ctor */
    constructor(private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = books
        });
    }

    changeState(book) {
        book.state = !book.state;
        
        this.bookService.update(book).subscribe(() => console.log("..."));
    }
}