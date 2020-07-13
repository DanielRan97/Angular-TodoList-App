import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${environment.MissionsApi}/${id}`)
  }

  getAll(): Observable<Mission[]> {
    return this.http.get<Mission[]>(environment.MissionsApi);
  }

  addMission(mission: Mission) {
    return this.http.post(environment.MissionsApi, mission)
  }

  editMission(newParams,id) {
    return this.http.put(`${environment.MissionsApi}${id}`, newParams)
  }

  deleteMission(id) {
    return this.http.delete(`${environment.MissionsApi}` + id)
  }

}
