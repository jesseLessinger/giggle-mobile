import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PanGestureEventData } from 'tns-core-modules/ui/gestures/gestures';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  username: String = '';
  cardLeft: number = 0;
  cardTop: number = 0;
  prevDeltaX: number = 0;
  prevDeltaY: number = 0;

  ngOnInit() {
    this.username = this.userService.getUsername();
  }

 // DRAG AND DROP A CARD 
 dragCard(e: PanGestureEventData){  
    
    this.cardLeft += e.deltaX - this.prevDeltaX;
    this.cardTop += e.deltaY - this.prevDeltaY;
    this.prevDeltaX = e.deltaX;
    this.prevDeltaY = e.deltaY;
  
    // DROP (state of 3 is a finger up event)
    if (e.state === 3) {
      // reset prev state
      this.prevDeltaX = 0;
      this.prevDeltaY = 0;
    }
  }



}
