import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { PassengerService } from "./passenger.service";
import { AddPassenger } from "./components/passenger-add/passenger-add.component";
import { AppRoutingModule } from "./router.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerListComponent,
    AddPassenger
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  providers: [PassengerService],
  exports: [PassengerDashboardComponent],
})
export class PassengersModule {}
