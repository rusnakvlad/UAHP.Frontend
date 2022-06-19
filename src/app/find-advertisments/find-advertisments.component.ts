import { Component, OnInit } from '@angular/core';
import { AdShortInfoDTO } from './Models/AdShortInfo.model';
import { FindAdService } from './services/FindAd.service';

@Component({
  selector: 'app-find-advertisments',
  templateUrl: './find-advertisments.component.html',
  styleUrls: ['./find-advertisments.component.scss']
})
export class FindAdvertismentsComponent implements OnInit {

  advertisments: AdShortInfoDTO[];

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private findAdService: FindAdService) { }

  ngOnInit(): void {
  }

  Search() {

  }

  GetAllAds() {
    this.findAdService.GetAllAdvertisments().subscribe(advertisments => {
      console.log(advertisments);
      this.advertisments = advertisments;
    })
  }
}
