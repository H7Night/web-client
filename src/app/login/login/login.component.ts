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

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          this.router.navigate(['/home']); // 根据你的需求修改导航路径
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
