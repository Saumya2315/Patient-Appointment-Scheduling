import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }
  private _postSchedule = "http://localhost:8080/appointments/schedule";
  private _urlgetAllAppointment = "http://localhost:8080/appointments/allAppointments";

  getAllAppointment():Observable<any>{
    return this.http.get<any>(this._urlgetAllAppointment);
  }

  postSchedule(appointment:any):Observable<any>{
    return this.http.post<any>(this._postSchedule,appointment);
  }

}
