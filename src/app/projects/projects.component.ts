import { Component, OnInit } from '@angular/core';
import { datacard_data } from 'src/app/datacard/datacard_data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectData: datacard_data[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projectData = [
      {
        header: 'Project1',
        date: '10 Dec 2021',
        content:
          'A clear start and end date – There are projects that last several years but a project cannot go on forever. It needs to have a clear beginning, a definite end, and an overview of what happens in between.\
          A project creates something new – Every project is unique, producing something that did not previously exist. A project is a one-time, once-off activity, never to be repeated exactly the same way again.\
          A project has boundaries – A project operates within certain constraints of time, money, quality, and functionality. We’ll see more about this in later sections.',
        image:
          'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        skills: ['Python', 'Angular'],
      },
      {
        header: '    Project2',
        date: '10 Oct 2021',
        content:
          'A clear start and end date – There are projects that last several years but a project cannot go on forever. It needs to have a clear beginning, a definite end, and an overview of what happens in between.\
          A project creates something new – Every project is unique, producing something that did not previously exist. A project is a one-time, once-off activity, never to be repeated exactly the same way again.\
          A project has boundaries – A project operates within certain constraints of time, money, quality, and functionality. We’ll see more about this in later sections.',
        image: 'https://wallpaperaccess.com/full/2390255.jpg',
        skills: ['Python', 'Angular', 'ROS', 'Linux', 'Embedded Systems'],
      },
    ];
  }
}
