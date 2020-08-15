import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bl-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];
@Output() showDetailsEvent = new EventEmitter<Book>();
  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.books = this.bs.getAll();
  }

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }

}
