import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

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
