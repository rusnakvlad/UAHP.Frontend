import { Component, OnInit } from '@angular/core';
import { AdCreateDTO } from '../models/CreateAd.model';
import { AdService } from '../services/advertisment.service';

@Component({
  selector: 'app-create-advertisment',
  templateUrl: './create-advertisment.component.html',
  styleUrls: ['./create-advertisment.component.scss']
})
export class CreateAdvertismentComponent implements OnInit {

  ad:AdCreateDTO;

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ad = new AdCreateDTO();
  }

  Save(){
    this.ad.userId = localStorage.getItem("uahpUserId") as string;
    this.adService.SaveAdvertisment(this.ad).subscribe(ad =>{
      console.log(ad);
    })
  }
}
