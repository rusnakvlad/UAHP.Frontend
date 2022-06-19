import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonApiService } from "src/app/services/commonApi.service";
import { AdShortInfoDTO } from "../Models/AdShortInfo.model";

@Injectable({providedIn:'root'})
export class FindAdService{

    constructor(private commonApi: CommonApiService, private httpClient: HttpClient){

    }

    GetAllAdvertisments():Observable<AdShortInfoDTO[]>
    {
        return this.httpClient.get<AdShortInfoDTO[]>(this.commonApi.adUserFeaturesUrl + "/Advertisments/GetAll");
    }
}