import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Asset } from 'models/Asset';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  readonly baseURL = 'https://rest.coinapi.io';
  detailedAsset: Asset | null = null;

  constructor(private http: HttpClient) {}
  // get assets from API via GET request
  async getAssets() {
    // Auth tokens should be stored as ENV variables
    const headers = new HttpHeaders({
      'X-CoinAPI-Key': 'D1913757-E994-4F13-A28B-4589FEF2DBD2',
    });
    let res = this.http.get<Asset[]>(this.baseURL + '/v1/assets', { headers });
    return await lastValueFrom(res);
  }

  // get asset from API via GET request
  async getAsset(id: string) {
    // Auth tokens should be stored as ENV variables
    const headers = new HttpHeaders({
      'X-CoinAPI-Key': 'D1913757-E994-4F13-A28B-4589FEF2DBD2',
    });
    let res = this.http.get<Asset>(this.baseURL + '/v1/assets/' + id, {
      headers,
    });
    return await lastValueFrom(res);
  }

  // get filtrerd asset from API via GET request
  async getFilteredAssets(filter: string) {
    // Auth tokens should be stored as ENV variables
    const headers = new HttpHeaders({
      'X-CoinAPI-Key': 'D1913757-E994-4F13-A28B-4589FEF2DBD2',
    });
    let res = this.http.get<Asset[]>(
      this.baseURL + '/v1/assets?filter_asset_id=' + filter,
      { headers }
    );
    return await lastValueFrom(res);
  }

  // get exchange rates from API via GET request GET /v1/exchangerate/{asset_id_base}/{asset_id_quote
  async getExchangeRates(base: string, quote: string) {
    // Auth tokens should be stored as ENV variables
    const headers = new HttpHeaders({
      'X-CoinAPI-Key': 'D1913757-E994-4F13-A28B-4589FEF2DBD2',
    });
    let res = this.http.get<Asset[]>(
      this.baseURL + '/v1/exchangerate/' + base + '/' + quote,
      { headers }
    );
    return await lastValueFrom(res);
  }

  async setDetailedAsset(asset: Asset) {
    this.detailedAsset = await this.getAsset(asset.asset_id);
  }
}
