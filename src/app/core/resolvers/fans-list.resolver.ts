import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FanModel } from '../models/fan.model';
import { FanService } from '../services/fan.service';

@Injectable({
  providedIn: 'root'
})
export class FansListResolver implements Resolve<FanModel[]> {

  constructor(
    private fanService: FanService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FanModel[]> {
    return of(this.fanService.getAll());
  }
}
