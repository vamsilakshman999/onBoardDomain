import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { GymPackage } from '../services/package.service';

@Component({
  selector: 'app-package-dialog',
  templateUrl: './package-dialog.component.html'
})
export class PackageDialogComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    durationMonths: [1, Validators.required],
    baseFee: [0, Validators.required]
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<PackageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GymPackage | null) {
    if (data) {
      this.form.patchValue(data);
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }
}
