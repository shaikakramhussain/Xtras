import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  paramsname: any;
  idname: any;
  result: Object;
  registerForm: FormGroup;
  submitted = false;
  formBuilder: any;
  profile: { "first_name": any; "emai": any; };
  nameid: string;
  data: string;
  data1: string;
  constructor(private router: Router, private route: ActivatedRoute, private htt: HttpClient) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("PARAMS", params);
      this.paramsname = params.usname;
      this.idname = params.id;
      console.log("PARAMS", this.paramsname);
      console.log("IDNAME", this.idname);
    })
    this.htt.get('http://192.168.3.235:3000/api/services/get').subscribe((response) => {
      this.result = response
      console.log("name00000000", this.result);
    });
    //Local STORAGE
    this.data = localStorage.getItem('dataSource')
    console.log("AAAA", localStorage.getItem('dataSource'));
    //LOCAL STORAGE
    this.data1 = localStorage.getItem('dataSource1')
    console.log("BBBB", localStorage.getItem('dataSource1'));
  }
  logOut() {
    this.router.navigateByUrl('/login');
  }
}