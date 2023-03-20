import { Component, Input, OnInit } from '@angular/core';
import { Gamification } from '@theproindia/pro-gamification';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css'],
})
export class BusDetailComponent implements OnInit {
  constructor(public gamification: Gamification) {}
  @Input() busDetails: any;

  togglePaymet: boolean = false;

  sasToken: string =
    '?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D';

  busFacility: string =
    'https://stagegamificationui.blob.core.windows.net/sandbox-assets/bus-facility.png';

  seats: string =
    'https://stagegamificationui.blob.core.windows.net/sandbox-assets/seats.png';

  ngOnInit(): void {}

  bookTicket() {
    this.gamification.updateGameAction(
      environment.gamification.userId,
      environment.gamification.gameId,
      '',
      ''
    );
  }
  togglePayment() {
    this.togglePaymet = !this.togglePaymet;
  }
}
