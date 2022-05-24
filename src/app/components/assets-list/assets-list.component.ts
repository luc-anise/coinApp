import { Component, OnInit } from '@angular/core';
import { Asset } from 'models/Asset';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss']
})
export class AssetsListComponent implements OnInit {

  assets: Asset[] = [];

  constructor(private assetsService: AssetsService) { }

  async ngOnInit(): Promise<void> {
    this.assets = await this.assetsService.getAssets();
  }


}
