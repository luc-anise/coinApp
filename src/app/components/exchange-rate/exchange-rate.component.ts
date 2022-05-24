import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  constructor(public assetsService: AssetsService) { }

  ngOnInit(): void {
  }

}
