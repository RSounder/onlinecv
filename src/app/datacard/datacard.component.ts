import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datacard',
  templateUrl: './datacard.component.html',
  styleUrls: ['./datacard.component.scss'],
})
export class DatacardComponent implements OnInit {
  @Input() dataArray: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
