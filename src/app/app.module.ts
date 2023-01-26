import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ListTicketsComponent } from './Pages/list-tickets/list-tickets.component';
import { AddTicketComponent } from './Components/add-ticket/add-ticket.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProGamificationModule } from '@theproindia/pro-gamification';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ListTicketsComponent,
    AddTicketComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProGamificationModule.forRoot({
      gamificationApiUrl:
        'https://stage-gamificationapi.theproindia.com/tokens/sandbox/1f5c88ef-830c-47f7-8da0-b17b4e3fe536/dbb74e4e-bf07-4a41-ab5c-f75696bc39dd',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
