import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SignComponent } from './components/sign/sign.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ProjectsShowComponent } from './components/projects-show/projects-show.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { HumanizePipe } from 'app/pipes/humanize.pipe'

import { Angular2TokenService } from 'angular2-token'
import { ProjectService } from './services/projects.service';
import {TaskService} from './services/tasks.service';
import { ProjectInfoFormComponent } from './components/project-info-form/project-info-form.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ToolbarComponent,
    SigninFormComponent,
    SignupFormComponent,
    SignComponent,
    ProjectsShowComponent,
    ProjectInfoComponent,
    HumanizePipe,
    ProjectInfoFormComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [ProjectService, Angular2TokenService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
