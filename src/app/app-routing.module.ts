import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
