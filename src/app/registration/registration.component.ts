import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../login/models/register.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public user: UserRegister = new UserRegister();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  Register() {
    this.authService.Register(this.user);
  }
}
