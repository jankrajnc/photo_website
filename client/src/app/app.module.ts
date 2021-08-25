import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { UserTableComponent } from '../pages/user-table/user-table.component';
import { AlbumTableComponent } from '../pages/album-table/album-table.component';
import { PhotoTableComponent } from '../pages/photo-table/photo-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UserTableComponent,
    AlbumTableComponent,
    PhotoTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
