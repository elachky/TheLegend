import { Component, Output, EventEmitter  } from '@angular/core';



@Component({
    selector: 'app-passenger-add',
    templateUrl: 'passenger-add.component.html',
    styleUrls: ['passenger-add.component.css']
})

export class AddPassenger{
    @Output() nameEvent: EventEmitter<string> = new EventEmitter();
    name: string;
    constructor(){ }
    addPassenger(){
        this.nameEvent.emit(this.name);
    }
    handleNameEdit(event: any){
        this.name = event.target.value;
    }

}