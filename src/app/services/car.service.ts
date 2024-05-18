import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { Car } from "../interfaces/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:3301';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/vehiculos`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
      .pipe(map((response: any) => response.data));
  }

  addCar(carData: any): Observable<Car[]> {
    return this.http.post<Car[]>(`${this.baseUrl}/vehiculos`, carData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
      .pipe(map((response: any) => response.data));
  }

  updateCar(id: number, carData: any) {
    return this.http.put<Car[]>(`${this.baseUrl}/vehiculos/${id}`, carData)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error); // Return a new Observable with the error
        }))
      .pipe(map((response: any) => response.data));
  }

  deleteCar(id: number) {
    return this.http.delete<Car[]>(`${this.baseUrl}/vehiculos/${id}`)
      .pipe(map((response: any) => response.data));
  }
}