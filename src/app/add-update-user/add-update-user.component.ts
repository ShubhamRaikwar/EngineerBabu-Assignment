import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
	selector: 'app-add-update-user',
	templateUrl: './add-update-user.component.html',
	styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {

	constructor(
		@Inject(MAT_DIALOG_DATA) public data,
		private formBuilder: FormBuilder,
		private dialogRef: MatDialogRef<AddUpdateUserComponent>

	) { }




	addForm: FormGroup;

	ngOnInit() {
		console.log(this.data)
		this.addForm = this.formBuilder.group({
			id: Math.floor(Math.random() * Math.floor(1000)),
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.compose([Validators.required, this.emailValidator])],
			mobile: ['', Validators.required],
			age: ['', Validators.required],
			salary: ['', Validators.required]
		});
		if (this.data) {
			this.addForm.patchValue(this.data);
		}

	}

	onSubmit() {
		console.log(this.addForm.value);
		if (this.addForm.valid) {
			this.dialogRef.close({ isEdit: this.data ? true : false, ...this.addForm.value });
		}
	}

	emailValidator(control: FormControl) {
		const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		if (control.value) {
			const matches = control.value.match(regEx);
			return matches ? null : { 'invalidEmail': true };
		} else {
			return null;
		}
	}

}
