import { Routes } from '@angular/router';

import { ExperienceComponent } from './experience.component';

export const ExperienceRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'experience',
        component: ExperienceComponent
    }]
}
];
