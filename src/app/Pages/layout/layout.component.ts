import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  gamificationUserId = environment.gamification.userId;
  gamificationAppId = environment.gamification.applicationId;
  logoUrl =
    'https://stagegamificationui.blob.core.windows.net/sandbox-assets/flag.svg?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D';
  constructor() {}

  ngOnInit(): void {}
}
