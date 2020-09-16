import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navBackgroundColor = environment.navbarBackgroundColor;

  ngOnInit(): void {
  }
}
