import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonApiService } from "./commonApi.service";

@Injectable({providedIn:'root'})
export class UserService{
    constructor(private httpClient: HttpClient, private commonApi: CommonApiService){

    }

    
}