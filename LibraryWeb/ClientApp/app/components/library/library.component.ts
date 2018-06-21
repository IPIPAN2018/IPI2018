import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BookService } from '../app/services/book.service';
import { DatePipe } from '@angular/common'
import { getBaseUrl } from '../../app.browser.module';
import { DetailsComponent } from '../details/details.component';
import { UserService } from '../app/services/user.service';

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
    filterType;
    public static bookSelection: any = {};
    logged;
    users;

    // public library: Library[];
    /** library ctor */

    constructor(private bookService: BookService, private userService: UserService, private http: Http, public datepipe: DatePipe) {

    }

    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/SampleData/Library').subscribe(result => {
    //        this.library = result.json() as Library[];
    //    }, error => console.error(error));
    //}

    ngOnInit() {
        this.bookService.getBooks().subscribe(books => {
            this.books = this.allBooks = books;
            this.userService.getUsers().subscribe(users => {
                this.users = users;
                this.logged = JSON.parse(sessionStorage.getItem('logged') || '{}');

                //this.books.canReturn = users.filter(u => u.userId == this.logged.userId)[0].rentedBooks.filter(b => b.bookId == )
            });
        });

    }

    onShowDetails(book) {
        localStorage.setItem('selectedBook', JSON.stringify(book));
        location.replace(getBaseUrl() + "details")
        //window.open(getBaseUrl() + "details", );
    }

    changeState(book) {
        var string;

        if (book.state)
            string = "borrow"
        else
            string = "return"

        var user = this.users.filter(u => u.userId === this.logged.userId)[0];

        if (confirm("Are you sure to " + string + " this position?")) {
            book.state = !book.state;
            if (!book.state) {
                var date = Date.now();
                let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');

                // book.userId = this.logged.userId;

                book.rentedWhen = latest_date;
            }
            else {


                book.rentedWhen = null;
            }

            this.bookService.update(book).subscribe(() => console.log("..."));

        }
    }

    onFilterChange() {
        var books = this.allBooks;

        if (this.filterValue != null && this.filterValue != "") {
            if (this.filterType == "title")
                books = books.filter(v => v.title.includes(this.filterValue));
            else if (this.filterType == "author")
                books = books.filter(v => v.author.includes(this.filterValue));
            else if (this.filterType == "media")
                books = books.filter(v => v.media.includes(this.filterValue));
        }

        this.books = books;

    }
}

//interface Library {
//    title: string;
//    year: string;
//    media: string;
//    author: string;
//    state: boolean;
//}