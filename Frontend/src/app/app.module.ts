import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RespositoriesComponent } from './pages/respositories/respositories.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RandomcolorModule} from 'angular-randomcolor';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  NgxPaginationModule,
  RandomcolorModule,
  MatSnackBarModule
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RespositoriesComponent,
    UsersComponent,
    NotFoundComponent,
    SearchBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
