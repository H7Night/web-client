import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.less',
})
export class UserDialogComponent implements OnInit {
  hide = signal(true);

  selected: any;
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User; isEdit: boolean }
  ) {}
  ngOnInit(): void {
    if (this.data.isEdit && this.data.user.role) {
      this.selected = this.data.user.role === '1' ? 'admin' : 'user';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.dialogRef.close(this.data.user);
  }

  //显示密码
  showPassword(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
