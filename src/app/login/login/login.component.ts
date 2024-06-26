import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.status === 200) {
          // 保存 token 或其他相关信息
          localStorage.setItem('token', response.token);
          // 跳转到 Dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.errorMessage = 'Login failed. Please try again.';
      }
    );
  }
}
