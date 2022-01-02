import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { datacard_data } from 'src/app/datacard/datacard_data';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss'],
})
export class MentorComponent implements OnInit {
  mentorData: datacard_data[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    const url =
      'https://raw.githubusercontent.com/RSounder/sounder_cv/master/src/assets/data/data_combined.json';
    this.http.get(url).subscribe((res: any) => {
      this.mentorData = res.Mentor;
    });
  }
}
