import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getAboutInfo(): Observable<any> {
        // Fallback to local data if dummy API URL is set
        if (this.baseUrl.includes('your-api-url.com')) {
            return of({ '-local': PORTFOLIO_DATA.profile });
        }
        return this.http.get(`${this.baseUrl}/about.json`);
    }

    getExperiencesInfo(): Observable<any> {
        if (this.baseUrl.includes('your-api-url.com')) {
            return of(PORTFOLIO_DATA.experiences);
        }
        return this.http.get(`${this.baseUrl}/experiences.json`);
    }

    getProjectsInfo(): Observable<any> {
        if (this.baseUrl.includes('your-api-url.com')) {
            return of(PORTFOLIO_DATA.projects);
        }
        return this.http.get(`${this.baseUrl}/projects.json`);
    }

    getHomeInfo(): Observable<any> {
        if (this.baseUrl.includes('your-api-url.com')) {
            return of(PORTFOLIO_DATA.heroData);
        }
        return this.http.get(`${this.baseUrl}/home.json`);
    }

    getCertificationsInfo(): Observable<any> {
        if (this.baseUrl.includes('your-api-url.com')) {
            return of(PORTFOLIO_DATA.certifications);
        }
        return this.http.get(`${this.baseUrl}/certifications.json`);
    }
}

