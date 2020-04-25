import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private URI_NEWS: string;

  constructor(private http: HttpClient) { 
    this.URI_NEWS = environment.news;
  }

  public news() {
    return this.http.get(this.URI_NEWS);
  }
}
