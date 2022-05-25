import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss'],
})
export class ExchangeRateComponent implements OnInit {
  loading = false;
  rate: number | null = 0;
  exchangeForm = this.fb.group({
    base: [''],
    quote: [''],
  });

  constructor(public assetsService: AssetsService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  async getQuote() {
    try {
      this.loading = true;
      let quote = await this.assetsService.getExchangeRates(
        this.exchangeForm.value.base,
        this.exchangeForm.value.quote
      );
      this.rate = quote.rate;
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.loading = false;
    }
  }
}
