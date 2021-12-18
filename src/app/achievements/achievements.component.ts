import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    const url =
      'https://raw.githubusercontent.com/RSounder/onlinecv/master/src/assets/data/data_combined.json';
    this.http.get(url).subscribe((res: any) => {
      this.data = res.Achievements;
    });
  }
}
