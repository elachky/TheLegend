import { Component, OnInit } from "@angular/core";

import {Passenger} from "src/assets/passengers";
import { PassengerService } from "../passenger.service";

@Component({
  selector: "component-dashboard",
  templateUrl: 'passenger-dashboard.component.html',
  styleUrls: ["./passenger-dashboard.component.css"],
})
export class PassengerDashboardComponent implements OnInit {
  public passengers: Passenger[];
  public passengerId : number;

  constructor(private passengerService: PassengerService) {}

  ngOnInit() {
    this.getPassengers();
    // setTimeout(()=>console.log(this.passengers),300);
  }

  editPassenger(passenger: Passenger) {
    this.passengerService.editPassenger(passenger).subscribe(()=>{
      this.passengers = this.passengers.map((p) => {
        if (p.id === passenger.id) {
          return Object.assign({}, p, passenger);
        }
      return p;
      })
    });
  }

  removePassenger(id: number) {
    this.passengerService.deletePassenger(id).subscribe(() => {
      this.passengers = this.passengers.filter((passenger) => passenger.id !== id)
    })
  }

  getPassengers(){
    this.passengerService.getPassengers().subscribe(passengers => this.passengers = passengers);
  }
  
}
