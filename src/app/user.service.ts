import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from './user.model';
import { ErrorHandlingService } from './Utility/error.service'; 
import { APIConfigService } from './Utility/apiurl.service'; // Adjust the path accordingly


@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _APIURL: string = 'https://localhost:7108';

  constructor(private http: HttpClient,
     private errorHandlingService: ErrorHandlingService,
     private apiUrlService: APIConfigService
     ) {}

  /** POST: add a new user */
  addUser(model: UserModel): Observable<UserModel> {
    return this.http
      .post<UserModel>(this.apiUrlService.apiUrl + '/user', model)
      .pipe(catchError(this.errorHandlingService.handleError));
  }

}
