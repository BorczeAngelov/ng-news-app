import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NewsApiService } from './service/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'ng-news-app';

  public selectedNewsChannel: string = "Top 10 Trending News!";
  public sources: any = [];
  public articles: any = [];

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private cd: ChangeDetectorRef,
    private newsApi: NewsApiService) { }

  ngOnInit(): void {

  }

  initData() {
    console.log(this.newsApi.runtime_api_key);


    this.newsApi.initArticles()
      .subscribe((response: any) => {

        console.log(response);
        this.articles = response.articles;
      });

    this.newsApi.initSources()
      .subscribe((response: any) => {

        console.log(response);
        this.sources = response.sources;
      });
  }


  ngAfterViewInit(): void {
    this.sideNav.opened = true;

    this.observer.observe(['(max-width:800px)']) // open/close sideNav based on screen size
      .subscribe(response => {
        if (response?.matches) {
          console.log("screen width is lower than 800px");

          this.sideNav.mode = "over";
          this.sideNav.close();
        }
        else {
          this.sideNav.mode = "side";
          this.sideNav.open();
        }
      });

    this.cd.detectChanges();
  }

  searchSource(source: any) {
    console.log(source);

    this.newsApi.getArticlesByID(source.id)
      .subscribe((response: any) => {

        console.log(response);
        this.selectedNewsChannel = source.name;
        this.articles = response.articles;

      })
  }

}
