import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { ParticularUserComponent } from './user-list/particular-user/particular-user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user-list/user.service';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDataComponent,
    ParticularUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
