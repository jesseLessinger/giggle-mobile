import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserService } from '../user.service';


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserService ) { }

  username = "jsnow";
  password = "password";
  headers = new HttpHeaders({ "Content-Type": "application/json"});
  GIGGLE_SERVER_URL = `https://6ff2e7f7.ngrok.io`;
  


  ngOnInit() {
  }

  login() {
    this.http.post(this.GIGGLE_SERVER_URL+"/login/", { 
      username: this.username, password: this.password 
    }, { headers: this.headers }).subscribe((user: any)=>{
      //alert("welcome" + user.username)
      this.userService.setUser({id: user.id, username: user.username, email: user.email})
      this.router.navigate(['/home'])
      console.log("USER: ", user)
    }, 
    (err)=>{
      if (err.status == 404) alert(err);
      else alert('we done effed up.');
      });
  }

  loginGoogle() {
    this.http.get(this.GIGGLE_SERVER_URL+"/login/google")
  }

}
