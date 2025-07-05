import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

    list() {
        return this.http.get<Member[]>(this.baseUrl);
    }

    get(id: string) {
        return this.http.get<Member>(`${this.baseUrl}/${id}`);
    }

    create(member: Partial<Member>) {
        return this.http.post<Member>(this.baseUrl, member);
    }

    update(id: string, member: Partial<Member>) {
        return this.http.put<Member>(`${this.baseUrl}/${id}`, member);
    }

    delete(id: string) {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
