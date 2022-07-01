import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ListUsersComponent } from './views/user/list-users/list-users.component';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { UpdateUserComponent } from './views/user/update-user/update-user.component';
import { LoginComponent } from './views/user/login/login.component';
import { ListDepositComponent } from './views/deposit/list-deposit/list-deposit.component';
import { DepositComponent } from './views/deposit/deposit/deposit.component';
const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"users",
    component: ListUsersComponent
  },
  {
    path:"users/create",
    component: CreateUserComponent
  },
  {
    path:"users/update",
    component: UpdateUserComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"deposits/list",
    component: ListDepositComponent
  },
  {
    path:"deposit",
    component: DepositComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
