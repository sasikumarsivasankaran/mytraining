import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

message: BehaviorSubject<string> = new BehaviorSubject('');
currentMessage = this.message.asObservable();

changeMessage(msg: string) {
  this.message.next(msg);

}
  constructor() { }
}
