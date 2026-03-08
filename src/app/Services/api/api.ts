import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../Environment/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAboutInfo(): Observable<any> {
        return this.http.get(`${this.baseUrl}/about`);
    }

    getExperiencesInfo(): Observable<any> {
        return this.http.get(`${this.baseUrl}/experiences`);
    }

    getProjectsInfo(): Observable<any> {
        return this.http.get(`${this.baseUrl}/projects`);
    }

    getHomeInfo(): Observable<any> {
        return this.http.get(`${this.baseUrl}/home`);
    }

    getCertificationsInfo(): Observable<any> {
        return this.http.get(`${this.baseUrl}/certifications`);
    }
}
