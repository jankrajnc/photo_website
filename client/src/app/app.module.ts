/* ===== Angular imports ===== */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
/* ===== External libraries ===== */
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';

/* ===== Pages and components ===== */
import { AppComponent } from './app.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { UserTableComponent } from '../pages/user-table/user-table.component';
import { AlbumTableComponent } from '../pages/album-table/album-table.component';
import { PhotoTableComponent } from '../pages/photo-table/photo-table.component';
import { ImageModalComponent } from '../components/modal-windows/image-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    UserTableComponent,
    AlbumTableComponent,
    PhotoTableComponent,
    ImageModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
