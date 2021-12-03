import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AwardsComponent } from 'src/app/awards/awards.component';

const routes: Routes = [{ path: 'awards', component: AwardsComponent }]; // sets up routes constant where you define your routes

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [],
})
export class NavbarComponent implements OnInit {
  circleColor = '#FF3300';
  strokeColor = '#00afaf';
  constructor() {}

  ngOnInit(): void {}
}
