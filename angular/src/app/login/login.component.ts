import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { OAuth } from './../models/oauth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: '';
  public password: '';
  public authData: OAuth;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  public async login(username, password): Promise<void> {
    try {
      const data = {
        grant_type: 'password',
        client_id: 'ff38edb9-f342-4b61-b5d5-ec7f3bf05b0e',
        client_secret: 'secret',
        username: username,
        password: password
      };
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      const res = await this.authService.login<OAuth>(formData);
      console.log(res);
      this.authData = res;

      localStorage.setItem('access_token', this.authData.access_token);
      localStorage.setItem('refresh_token', this.authData.refresh_token);
      this.router.navigate(['/overview']);

    } catch (error) {
      console.error(error);
    }
  }

}
