import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FanModel } from 'src/app/core/models/fan.model';
import { FanService } from 'src/app/core/services/fan.service';
import { ComfirmBoxComponent } from 'src/app/shared/components/comfirm-box/comfirm-box.component';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  fans!: FanModel[];

  constructor(
    private fanService: FanService,
    private route: ActivatedRoute,
    private dialogService : NbDialogService
  ) { }

  ngOnInit(): void {
    this.fans = this.route.snapshot.data.fans;
  }

  delete(index : number) {
    let box = this.dialogService.open(ComfirmBoxComponent, {
      context : {id : this.route.snapshot.params['id']},
      closeOnBackdropClick : false
    })

    box.onClose.subscribe((value : boolean) => {
      if(value) {
        this.fanService.removeFan(this.route.snapshot.params['id'])
        this.fans = this.fanService.getAll()
      }
    })
  }

}
