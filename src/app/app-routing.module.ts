import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTicketComponent } from './Components/add-ticket/add-ticket.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ListTicketsComponent } from './Pages/list-tickets/list-tickets.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'list-tickets', component: ListTicketsComponent },
      {
        path: 'add-ticket',
        component: AddTicketComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
