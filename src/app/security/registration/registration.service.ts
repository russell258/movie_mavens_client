import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Registration, RegistrationResponse } from '../registrationmodels';
import { firstValueFrom } from "rxjs";


const URL = 'http://localhost:8080/api/register';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  http = inject(HttpClient);

  register(form: Registration): Promise<RegistrationResponse>{
    return firstValueFrom(
      this.http.post<RegistrationResponse>(URL, form)
    )
  }

}
