import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { DetailedContentComponent } from './detailed-content/detailed-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "content",
    component: ContentListComponent,
  },
  {
    path: "content/:id", 
    component: DetailedContentComponent,
  },
  {
    path: '**', 
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
