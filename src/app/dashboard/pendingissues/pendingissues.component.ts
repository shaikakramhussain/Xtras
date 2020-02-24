import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pendingissues',
  templateUrl: './pendingissues.component.html',
  styleUrls: ['./pendingissues.component.css']
})
export class PendingissuesComponent implements OnInit {
  canDeactivate() {
    throw new Error("Method not implemented.");
  }
  registerForm: FormGroup;
  submitted = false;
  profile: { "first_name": any; "emai": any; };
  result: Object;
  
  constructor(private formBuilder: FormBuilder, private router: Router,
     private htt: HttpClient) { }
     confirm1(){
      return confirm("Are u Sure u want to Navigate")
      }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      emai:['', [Validators.required]],
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.profile = {
      "first_name": this.registerForm.controls.first_name.value,
      "emai": this.registerForm.controls.emai.value
    }
    console.log("akram", this.registerForm);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.htt.post('http://192.168.3.235::3000/api/services/storeData', this.profile).subscribe((response) => {
      this.result = response    
    });
  }
}