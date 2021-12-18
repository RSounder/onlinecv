import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.scss'],
})
export class VolunteerComponent implements OnInit {
  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    const url =
      'https://raw.githubusercontent.com/RSounder/onlinecv/master/src/assets/data/data_combined.json';
    this.http.get(url).subscribe((res: any) => {
      this.data = res.Volunteer;
    });
  }
}
