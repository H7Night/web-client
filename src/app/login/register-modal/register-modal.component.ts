import { Component } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
})
export class RegisterModalComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  register(): void {
    // Add your registration logic here
    this.dialogRef.close({ username: this.username, password: this.password });
  }
}