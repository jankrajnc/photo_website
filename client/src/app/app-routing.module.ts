import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { UserTableComponent } from '../pages/user-table/user-table.component';
import { AlbumTableComponent } from '../pages/album-table/album-table.component';
import { PhotoTableComponent } from '../pages/photo-table/photo-table.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: UserTableComponent },
      { path: 'user-table', component: UserTableComponent },
      { path: 'album-table/:idUser', component: AlbumTableComponent },
      { path: 'photo-table/:idAlbum', component: PhotoTableComponent }
    ]
  },

  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
