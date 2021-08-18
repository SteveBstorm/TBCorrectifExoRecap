import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FanModel } from 'src/app/core/models/fan.model';
import { FanService } from 'src/app/core/services/fan.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fans!: FanModel[];

  constructor(
    private fanService: FanService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fans = this.route.snapshot.data.fans;
  }

}
