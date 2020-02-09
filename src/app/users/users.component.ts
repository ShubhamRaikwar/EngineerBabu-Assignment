import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AddUpdateUserComponent } from '../add-update-user/add-update-user.component';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

	users: User[] = [
		{
			"id": 101,
			"firstName": "Shubham",
			"lastName": "Raikwar",
			"email": "shubham.raikwar@gmail.com",
			"mobile": 1234567890,
			"salary": 123456,
			"age": 30
		},
		{
			"id": 102,
			"firstName": "Nitin",
			"lastName": "Kumar",
			"email": "nitin@gmail.com",
			"mobile": 1547895478,
			"salary": 25874,
			"age": 20
		}, {
			"id": 103,
			"firstName": "Nilesh",
			"lastName": "Rathore",
			"email": "nilesh@gmail.com",
			"mobile": 1265478654,
			"salary": 52154,
			"age": 18
		}, {
			"id": 104,
			"firstName": "Krishna",
			"lastName": "Kumar",
			"email": "krishna@gmail.com",
			"mobile": 1233697895,
			"salary": 5454554,
			"age": 18
		}
	];

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit() {

	}

	deleteUser(userName: string, index: number): void {
		if (confirm("Are you sure want to delete user - " + userName + '?')) {
			this.users.splice(index, 1);
		}
	}

	addUpdateUser(type: string, userData?: User): void {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		if (type == 'update'){
			dialogConfig.data = userData;
		}else{
			dialogConfig.data = null;
		}
			
		const dialogRef = this.dialog.open(AddUpdateUserComponent, dialogConfig);
		dialogRef.afterClosed().subscribe(
			data => {
				if (data) {
					if (data.isEdit) {
						const idIndex = this.users.findIndex((user) => user.id == data.id);
						if (idIndex != -1) {
							this.users[idIndex] = data
						}
					} else {
						this.users.push(data);
					}
				}
			}
		);
	};
}
