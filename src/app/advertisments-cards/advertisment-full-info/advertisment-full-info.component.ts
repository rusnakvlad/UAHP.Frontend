import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdDto } from 'src/app/models/AdDto.model';
import { AdFullInfoDto } from 'src/app/models/AdFullInfoDto.model';
import { AdService } from 'src/app/services/advertisment.service';

@Component({
  selector: 'app-advertisment-full-info',
  templateUrl: './advertisment-full-info.component.html',
  styleUrls: ['./advertisment-full-info.component.scss']
})
export class AdvertismentFullInfoComponent implements OnInit {

  @Input('advertisment') ad:AdFullInfoDto = new AdFullInfoDto();

  constructor(private adService:AdService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const adId = +this.route.snapshot.queryParams["id"];
    this.adService.GetAdvertismentById(adId).subscribe(ad => {
      console.log(ad);
      this.ad = ad;
    })
  }

}
