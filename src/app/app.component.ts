import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-news-app';


  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cd : ChangeDetectorRef) { }


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

}
