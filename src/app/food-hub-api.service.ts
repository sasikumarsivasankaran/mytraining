import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesMan } from './sales-man';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodHubApiService {
  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  findAllSalesmen(): Observable<SalesMan[]> {
    return this.http.get<SalesMan[]>(this.baseURL + 'salesMen');
  }
}
