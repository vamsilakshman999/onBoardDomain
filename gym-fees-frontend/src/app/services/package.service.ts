import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GymPackage {
  id: number;
  name: string;
  durationMonths: number;
  baseFee: number;
}

@Injectable({ providedIn: 'root' })
export class PackageService {
  private baseUrl = `${environment.apiBaseUrl}/api/packages`;

  constructor(private http: HttpClient) {}

  list(): Observable<GymPackage[]> {
    return this.http.get<GymPackage[]>(this.baseUrl);
  }

  create(pkg: GymPackage): Observable<GymPackage> {
    return this.http.post<GymPackage>(this.baseUrl, pkg);
  }

  update(id: number, pkg: GymPackage): Observable<GymPackage> {
    return this.http.put<GymPackage>(`${this.baseUrl}/${id}`, pkg);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
