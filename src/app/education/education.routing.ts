import { Routes } from '@angular/router';

import { EducationComponent } from './education.component';

export const EducationRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'education',
        component: EducationComponent
    }]
}
];
