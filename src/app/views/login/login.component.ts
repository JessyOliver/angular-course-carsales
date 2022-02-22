import { Component,  OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/resource/models/RequestLogin';
import { AlertService } from 'src/app/resource/services/alert.service';
import { LoginService } from 'src/app/resource/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public requestLogin!: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

    this.requestLogin =  new RequestLogin();
  }

  doLogin(): void{

    this.loginService.doLogin(this.requestLogin).subscribe(
      (data) => {

          this.alertService.info('Implementando pagina, aguarde!!');
      },
      (httpError) => {

        this.alertService.error(httpError.error.message);
      }
    );

  }

}
