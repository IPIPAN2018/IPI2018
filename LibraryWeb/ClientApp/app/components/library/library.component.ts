import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookService } from '../app/services/book.service';
import { getBaseUrl } from '../../app.browser.module';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.css']
})
/** library component*/
export class LibraryComponent implements OnInit {
    books;
    allBooks;
    filter: any = {};
    filterValue;
   // public library: Library[];
    /** library ctor */

    constructor(private bookService: BookService, private http: Http) {

    }

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/SampleData/Library').subscribe(result => {
    //        this.library = result.json() as Library[];
    //    }, error => console.error(error));
    //}

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = this.allBooks = books
        });
    }

    onShowDetails(book) {
        var opened_window = window.open(getBaseUrl() + "details");
        
    }

    changeState(book) {
        book.state = !book.state;

        this.bookService.update(book).subscribe(() => console.log("..."));
    }

    onFilterChange() {
        var books = this.allBooks;

        if (this.filterValue != null)
            books = books.filter(v => v.title == this.filterValue);

    }
}

//interface Library {
//    title: string;
//    year: string;
//    media: string;
//    author: string;
//    state: boolean;
//}