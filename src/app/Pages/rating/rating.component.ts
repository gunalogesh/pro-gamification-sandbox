import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gamification } from '@theproindia/pro-gamification';
import { ModalService } from '../../Services/modal.service';
import { TicketService } from '../../Services/ticket.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  constructor(
    public activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
    public modalService: ModalService,
    public gamification: Gamification
  ) {}
  showErrorText: boolean = false;
  ticketId: string = '';
  tripDetails: any;
  trip: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.ticketId = params['ticketId'];
      this.tripDetails = this.ticketService.trips.filter((trip) => {
        return trip.ticketId == this.ticketId;
      });
      this.trip = this.tripDetails[0];
    });
  }
  @Input() busDeatails: any = {};
  rating = 0;
  feedback = '';

  addReview() {
    if (this.rating && this.feedback) {
      this.resetForm();
      this.modalService.modalStateData.next({
        headerText: 'Glad you Like it',
        pointsText: 'Points',
        points: '25',
      });
      this.modalService.openModal();
    } else {
      this.showErrorText = true;
    }
  }
  onRatingUpdated(rating: number): void {
    this.rating = rating;
  }
  resetForm() {
    this.showErrorText = false;
    this.feedback = '';
  }
}
