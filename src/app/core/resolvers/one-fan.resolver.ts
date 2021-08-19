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
export class OneFanResolver implements Resolve<FanModel> {
  
  constructor(private _fanService : FanService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): FanModel {
    return this._fanService.getOneFan(route.params['id'])
  }
}
