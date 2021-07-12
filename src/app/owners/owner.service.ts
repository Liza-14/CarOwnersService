import { Injectable } from '@angular/core';
import { Owner } from './owner.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private ownersUrl = 'api/owners/';
  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {

    console.debug("getOwners method");

    return this.http.get<Owner[]>(this.ownersUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createOwner(owner: Owner): Observable<Owner> {
    owner.id!= null;
    return this.http.post<Owner>(this.ownersUrl, owner).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editOwner(owner: Owner): Observable<any> {
    return this.http.put(this.ownersUrl + owner.id, owner);
  }

  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.ownersUrl + id);
  }
}