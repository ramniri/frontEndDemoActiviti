import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private loginservice: UserloginService) { }

  onSubmit(){
    console.warn(this.user);
    this.loginservice.userLogin(this.user).subscribe(
      data=>{
        alert("Login Successfull");
      }, error=> alert("Login fail")
    );
  }
  ngOnInit(): void {
  }

}
