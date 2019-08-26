import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router ) { }

  username = "J SNOW ";
  password = "password";
  headers = new HttpHeaders({ "Content-Type": "application/json"});

  ngOnInit() {
  }

  login() {
    this.http.post("https://fbe0db99.ngrok.io/login", { 
      username: this.username, password: this.password 
    }, { headers: this.headers }).subscribe((user: any)=>{
      alert("welcome")
      this.router.navigate(['/home'])
      console.log(user)
    }, 
    console.error);

  }

}
