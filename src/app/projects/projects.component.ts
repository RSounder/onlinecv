import { Component, OnInit } from '@angular/core';
import { datacard_data } from 'src/app/datacard/datacard_data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectData: datacard_data[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const url =
      'https://raw.githubusercontent.com/RSounder/onlinecv/master/src/assets/data/data_combined.json';
    this.http.get(url).subscribe((res: any) => {
      this.projectData = res.Projects;
    });
  }
}
