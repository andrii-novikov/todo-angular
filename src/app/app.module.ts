import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DndModule} from 'ng2-dnd'

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SignComponent } from './components/sign/sign.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ProjectsShowComponent } from './components/projects-show/projects-show.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { HumanizePipe } from 'app/pipes/humanize/humanize.pipe'
import { DeadlinePipe } from './pipes/deadline/deadline.pipe'

import { Angular2TokenService } from 'angular2-token'
import { ProjectService } from './services/projects.service';
import {TaskService} from './services/tasks.service';
import { ProjectInfoFormComponent } from './components/project-info-form/project-info-form.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { ProjectTasksListComponent } from './components/project-tasks-list/project-tasks-list.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';


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
    ProjectInfoFormComponent,
    ProjectEditComponent,
    HumanizePipe,
    DeadlinePipe,
    ProjectTasksListComponent,
    DatepickerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [ProjectService, Angular2TokenService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
