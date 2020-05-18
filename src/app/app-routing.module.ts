import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FavoritesComponent} from './components/favorites/favorites.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
