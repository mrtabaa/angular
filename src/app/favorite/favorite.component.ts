import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  constructor() {}

  @Input('isFavorite') isFavorite: boolean;
  @Input('likeNums') likeNums: number;

  updateFavorite() {
    this.isFavorite = !this.isFavorite;
    this.likeNums += this.isFavorite ? 1 : -1;
  }

  ngOnInit(): void {}
}
