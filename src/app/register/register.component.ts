import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
  profile: { "name": any; "password": any; "email":any };
  result: Object;

    constructor(private formBuilder: FormBuilder, private router: Router
      , private htt:HttpClient) { }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', [Validators.required]],            
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    onSelectFile(){
    }

    onSubmit() {
        this.submitted = true;
        this.profile = {
          "name":this.registerForm.controls.name.value,
          "password":this.registerForm.controls.password.value,
          "email":this.registerForm.controls.email.value
        }
        console.log(this.registerForm);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.htt.post('http://192.168.3.235:3000/api/services/registor',this.profile).subscribe((response) => {
      this.result = response
      console.log(this.result);
      this.router.navigateByUrl('/dashboard');
    })
  }
}