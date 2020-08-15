import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bl-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  getRating(num: number) {
    return new Array(num);
  }
  showBookList() {
    this.showListEvent.emit();
  }
}
