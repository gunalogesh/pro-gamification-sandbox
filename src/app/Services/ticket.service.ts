import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor() {}

  tickets = [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'Ticket 1 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'Ticket 2 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 3,
      title: 'Ticket 3',
      description: 'Ticket 3 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 4,
      title: 'Ticket 4',
      description: 'Ticket 4 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
    {
      id: 5,
      title: 'Ticket 5',
      description: 'Ticket 5 description',
      status: 'Open',
      priority: 'High',
      assignee: 'John Doe',
      createdDate: '2020-10-10',
    },
  ];

  addTickets(ticket: any) {
    this.tickets.push(ticket);
  }
}
