import { Component, OnInit } from '@angular/core';
import { PackageService, GymPackage } from '../services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html'
})
export class PackagesComponent implements OnInit {
  packages: GymPackage[] = [];

  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.packageService.list().subscribe(data => this.packages = data);
  }
}
