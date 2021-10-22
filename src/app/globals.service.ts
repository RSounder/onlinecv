import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  HTML_fonts = {
    background_pri: '#0B0C10',
    background_sec: '#1F2833',
    text_pri: '#C5C6C7',
    text_head: '#66FCF1',
    text_sec: '#45A29E',
    highlight: '#ff000082'
  }

  constructor() { }
}
