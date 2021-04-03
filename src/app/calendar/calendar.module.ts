import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LbdTableComponent } from '../lbd/lbd-table/lbd-table.component';

import { CalendarComponent } from './calendar.component';
import { CalendarRoutes } from './calendar.routing';
import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { NouisliderModule } from 'ng2-nouislider';
import { MaterialModule } from '../app.module';
import { TagInputModule } from 'ngx-chips';
import { QuickProfileComponent } from './quick-profile/quick-profile.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CalendarRoutes),
        FormsModule,
        ReactiveFormsModule,
        NouisliderModule,
        TagInputModule,
        MaterialModule
    ],
    declarations: [CalendarComponent,ExtendedFormsComponent, QuickProfileComponent]
})

export class CalendarModule {}
