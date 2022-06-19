import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
//import * as jwt from "jsonwebtoken";

@Injectable({providedIn:'root'})
export class TokenService{
    private readonly secretKey = "ThEHouseSeCRetKeyOfJwTtoUseItONReQuEStwiTHaUtHoriZE";

    public GetUserFromToken(token:string) : User {
        //  const decoded = jwt.verify(token, 'secret-key');
        //  console.log(decoded);
        return new User();
    }
}