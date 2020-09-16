import { Component, OnInit } from '@angular/core';
import { MoshFollowersService } from '../services/mosh-followers.service';
import { AppError, UnavailableError, InternalServerError, NotFoundError, BadInputError } from '../common/app-errors-handlers';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'mosh-followers',
  templateUrl: './mosh-followers.component.html',
  styleUrls: ['./mosh-followers.component.css']
})
export class MoshFollowersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: MoshFollowersService) { }

  followers = [];

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(
        switchMap(
          combined => {
            // Required parameters
            const id = combined[0].get('id');
            const location = combined[0].get('location');

            // Optional parameters
            const page = combined[1].get('page');
            const newest = combined[1].get('newest');
            const cheapest = combined[1].get('cheapest');

            // Followers data
            return this.service.getAll();
          }
        )
      )
      .subscribe(
        // now we have the followers array directly to work on
        data => this.followers = data,

        (error: AppError) => {
          if (error instanceof UnavailableError) {
            alert('The API link is broken');
          }
          else if (error instanceof InternalServerError) {
            alert('Server is down');
 }
          else { throw error; }
        }
      );
  }
  //   this.route.paramMap
  //     .subscribe(
  //       params => {
  //         console.log("paramMap: " + params.get('id'));
  //       }
  //     );

  //   this.route.queryParamMap
  //     .subscribe(
  //       params => {
  //         console.log("queryParamMap: " + params.get('order'));
  //       }
  //     );

  //   this.service.getAll()
  //     .subscribe(data => this.followers = data),
  //     (error: AppError) => {
  //       if (error instanceof UnavailableError)
  //         alert("The API link is broken");
  //       else if (error instanceof InternalServerError)
  //         alert("Server is down");
  //       else throw error;
  //     }
  // }



  createFollower() {
    const follower = { login: 'Reza', url: 'rezataba.com', avatar_url: 'https://instagram.fayt2-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.506.1080.1080a/s150x150/70971582_514444815999537_8930675350251422212_n.jpg?_nc_ht=instagram.fayt2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=S0_RFAK9cN0AX-6YOsH&oh=37fe5b1706dd198e25b26da39843a211&oe=5F51AB6B' };

    this.followers.splice(0, 0, follower);

    this.service.create(follower)
      .subscribe(
        response => {
          console.log('REPONSE: ' + response);
        },
        (error: AppError) => {
          console.log(error);
          this.followers.splice(0, 1);

          if (error instanceof UnavailableError) {
            alert('The API link is broken');
          }
          else if (error instanceof NotFoundError) {
            alert('Cannot find the item.');
 }
          else if (error instanceof InternalServerError) {
            alert('Server is down');
 }
          else if (error instanceof BadInputError) {
            alert('Entry is not valid.');
 }
          else {
            throw error;
 }
        }
      );
  }

  deleteFollower(follower: HTMLInputElement) {
    const index = this.followers.indexOf(follower);
    this.followers.splice(index, 1);

    this.service.delete(follower)
      .subscribe(
        null,
        (error: AppError) => {
          this.followers.splice(index, 0, follower);
          console.log('TEST');

          if (error instanceof UnavailableError) {
            alert('The API link is broken');
          }
          else if (error instanceof NotFoundError) {
            alert('Item is already deleted');
 }
          else if (error instanceof InternalServerError) {
            alert('Server is down');
 }
          else {
            throw error;
 }
        }
      );
  }

}
