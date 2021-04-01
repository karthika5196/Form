import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import * as  from 'events';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent implements OnInit {

  constructor() { }
status=["Open","Resolved","Pending"];
@Output() Send=new EventEmitter()
  ngOnInit(): void {
  }
  onChangeStatus(status) {
    this.Send.emit(status);
      
      
    
    
  }
}
