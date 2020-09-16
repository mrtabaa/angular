import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppError } from '../common/app-errors-handlers';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  year: any;
  month: any;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(
          response => response
        )
      )
      .subscribe(
        date => {
          this.year = date.get('year');
          this.month = date.get('month');
        }
      );
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
