import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { BookService } from '../app/services/book.service';
import { Http } from '@angular/http';
import { UserService } from '../app/services/user.service';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.css'],
})

//    @Component({
//        template: `<h2>Statistics</h2>
//<chart type="pie" [data]="data"></chart>`
//})

export class StatisticsComponent implements OnInit {
    books;
    dvdOnly;
    cdOnly;
    booksOnly;
    available;
    notavailable;
    users;
    //data = {
    //    labels: ['Test1', 'Test2', 'Sss'],
    //    datasets: [
    //        {
    //            data: [5, 3, 1],
    //            backgroundColor: [
    //                "#ff6384",
    //                "#36a2eb",
    //                "#ffce56"
    //            ]
    //        }]
    //};

    constructor(private bookService: BookService, private userService: UserService, private http: Http) {

    }

    ngOnInit() {

        this.userService.getUsers().subscribe(users => {
            this.users = users;

            this.bookService.getBooks().subscribe(books => {
                this.books = books;
                this.dvdOnly = books.filter(v => v.media == "DVD");
                this.cdOnly = books.filter(v => v.media == "CD");
                this.booksOnly = books.filter(v => v.media == "Book");
                this.available = books.filter(v => v.state == true);
                this.notavailable = books.filter(v => v.state == false);
            });
        });

       
    }
        
   
}