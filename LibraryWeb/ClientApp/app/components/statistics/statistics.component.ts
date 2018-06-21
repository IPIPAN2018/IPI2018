import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { BookService } from '../app/services/book.service';
import { Http } from '@angular/http';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
})

export class StatisticsComponent implements OnInit {
    books;
    dvdOnly;
    cdOnly;
    booksOnly;
    available;
    notavailable;

    constructor(private bookService: BookService, private http: Http) {

    }

    ngOnInit() {

        var all = this.books;

        this.bookService.getBooks().subscribe(books => {
            this.books = all = books;
            this.dvdOnly = books.filter(v => v.media == "DVD");
            this.cdOnly = books.filter(v => v.media == "CD");
            this.booksOnly = books.filter(v => v.media == "Book");
            this.available = books.filter(v => v.state == true);
            this.notavailable = books.filter(v => v.state == false);
        });
    }
        
   
}