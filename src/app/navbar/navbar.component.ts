import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
  ]
})
export class NavbarComponent implements OnInit {

  circleColor = '#FF3300'
  strokeColor = "#00afaf"
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
