import { Component, OnInit } from '@angular/core';
import { AdShortInfoDTO } from '../models/AdShortInfo.model';
import { AdService } from '../services/advertisment.service';

@Component({
  selector: 'app-my-advertisments',
  templateUrl: './my-advertisments.component.html',
  styleUrls: ['./my-advertisments.component.scss']
})
export class MyAdvertismentsComponent implements OnInit {

  advertisments: AdShortInfoDTO[];
  
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.adService.GetAllUserAdvertisments().subscribe(advertisments => {
      console.log(advertisments);
      this.advertisments = advertisments;
    });
  }

}
