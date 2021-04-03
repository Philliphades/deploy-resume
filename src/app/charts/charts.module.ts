import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core' 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChartsComponent } from './charts.component';
import { ChartsRoutes } from './charts.routing';
import { HomepageComponent } from './homepage/homepage.component';
// import { BrowserModule } from '@angular/platform-browser';
// import {RoundProgressModule} from 'angular-svg-round-progressbar';
@NgModule({
    imports: [
        CommonModule,
        // RoundProgressModule,
        RouterModule.forChild(ChartsRoutes),
        FormsModule,
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 100,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: "#78C000",
            innerStrokeColor: "#C7E596",
            animationDuration: 200,
          }),
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [ChartsComponent,
        HomepageComponent]
})

export class ChartsModule {}
