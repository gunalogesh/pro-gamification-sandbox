import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../Services/ticket.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css'],
})
export class ListTicketsComponent implements OnInit {
  constructor(private router: Router, private ticketService: TicketService) {}

  ngOnInit(): void {
    this.listickets();
  }
  tickets: any = [];

  navigateToAddickets() {
    this.router.navigate(['add-ticket']);
  }

  listickets() {
    this.tickets = this.ticketService.tickets;
  }
}
