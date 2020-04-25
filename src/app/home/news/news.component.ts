import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public listNews: any;
  public loadNews: boolean;
  constructor(private newServices: NewsService) {
    this.loadNews = true;
   }

  private getNews() {
    this.newServices.news().subscribe((response: any) => {
      this.loadNews = false;
      this.listNews = response;
    })
  }

  ngOnInit(): void {
    this.getNews();
  }

}
