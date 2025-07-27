import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackageService, GymPackage } from '../services/package.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PackageDialogComponent } from './package-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-packages',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    PackageDialogComponent
  ],
  templateUrl: './packages.component.html'
})
export class PackagesComponent implements OnInit {
  packages: GymPackage[] = [];
  loading = false;

  constructor(private packageService: PackageService,
              private dialog: MatDialog,
              private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.packageService.list().subscribe({
      next: d => this.packages = d,
      error: () => this.snack.open('Failed to load packages', 'Close'),
      complete: () => this.loading = false
    });
  }

  add() {
    const ref = this.dialog.open(PackageDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.packageService.create(result).subscribe({
          next: () => { this.snack.open('Saved', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Save failed', 'Close')
        });
      }
    });
  }

  edit(pkg: GymPackage) {
    const ref = this.dialog.open(PackageDialogComponent, { data: pkg });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.packageService.update(pkg.id, result).subscribe({
          next: () => { this.snack.open('Updated', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Update failed', 'Close')
        });
      }
    });
  }

  remove(pkg: GymPackage) {
    if (confirm('Delete package?')) {
      this.packageService.delete(pkg.id).subscribe({
        next: () => { this.snack.open('Deleted', 'Close', {duration:2000}); this.load(); },
        error: () => this.snack.open('Delete failed', 'Close')
      });
    }
  }
}
