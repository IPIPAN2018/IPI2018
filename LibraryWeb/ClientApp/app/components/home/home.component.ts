import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public bookImgUrl = require("./images/books.jpg");
    public bookMindUrl = require("./images/book_mind.jpg");
    public bookStackUrl = require("./images/books_stack.jpg");
}
