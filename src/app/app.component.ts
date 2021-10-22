import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlinecv';
  showLoader = true;
  private timer: Observable<any> | undefined;

  ngOnInit():void {
    this.setTimer();
  }

  public setTimer(){
    this.showLoader = true;
    this.timer = timer(4000);
    this.timer.subscribe(() => {
      this.showLoader = false;
  });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 4000)
  }
}
