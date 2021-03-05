import { Component, OnInit } from '@angular/core';

import { Passenger, child } from 'src/assets/passengers';
import { PassengerService } from '../../passenger.service';



@Component({
    selector: 'app-passenger-add',
    templateUrl: 'passenger-add.component.html',
    styleUrls: ['passenger-add.component.css']
})

export class AddPassenger implements OnInit{
    passenger : Passenger;
    children: child[] = [];
    passengerId: number = 100;
    constructor( private passengerService : PassengerService){ }

    ngOnInit(){
        console.log(this.uniqueId());
        console.log(parseInt(this.uniqueId()));
    }
    
    onClickSubmit(passengerForm){
        const formVal = passengerForm.value;
        this.addPassenger({
            id : NaN, 
            fullName : formVal.fullName, 
            checkedIn: formVal.checkInDate ? true : false, 
            checkInDate : (new Date(formVal.checkInDate)).getTime(), 
            children: this.children
        });
        passengerForm.reset();
    }
    
    
    addPassenger(passenger: Passenger){
        this.passengerService.addPassenger(passenger).subscribe(()=>{
        console.log("added")
        },(error)=>console.log(error)); //add using service 
    }


    onChildSubmit(childForm){
        this.children = [...this.children, {name :childForm.value.name, age : parseInt(childForm.value.age)}];
        childForm.reset();
    }

    // uniqueId(){
    //     const len = this.passengerService.passengers?.length  + 1;
    
    //     for (let i = 0; i <= len; i++) {
    //       if (!this.passengerService.passengers.some(el => el.id === i))
    //         return i;
    //     }
    // }
    uniqueId() {
        return Math.random().toString().substr(2, 9);
      };

}