import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-change',
  templateUrl: './status-change.component.html',
  styleUrls: ['./status-change.component.css']
})
export class StatusChangeComponent implements OnInit {
//  status=[
//    {id:"1",value:"Open"},
//    {id:"2",value:"Resolved"},
//    {id:"3",value:"Pending"}]
// public status="Open";
// statuses=["Open","Resolved","Pending"];
state=[{
  status:"open",
  statuses:["Open","Resolved","Pending"]
},
{
  status:"Pending",
  statuses:["Open","Resolved","Pending"]
},
{
  status:"Resolved",
  statuses:["Open","Resolved","Pending"]
},
]
  constructor() { }
  @Output() Send=new EventEmitter()
  ngOnInit(): void {}
  //   console.log(this.status);
     
  //   // this.status.forEach(e=>{
  //   //   console.log(e.id);
  //   // })
  //   console.log(this.status)
    
  // }
  onChangeStatus(change) {
    this.Send.emit(console.log(change));
    this.state.forEach(e=>{
      e.status=change;
      console.log(e.status)
    })
    
    
  }
  // chageStatus(state){
  //   console.log(this.status);
  //    this.status=state;
  //   console.log(state);
  // }
  
//   $('#exampleModal').on('click','#paramsOkay', function (e) {
//     console.log($('#recipient-name').text());
//     console.log(e);
// });
 
}
