import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		AddUpdateUserComponent,
		OnlyNumberDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatDialogModule,
		BrowserAnimationsModule
	],
	providers: [],
	entryComponents: [
		AddUpdateUserComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
