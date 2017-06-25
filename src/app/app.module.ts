import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignComponent } from './sign/sign.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

import { Angular2TokenService } from 'angular2-token'
import { ProjectService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ToolbarComponent,
    SigninFormComponent,
    SignupFormComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [ProjectService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
