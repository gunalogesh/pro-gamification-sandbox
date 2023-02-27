import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  gamificationUserId = '3d5447f4-7dfb-4885-9182-af84ec854344';
  gamificationAppId = '63cfb1b0ea6485a3b1bae9bd';
  logoUrl =
    'https://stagegamificationui.blob.core.windows.net/sandbox-assets/flag.svg?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D';
  constructor() {}

  ngOnInit(): void {}
}
