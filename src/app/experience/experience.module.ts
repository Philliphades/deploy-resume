import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExperienceComponent } from './experience.component';
import { ExperienceRoutes } from './experience.routing';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExperienceRoutes),
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
    declarations: [ExperienceComponent]
})

export class ExperienceModule {}
