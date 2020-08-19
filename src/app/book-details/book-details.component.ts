import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bl-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  private router: Router;
  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn')).subscribe(res => this.book = res);

  }
  getRating(num: number) {
    return new Array(num);
  }
  removeBook(){
    if (confirm('Buch wirklich löschen')){
      this.bs.remove(this.book.isbn)
        .subscribe(
          res => this.router.navigate(
            ['../'],
            {relativeTo: this.route}
          )
        );
    }
  }
}
