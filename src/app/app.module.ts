import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './features/login/login.component';
import {RegisterComponent} from './features/register/register.component';
import {HomeComponent} from './features/home/home.component';
import {ProfileComponent} from './features/profile/profile.component';
import {BoardAdminComponent} from './features/board-admin/board-admin.component';
import {BoardUserComponent} from './features/board-user/board-user.component';
import {BoardModeratorComponent} from './features/board-moderator/board-moderator.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
