import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './components/projects/projects.component'
import { ProjectsShowComponent } from './components/projects-show/projects-show.component'
import { SignComponent } from './components/sign/sign.component'

const routes: Routes = [
  {
    path: 'sign',
    component: SignComponent
  },
  {
    path: 'projects/:id',
    component: ProjectsShowComponent
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
