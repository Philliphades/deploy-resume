import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core' 
import { EducationComponent } from './education.component';
import { EducationRoutes } from './education.routing';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(EducationRoutes),
        FormsModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 300,
            title: "3.00",
          }),
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [EducationComponent]
})

export class EducationModule {}
