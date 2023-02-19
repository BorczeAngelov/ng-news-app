import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-runtime-api-key',
  templateUrl: './runtime-api-key.component.html',
  styleUrls: ['./runtime-api-key.component.scss']
})
export class RuntimeApiKeyComponent implements OnInit {

  formControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(private newsApi: NewsApiService) {

  }

  ngOnInit(): void {

    this.formControl.valueChanges
      .subscribe(value => {
        console.log("Api Key value changed. New value = " + value);

        if (value) {
          this.newsApi.runtime_api_key = value
        }
      });
  }
}
