import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}
  appVersion = '';
  ngOnInit(): void {
    this.appVersion = 'v' + environment.appVersion;
    console.log(this.appVersion);
  }
}
