import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin copy';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   loginresponse?: ResponseLogin;

   clear(): void{
      this.loginresponse = undefined;
   }

  isAuthenticated():boolean{
    return Boolean(this.loginresponse?.jwt);
  }

}
