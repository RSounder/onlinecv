import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  @Input() dataArray: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
