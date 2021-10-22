import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  colours = {
    text_pri : '',
    text_sec : ''
  }

  constructor(
    private globals: GlobalsService
  ) { }

  ngOnInit(): void {
    this.colours.text_pri = this.globals.HTML_fonts.text_pri;
    this.colours.text_sec = this.globals.HTML_fonts.text_sec;
  }

}
