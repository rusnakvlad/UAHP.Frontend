import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommonApiService } from "src/app/services/commonApi.service";
import { AdDto } from "../models/AdDto.model";
import { AdShortInfoDTO } from "../models/AdShortInfo.model";
import { AdCreateDTO } from "../models/CreateAd.model";

@Injectable({ providedIn: 'root' })
export class AdService {

    constructor(private commonApi: CommonApiService, private httpClient: HttpClient) {

    }

    GetAllAdvertisments(): Observable<AdShortInfoDTO[]> {
        return this.httpClient.get<AdShortInfoDTO[]>(this.commonApi.adUserFeaturesUrl + "/Advertisments/GetAll");
    }

    GetAllUserAdvertisments(): Observable<AdShortInfoDTO[]> {
        const userId = localStorage.getItem("uahpUserId");
        let params = new HttpParams().append("OwnerId", userId as string);
        return this.httpClient.get<AdShortInfoDTO[]>(this.commonApi.adUserFeaturesUrl + "/Advertisments/userAdvertisments", { params: params });
    }

    SaveAdvertisment(advertisment:AdCreateDTO):Observable<AdDto>{
        return this.httpClient.post<AdDto>(this.commonApi.adServiceUrl + "/Insert", advertisment);
    }
}