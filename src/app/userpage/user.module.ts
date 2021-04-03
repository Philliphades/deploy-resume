import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutes } from './user.routing';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { MaterialModule } from '../app.module';
import { GoogleMapsComponent } from './googlemaps/googlemaps.component';
import { WizardComponent } from './wizard/wizard.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule, 
        NouisliderModule,
        TagInputModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [UserComponent, GoogleMapsComponent, WizardComponent]
})

export class UserModule {}
