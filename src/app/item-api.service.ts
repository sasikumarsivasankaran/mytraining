import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from 'src/app/item';

@Injectable({
  providedIn: 'root'
})
export class ItemAPIService {

  // constructor() { }
  constructor(private http: HttpClient) { }
  baseURL = 'http://localhost:3000/';
  southURL = this.baseURL + 'southIndian';
  headers =  new HttpHeaders().set('content-type', 'application/json');

  findAll(): Observable <Item[]> {

    return this.http.get<Item[]>(this.baseURL + 'southIndian');
  }
  additem(obj: Item): Observable<Item> {
    /*const headers =  new HttpHeaders().set('content-type', 'application/json');
     return this.http.post<Item>(this.baseURL + this.southURL, obj, {headers});*/
    return this.http.post<Item>(this.southURL, obj, {headers: this.headers});
  }

  updateItem(item: Item) {
    const url = this.southURL + '/' + item.id;
    return this.http.put<Item>(url, item, {headers: this.headers});
  }

  removeItem(item: Item) {
    const url = this.southURL + '/' + item.id;
    // this.http.request('delete', url, {body: item, headers: this.headers});
    return this.http.delete(url, {headers: this.headers});
  }
}
