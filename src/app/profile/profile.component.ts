import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(
        params => {
          console.log(params.get('id'));
          console.log(params.get('login'));
        }
      );
  }

  submit() {
    this.router.navigate(
      // navigate to followers.component.html
      // set its Required and Optional link parameters
      ['/followers', 2, 'location'], // set 2 and location as Required params
      {
        // set Optional params
        queryParams: {
          page: 1,
          order: 'newest'
        }
      }
    );
  }
}
