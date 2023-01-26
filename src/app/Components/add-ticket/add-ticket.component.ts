import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../Services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css'],
})
export class AddTicketComponent implements OnInit {
  ticketCreationForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.ticketCreationForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      assignee: ['', Validators.required],
    });
  }
  get f() {
    return this.ticketCreationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.ticketCreationForm.invalid) {
      return;
    }
    this.ticketCreationForm.value.id = this.ticketService.tickets.length + 1;
    this.ticketCreationForm.value.createdDate = new Date().toDateString();
    this.ticketService.addTickets(this.ticketCreationForm.value);
    this.router.navigate(['list-tickets']);
  }
  onReset() {
    this.submitted = false;
    this.ticketCreationForm.reset();
  }

  navigateToAddickets() {
    this.router.navigate(['add-ticket']);
  }
}
