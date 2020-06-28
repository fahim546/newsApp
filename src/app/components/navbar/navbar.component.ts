import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: string[];
  currentSubSection: string;
  response: Object[];
  constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) { }

  ngOnInit() {
 // subscription to store & selector to pull all section news
    this.store
      .subscribe(
        subsections => {
          this.currentSubSection = '';
          this.subsections = [];
          for (const item of subsections) {
            // pulling all subsection which is unique and non empty
            if (item.subsection.length && !this.subsections.includes(item.subsection)) {
              this.subsections.push(item.subsection);
            }
          }
        }
      );

  }


  dispatchAction($event: string) {
    this.currentSubSection = $event;
    this.store.dispatch(this.newsActions.LoadSectionNews(this.subsections))   //new fromActions.FilterSubSection($event));
}
