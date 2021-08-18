import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { FanModel } from 'src/app/core/models/fan.model';
import { FanService } from 'src/app/core/services/fan.service';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  fg!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fanService: FanService,
    private router: Router,
    private toastr: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      nom: [null, [
        Validators.required,
        Validators.minLength(2)
      ]],
      dateDeNaissance: [null, [
        Validators.required,
        CustomValidators.moreThan(13)
      ]],
      series: this.fb.array([

      ])
    });

    this.fg.get('nom')?.getError('required')
  }

  submit() {
    if(this.fg.valid) {
      this.fanService.add(this.fg.value);
      this.router.navigateByUrl('/fans/list');
      this.toastr.success('le fan est bien enregistré');
    }
  }

}
