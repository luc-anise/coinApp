import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {

  constructor(public assetsService: AssetsService) { }

  ngOnInit(): void {
  }

}
