import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {
// registerform:FormGroup;
@Input() register:FormGroup;
  constructor(private fb:FormBuilder) {
    // this.register=fb.group({
    //   phonenumber:['',Validators.required],
    //   address:['',Validators.required],
    //   zip:['',Validators.required],
    //   pincode:['',Validators.required]
    // });
   }

  ngOnInit(): void {
    // console.log(this.register);
   
  }

}
