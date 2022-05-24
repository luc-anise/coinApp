import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  exchangeForm = this.fb.group({
    base: [''],
    quote: [''],
  });

  constructor(public assetsService: AssetsService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  async getQuote() {
   let quote = await this.assetsService.getExchangeRates(this.exchangeForm.value.base, this.exchangeForm.value.quote);
    console.log(quote);
  }

}
