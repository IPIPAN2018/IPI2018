import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { BookService } from '../app/services/book.service';
import { LibraryComponent } from '../library/library.component';
import { DatePipe } from '@angular/common'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
/** details component*/
export class DetailsComponent implements OnInit {
 
    books;
    selectedBook: any;
    logged;
    /** details ctor */
    constructor(private bookService: BookService, public datepipe: DatePipe) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = books;
            this.selectedBook = JSON.parse(localStorage.getItem('selectedBook') || '{}');
            console.log("TITLE", this.selectedBook.title);
        });

        this.logged = JSON.parse(sessionStorage.getItem('logged') || '{}');
    }
    
    changeState(book) {
        var string;

        if (book.state)
            string = "borrow"
        else
            string = "return"

        if (confirm("Are you sure to " + string + " this position?")) {
            book.state = !book.state;
            if (!book.state) {
                var date = Date.now();
                let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');

                book.userId = this.logged.userId;

                book.rentedWhen = latest_date;
            }
            else {
                book.userId = null;
                book.rentedWhen = null;
            }



            this.bookService.update(book).subscribe(() => console.log("..."));
        }
    }
}