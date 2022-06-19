import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Login } from "../login/models/login.model";
import { UserRegister } from "../login/models/register.model";
import { TokenModel } from "../models/token.model";
import { User } from "../models/user.model";
import { CommonApiService } from "./commonApi.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: User = new User();

    constructor(private httpClient: HttpClient, private commonApi: CommonApiService, private router: Router) {

    }

    public IsAuthenticate: boolean = false;

    public Login(loginModel: Login) {
        this.httpClient.post<TokenModel>(this.commonApi.userServiceUrl + "/Login", loginModel).subscribe(tokenModel => {
            localStorage.setItem("uahpAccessToken", tokenModel.accessToken);
            localStorage.setItem("uahpIsAuth", "true");
        })

        const token = localStorage.getItem("uahpAccessToken");
        if (token != null) {
            var tokenModel = new TokenModel();
            tokenModel.accessToken = token;
            this.GetUserByToken(tokenModel).subscribe(user => {
                console.log(user);
                if (user) {
                    this.user = user;
                    this.IsAuthenticate = true;
                    localStorage.setItem("uahpUserId", user.id);
                    this.router.navigate(["home"]);
                }
            })
        }
    }

    public GetUserByToken(token: TokenModel): Observable<User> {
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this.httpClient.post<User>(this.commonApi.userServiceUrl + "/GetByToken", token, { headers: headers });
    }

    public Authenticate() {
        const token = localStorage.getItem("uahpAccessToken");
        if (token != null) {
            var tokenModel = new TokenModel();
            tokenModel.accessToken = token;
            this.GetUserByToken(tokenModel).subscribe(user => {
                console.log(user);
                if (user) {
                    this.user = user;
                    this.IsAuthenticate = true;
                }
            })
        }
    }

    public Register(registerModel: UserRegister) {
        var headers = new HttpHeaders().set('content-type', 'application/json');
        this.httpClient.post<User>(this.commonApi.userServiceUrl + "/Register", registerModel, { headers: headers }).subscribe(user => {
            console.log(user);
        })
    }

    public Logout(){
        localStorage.removeItem("uahpAccessToken");
        localStorage.removeItem("uahpUserId");
        localStorage.removeItem("uahpIsAuth");
        location.reload();
    }
}