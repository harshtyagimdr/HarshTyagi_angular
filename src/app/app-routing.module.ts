import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserDataComponent} from './user-data/user-data.component';

const approute: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDataComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(approute)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
