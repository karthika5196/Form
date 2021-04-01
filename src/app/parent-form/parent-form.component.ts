import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent {

  register: FormGroup;
//   myclass = false;
//   password;
//   user: any = {};
//   mytexttype=false;
  
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {


    // this.register = this.formBuilder.group({
      this.register=this.formBuilder.group({
        phonenumber:['',Validators.required],
        address:['',Validators.required],
        zip:['',Validators.required],
        pincode:['',Validators.required]
      });
     console.log(this.register.valid);
    //   username:['', Validators.required],

    //   email: ['', [
    //     Validators.required,
    //     Validators.email,
    //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
    //   ],
      
    // });

  }
  // get f() { return this.register.controls; }

ngOnChanges(){
  console.log(this.register.valid);
}

}
