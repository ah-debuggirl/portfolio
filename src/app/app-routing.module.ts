import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes = [
  {path: ''
  {path: 'gallery', component: GalleryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
