import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Subscription {
  id: string;
  memberId: string;
  packageId: number;
  startDate: string;
  endDate: string;
  agreedFee: number;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class SubscriptionService {
  private baseUrl = `${environment.apiBaseUrl}/api/subscriptions`;

  constructor(private http: HttpClient) {}

  list(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.baseUrl);
  }

  create(sub: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(this.baseUrl, sub);
  }

  update(id: string, sub: Subscription): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.baseUrl}/${id}`, sub);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateStatus(id: string, status: string): Observable<Subscription> {
    return this.http.patch<Subscription>(`${this.baseUrl}/${id}/status`, { status });
  }
}
