import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class CommonApiService {
    public readonly rootUrl = "https://localhost:7086/";
    public readonly userServiceUrl = this.rootUrl + "User";
    public readonly adServiceUrl = this.rootUrl + "Advertisments";
    public readonly adUserFeaturesUrl = this.rootUrl + "AdUserFeatures";
}