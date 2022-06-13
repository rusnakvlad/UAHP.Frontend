import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertismentFullInfoComponent } from './advertisments-cards/advertisment-full-info/advertisment-full-info.component';
import { CreateAdvertismentComponent } from './create-advertisment/create-advertisment.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FindAdvertismentsComponent } from './find-advertisments/find-advertisments.component';
import { ForComparasionComponent } from './for-comparasion/for-comparasion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAdvertismentsComponent } from './my-advertisments/my-advertisments.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'advertisment',children:[
    {path:'favorites',component:FavoritesComponent},
    {path:'myadvertisments', component:MyAdvertismentsComponent},
    {path:'comparasion',component:ForComparasionComponent},
    {path:'create',component:CreateAdvertismentComponent},
    {path:'search',component:FindAdvertismentsComponent},
    {path:'allinfo',component:AdvertismentFullInfoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
