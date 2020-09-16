import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title: string;
  isActive = true;

  isFavorite: boolean;

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  constructor(service: AuthorsService) {
  }

  ngOnInit(): void {
  }

}
