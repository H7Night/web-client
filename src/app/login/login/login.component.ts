import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { error, log } from 'console';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  hide = signal(true);

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.status === 200) {
          // 保存 token 或其他相关信息
          localStorage.setItem('token', response.token);
          // 跳转到 Dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      },
    );
  }

  // 显示密码
  showPassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  // 注册模态框
  openRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log('The dialog was closed', result);
        // Handle registration result here
      }
    });
  }
}
