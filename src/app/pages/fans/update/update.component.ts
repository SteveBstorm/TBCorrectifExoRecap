import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { FanModel } from 'src/app/core/models/fan.model';
import { FanService } from 'src/app/core/services/fan.service';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  fg!: FormGroup;

  fan! : FanModel

  constructor(
    private fb: FormBuilder,
    private fanService: FanService,
    private router: Router,
    private toastr: NbToastrService,
    private _ar : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.fan = this._ar.snapshot.data.fan

    this.fg = this.fb.group({
      nom: [this.fan.nom, [
        Validators.required,
        Validators.minLength(2)
      ]],
      dateDeNaissance: [this.fan.dateDeNaissance, [
        Validators.required,
        CustomValidators.moreThan(13)
      ]],
      series: this.fb.array([

      ])
    });
    if(this.fan.series) {
      for(let i = 0; i < this.fan.series.length; i++ ){
        this.addSeries(this.fan.series[i])
      }
    }

    this.fg.get('nom')?.getError('required')
  }

  submit() {
    if(this.fg.valid) {
      this.fanService.updateFan(this._ar.snapshot.params['id'], this.fg.value);
      this.router.navigateByUrl('/fans/list');
      this.toastr.success('le fan est bien enregistré');
    }
  }

  getSeriesArray() : FormArray {
    return this.fg.get('series') as FormArray
  }

  addSeries(value : string = "") {
    this.getSeriesArray().push(new FormControl(value, Validators.required))
  }

  removeSerie(index : number) {
    this.getSeriesArray().removeAt(index)
  }


}
