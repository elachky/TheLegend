import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Passenger, passengers } from "src/assets/passengers";
import { Injectable } from '@angular/core';

const URL = "http://localhost:3000/passengers";
@Injectable({
  providedIn: 'root'
})


export class PassengerService {

  passengers: Passenger[];
  constructor(private http: HttpClient) {}

  public getPassengers(): Observable<Passenger[]> {
    return  this.http.get<Passenger[]>(URL);
  }
  editPassenger(passenger: Passenger): Observable<void | any>{
    return this.http.put(`${URL}/${passenger.id}`,passenger);
  }
  deletePassenger(id : number): Observable<void | any>{
    return this.http.delete(`${URL}/${id}`);
  }
  
  addPassenger(passenger : Passenger): Observable<void | any>{
    return this.http.post(URL, passenger);
  }
}
