import { Component, Input, OnInit } from '@angular/core';
import { AdShortInfoDTO } from 'src/app/models/AdShortInfo.model';

@Component({
  selector: 'app-advertisment-short-info',
  templateUrl: './advertisment-short-info.component.html',
  styleUrls: ['./advertisment-short-info.component.scss']
})
export class AdvertismentShortInfoComponent implements OnInit {

  @Input() advertisment: AdShortInfoDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
