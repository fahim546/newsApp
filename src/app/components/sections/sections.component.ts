import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sections } from '../../store/reducers/sections.reducer';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;

   constructor(private store: Store<any>,
    private router: Router) { }

  ngOnInit() {
   this.store
      .subscribe(
        sectionList => {
          this.sectionList = sectionList;
        }
      );

  }
  sectionNews(section: string): void {
    this.router.navigate(['/section', section]);
  }

}
