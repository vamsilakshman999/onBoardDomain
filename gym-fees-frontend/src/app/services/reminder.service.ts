import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ReminderResponse {
  upcomingDue: string[];
  overdue: string[];
}

@Injectable({ providedIn: 'root' })
export class ReminderService {
  private baseUrl = `${environment.apiBaseUrl}/api/reminders`;

  constructor(private http: HttpClient) {}

  list(): Observable<ReminderResponse> {
    return this.http.get<ReminderResponse>(this.baseUrl);
  }
}
