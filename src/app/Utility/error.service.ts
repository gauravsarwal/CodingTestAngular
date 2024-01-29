import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  handleError(error: any) {
    let errorMessage = '';
    if (error.status === 0) {
      // network error
      errorMessage = 'Error: Could not connect to server. Please check the APIUrl and make sure API are running.';
    } else {
      // server-side error
      errorMessage = `Error: ${error.error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
