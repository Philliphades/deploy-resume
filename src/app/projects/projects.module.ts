import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routing';


// import { WebsiteComponent } from './website/website.component';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        RouterModule.forChild(ProjectsRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        ProjectsComponent
    ]
})

export class ProjectsModule {}
