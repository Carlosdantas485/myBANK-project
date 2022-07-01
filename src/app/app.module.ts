import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { NavComponent } from './componentes/template/nav/nav.component';
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from'@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { CreateUserComponent } from './views/user/create-user/create-user.component';
import { ListUsersComponent } from './views/user/list-users/list-users.component';
import { UpdateUserComponent } from './views/user/update-user/update-user.component';
import { LoginComponent } from './views/user/login/login.component';
import { ListDepositComponent } from './views/deposit/list-deposit/list-deposit.component';
import { DepositComponent } from './views/deposit/deposit/deposit.component';

import { MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CreateUserComponent,
    ListUsersComponent,
    UpdateUserComponent,
    LoginComponent,
    ListDepositComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatBadgeModule,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }