import { Component, OnInit } from '@angular/core';
import { TokenModel } from '../models/token.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isAuthenticate: boolean = false;

  public UserName: string;
  public Surname: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    const token = localStorage.getItem("uahpAccessToken");
        if (token != null) {
            var tokenModel = new TokenModel();
            tokenModel.accessToken = token;
            this.authService.GetUserByToken(tokenModel).subscribe(user => {
                console.log(user);
                if (user) {
                this.UserName = user.name;
                this.Surname = user.surname;
                this.isAuthenticate = true;
                }
            })
        }
    
  }

}
