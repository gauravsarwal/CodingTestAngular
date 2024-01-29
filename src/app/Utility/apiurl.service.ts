import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIConfigService {
  readonly apiUrl: string = 'https://localhost:7108';
}