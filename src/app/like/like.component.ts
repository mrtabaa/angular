import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('activeCond') activeCond: boolean;
  @Input('likesCount') likesCount: number;

  constructor() {}

  onLike() {
    this.likesCount += this.activeCond ? -1 : 1;
    this.activeCond = !this.activeCond;
  }
}
