import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  events1: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.events1 = [
      {
        heading: 'DRR Special Recognition',
        date: 'April 2021',
        icon: 'emoji_events',
        image: 'drr_spec.jpg',
        org: 'Rotary International Dist. 3201',
        context:
          'For showing leadership in community service projects and spirit of volunteering displayed during Rotary year 2020-21',
        chips: ['leadership', 'volunteering'],
      },
      {
        heading: 'DRR Special Recognition2affswfswewsffsfsdf',
        date: 'April 2022',
        icon: 'military_tech',
        image: 'drr_spec.jpg',
        org: 'Rotary International Dist. 3201gdrfgdgdgdhgdf',
        context:
          'For showing leadership in community service projects and spirit of volunteering displayed during Rotary year 2020-21',
        chips: ['leadership', 'volunteering'],
      },
      {
        heading: 'DRR Special Recognition33',
        date: 'April 2022',
        icon: 'military_tech',
        image: 'drr_spec.jpg',
        org: 'Rotary International Dist. 3205',
        context:
          'For showing leadership in community service projects and spirit of volunteering displayed during Rotary year 2020-21',
        chips: ['leadership', 'volunteering'],
      },
    ];
  }
}
