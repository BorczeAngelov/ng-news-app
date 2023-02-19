import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public runtime_api_key = "";
  
  constructor(private httpClient: HttpClient) { }

  initSources() {
    return this.httpClient.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.runtime_api_key);
  }

  initArticles() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.runtime_api_key);
  }

  getArticlesByID(source: String) {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.runtime_api_key);
  }
}
