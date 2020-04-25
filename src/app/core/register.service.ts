import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private URI_REGISTER: string;
  private URI_PROGRAM: string;

  constructor(private http: HttpClient) { 
    this.URI_REGISTER = environment.register;
    this.URI_PROGRAM = environment.programs;
  }

  public register(payload: any) {
    return this.http.post(this.URI_REGISTER, payload);
  }

  public getPrograms() {
    return this.http.get(this.URI_PROGRAM);
  }
}
