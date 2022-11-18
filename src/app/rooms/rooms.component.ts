import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;
  hideRooms = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  rooms: Room = {
    availableRooms: 0,
    bookedRooms: 5,
    totalRooms: 20

  };





  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
