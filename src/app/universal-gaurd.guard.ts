import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGaurdGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | 
    state: RouterStateSnapshot): boolean {
      const status = sessionStorage.getItem('userLogged');
      let result = false;

      if(status === 'true') {
        result = true;
      }
    return result;
  }
}
