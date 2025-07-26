import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Member {
  id: string;
  name: string;
  email: string;
  mobile: string;
}

@Injectable({ providedIn: 'root' })
export class MemberService {
  private baseUrl = `${environment.apiBaseUrl}/api/members`;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl);
  }
}
