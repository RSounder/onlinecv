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

  colours = {
    text_head : '',
    text_sec : ''
  }

  constructor(
    private globals: GlobalsService
  ) { }

  ngOnInit(): void {
    this.colours.text_head = this.globals.HTML_fonts.text_head;
    this.colours.text_sec = this.globals.HTML_fonts.text_sec;
  }

}
