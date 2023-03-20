import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProGamificationModule } from '@theproindia/pro-gamification';
import { BookTicketComponent } from './Components/book-ticket/book-ticket.component';
import { OfferComponent } from './Components/offer/offer.component';
import { BusDetailComponent } from './Components/bus-detail/bus-detail.component';
import { FooterComponent } from './Components/footer/footer.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConfirmDialogComponent,
    BookTicketComponent,
    OfferComponent,
    BusDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProGamificationModule.forRoot({
      gamificationApiUrl: `https://stage-gamificationapi.theproindia.com/tokens/sandbox/${environment?.gamification.clientId}/${environment.gamification.clientSecret}`,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
