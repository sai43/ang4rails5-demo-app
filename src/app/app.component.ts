import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  books;
  constructor(private http: Http) {
    this.getBooks();
    console.log('api hitiing done...');
  }

  getBooks() {
    console.log('api hitting......');
    this.http.get('http://localhost:3000/books.json')
      .subscribe(res => {
        this.books = res.json();
      });
  }
}

