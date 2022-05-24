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
  constructor(private http: HttpClient) {
    this.getAssets();
  }
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
    let res = this.http.get<Asset>(this.baseURL + '/v1/assets/' + id, { headers });
    return await lastValueFrom(res);
  }
}
