import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

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

	constructor() { }

	ngOnInit() {

	}

	deleteUser(userName: string, index: number): void {
		if (confirm("Are you sure want to delete user - " + userName +'?')) {
			this.users.splice(index, 1);
		}
	}
}
