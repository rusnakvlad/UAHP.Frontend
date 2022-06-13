import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModules } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNameComponent } from './page-name/page-name.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAdvertismentsComponent } from './my-advertisments/my-advertisments.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ForComparasionComponent } from './for-comparasion/for-comparasion.component';
import { FindAdvertismentsComponent } from './find-advertisments/find-advertisments.component';
import { AdvertismentFullInfoComponent } from './advertisments-cards/advertisment-full-info/advertisment-full-info.component';
import { AdvertismentComparasionInfoComponent } from './for-comparasion/advertisment-comparasion-info/advertisment-comparasion-info.component';
import { CreateAdvertismentComponent } from './create-advertisment/create-advertisment.component';
import { ChipsComponent } from './helpers/chips/chips.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdvertismentShortInfoComponent } from './advertisments-cards/advertisment-short-info/advertisment-short-info.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CreateCommentComponent } from './comments/create-comment/create-comment.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistrationComponent,
    PageNameComponent,
    LoginComponent,
    ProfileComponent,
    MyAdvertismentsComponent,
    FavoritesComponent,
    ForComparasionComponent,
    FindAdvertismentsComponent,
    AdvertismentFullInfoComponent,
    AdvertismentComparasionInfoComponent,
    CreateAdvertismentComponent,
    ChipsComponent,
    AdvertismentShortInfoComponent,
    FilterPanelComponent,
    CommentsComponent,
    CommentComponent,
    CreateCommentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModules,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
