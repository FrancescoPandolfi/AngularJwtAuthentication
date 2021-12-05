import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {RegisterComponent} from "./features/register/register.component";
import {BoardUserComponent} from "./features/board-user/board-user.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {BoardModeratorComponent} from "./features/board-moderator/board-moderator.component";
import {BoardAdminComponent} from "./features/board-admin/board-admin.component";
import {LoginComponent} from "./features/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: BoardUserComponent},
  {path: 'mod', component: BoardModeratorComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
