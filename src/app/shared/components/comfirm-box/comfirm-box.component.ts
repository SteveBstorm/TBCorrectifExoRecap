import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-comfirm-box',
  templateUrl: './comfirm-box.component.html',
  styleUrls: ['./comfirm-box.component.scss']
})
export class ComfirmBoxComponent implements OnInit {

  @Input() id! : number

  constructor(
    private dialogRef : NbDialogRef<ComfirmBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  close(value : boolean) {
    this.dialogRef.close(value)
  }

}
