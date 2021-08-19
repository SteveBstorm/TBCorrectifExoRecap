import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FanModel } from 'src/app/core/models/fan.model';
import { FanService } from 'src/app/core/services/fan.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  fan! : FanModel

  constructor(
    private _fanService : FanService,
    private _ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fan = this._ar.snapshot.data.fan
  }

}
