import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  gamificationUserId = '3d5447f4-7dfb-4885-9182-af84ec854344';
  gamificationAppId = '63cfb1b0ea6485a3b1bae9bd';
  constructor() {}

  ngOnInit(): void {}
}
