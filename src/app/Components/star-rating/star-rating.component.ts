import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {
  @Input() maxRating = 5;
  @Input() currentRating = 0;
  @Output() ratingUpdated = new EventEmitter<number>();
  ngOnInit(): void {}
  stars: number[] = [];

  constructor() {
    for (let i = 1; i <= this.maxRating; i++) {
      this.stars.push(i);
    }
  }

  setRating(rating: number): void {
    this.currentRating = rating;
    this.ratingUpdated.emit(rating);
  }
}
