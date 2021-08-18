import { Injectable } from '@angular/core';
import { FanModel } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fans: FanModel[] = [];

  constructor() { }

  getAll() {
    return this.fans;
  }

  add(newFan: FanModel) {
    this.fans.push(newFan);
  }

  removeFan(index: number) {
    this.fans.splice(index, 1);
  }

  updateFan(index: number, newFan: FanModel) {
    let oldFan = this.fans[index];
    // mapping d'un object vers un autre
    Object.assign(oldFan, newFan);
    //this.fans[index] = { ... oldFan, ...newFan }
  }

  getOneFan(index: number) {
    return this.fans[index];
  }
}
