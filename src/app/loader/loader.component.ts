import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  strokeColor = "#00afaf"
  circleColor = "#FF3300"

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
