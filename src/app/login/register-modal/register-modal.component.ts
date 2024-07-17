import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
})
export class RegisterModalComponent {
  username: string = '';
  password: string = '';

  constructor(public dialogRef: MatDialogRef<RegisterModalComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  register(): void {
    // Add your registration logic here
    this.dialogRef.close({ username: this.username, password: this.password });
  }
}