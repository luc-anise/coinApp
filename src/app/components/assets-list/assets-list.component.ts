import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Asset } from 'models/Asset';
import { debounceTime } from 'rxjs/operators';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.scss'],
})
export class AssetsListComponent implements OnInit {
  assets: Asset[] = [];
  filteredAssets: Asset[] = [];
  searchInput: FormControl = new FormControl('', []);
  loading = false;
  constructor(private assetsService: AssetsService) {}

  ngOnInit(): void {
    this.setup();
  }

  private async setup() {
    this.loading = true;
    this.assets = await this.assetsService.getAssets();
    this.filteredAssets = this.assets;
    this.loading = false;
    this.monitorSearchInput();
  }

  monitorSearchInput() {
    this.searchInput.valueChanges.subscribe((searchString) => {
      if (searchString === '') {
        this.filteredAssets = this.assets;
      } else {
        this.loading = true;
        this.filteredAssets = this.assets.filter((asset) => {
          return asset.name.toLowerCase().includes(searchString.toLowerCase());
        });
        this.loading = false;
      }

      console.log(searchString);
    });
  }

  async filterAssets(searchString: string) {
    this.filteredAssets = await this.assetsService.getFilteredAssets(
      searchString
    );
  }

  clickedAsset(asset: Asset) {
    this.assetsService.setDetailedAsset(asset);
  }
}
