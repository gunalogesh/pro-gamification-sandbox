import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketComponent } from './Components/book-ticket/book-ticket.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { RatingComponent } from './Pages/rating/rating.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'book-ticket',
        component: BookTicketComponent,
      },
      {
        path: '',
        redirectTo: '/book-ticket',
        pathMatch: 'full',
      },
      {
        path: 'rating/:ticketId',
        component: RatingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
