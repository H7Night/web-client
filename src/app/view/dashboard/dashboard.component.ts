import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { resourceUsage } from 'process';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {
  data: User[] = [];
  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUserList();
  }
  // 获取列表
  getUserList(): void {
    const pageSize = 20;
    const pageNum = 1;
    const userName = '';

    this.userService
      .getUserPage(userName, pageSize, pageNum)
      .subscribe((response) => {
        this.data = response.data;
      });
  }
  // 新增用户
  onAddUser() {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: { user: new User(0, '', '', ''), isEdit: false },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.createUser(result).subscribe(() => {
          this.getUserList();
        });
      }
    });
  }
  onEditUser(user: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: { user: { ...user }, isEdit: true },
    });
    console.log(user);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.updateUser(result.id, result).subscribe(() => {
          this.getUserList();
        });
      }
    });
  }
  onDeleteUser(id: number): void {
    if (id && confirm('sure to delete')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.getUserList();
      });
    } else {
      console.log("error");
    }
  }
}
