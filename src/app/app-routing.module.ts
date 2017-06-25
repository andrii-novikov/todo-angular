import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component'
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { SignComponent } from './sign/sign.component'

const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
